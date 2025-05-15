// components/templates/linkedin/header-simple.tsx
import { patterns } from "@/lib/patterns"
import { toBackgroundShorthand } from "@/lib/templates/elements/background"
import { HeaderSimpleTemplate } from "@/lib/templates/linkedin"
import { absoluteUrl } from "@/lib/url"

import { Watermark } from "../elements/watermark"

export const Template = ({
  template,
  renderWatermark,
}: {
  template: HeaderSimpleTemplate
  renderWatermark: boolean
}) => (
  <div
    style={{
      width: template.canvas.width,
      height: template.canvas.height,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      background: toBackgroundShorthand(template.background),
    }}
  >
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        inset: 0,
        filter: "brightness(100%) contrast(150%)",
        opacity: template.background.noise,
        backgroundImage: `url('${absoluteUrl("/noise.svg")}')`,
        backgroundRepeat: "repeat",
      }}
    ></div>

    {template.background.gridOverlay && (
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          backgroundImage: `url('${patterns[template.background.gridOverlay.pattern].svg({ color: template.background.gridOverlay.color, opacity: template.background.gridOverlay.opacity })}')`,
          maskImage:
            template.background.gridOverlay.blurRadius > 0
              ? `radial-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) ${100 - template.background.gridOverlay.blurRadius}%)`
              : "none",
        }}
      ></div>
    )}

    <div
      style={{
        padding: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      {template.params.title?.text && (
        <div
          style={{
            fontFamily: template.params.title.fontFamily,
            fontWeight: template.params.title.fontWeight,
            fontSize: `${template.params.title.fontSize}px`,
            color: template.params.title.color,
            letterSpacing: "-0.025em",
          }}
        >
          {template.params.title.text}
        </div>
      )}

      {template.params.subtitle?.text && (
        <div
          style={{
            fontFamily: template.params.subtitle.fontFamily,
            fontWeight: template.params.subtitle.fontWeight,
            fontSize: `${template.params.subtitle.fontSize}px`,
            color: template.params.subtitle.color,
          }}
        >
          {template.params.subtitle.text}
        </div>
      )}
    </div>

    {renderWatermark && (
      <Watermark
        style={{
          top: "1rem",
          right: "1rem",
        }}
      />
    )}
  </div>
)
