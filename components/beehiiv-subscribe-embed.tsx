"use client"

import Script from "next/script"

/** From Beehiiv → Audience → Subscribe forms → Get embed code */
const DEFAULT_SCRIPT_SRC = "https://subscribe-forms.beehiiv.com/embed.js"
const DEFAULT_IFRAME_SRC =
  "https://subscribe-forms.beehiiv.com/ecabfd1a-cb1f-4dd1-a251-c85cac171f43"

type BeehiivSubscribeEmbedProps = {
  className?: string
  /** Override defaults if you regenerate the form in Beehiiv */
  iframeSrc?: string
  scriptSrc?: string
}

export default function BeehiivSubscribeEmbed({
  className,
  iframeSrc = DEFAULT_IFRAME_SRC,
  scriptSrc = DEFAULT_SCRIPT_SRC,
}: BeehiivSubscribeEmbedProps) {
  return (
    <div className={className}>
      <Script src={scriptSrc} strategy="afterInteractive" />
      <iframe
        src={iframeSrc}
        title="Newsletter signup"
        className="beehiiv-embed"
        data-test-id="beehiiv-embed"
        frameBorder={0}
        scrolling="no"
        style={{
          width: "400px",
          height: "54px",
          margin: 0,
          borderRadius: 0,
          backgroundColor: "transparent",
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          maxWidth: "100%",
        }}
      />
    </div>
  )
}
