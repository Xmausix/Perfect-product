import { useEffect, useState } from "react";

// TODO: po weryfikacji w Google AdSense wstaw swój identyfikator wydawcy (ca-pub-...)
export const ADSENSE_CLIENT = "ca-pub-0000000000000000";

type AdSlotProps = {
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSlot({
  slot,
  format = "auto",
  responsive = true,
  className,
  style,
}: AdSlotProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // ignored
    }
  }, []);

  if (!mounted) return <div className={className} aria-hidden="true" />;

  return (
    <div className={className} aria-label="Reklama">
      <ins
        className="adsbygoogle"
        style={{ display: "block", ...style }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
