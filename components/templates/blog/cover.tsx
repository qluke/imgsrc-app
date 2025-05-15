// components/templates/blog/cover.tsx
import { patterns } from "@/lib/patterns"
import { CoverTemplate } from "@/lib/templates/blog"
import { toBackgroundShorthand } from "@/lib/templates/elements/background"
import { absoluteUrl } from "@/lib/url"

import { Watermark } from "../elements/watermark"

export const Template = ({
  template,
  renderWatermark,
}: {
  template: CoverTemplate
  renderWatermark: boolean
}) => (
  <div
    style={{
      width: template.canvas.width,
      height: template.canvas.height,
      display: "flex",
      position: "relative",
      background: toBackgroundShorthand(template.background),
    }}
  >
    {template.params.image?.url && (
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
        }}
        src={template.params.image.url}
      />
    )}

    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%)",
      }}
    ></div>

    <div
      style={{
        position: "absolute",
        bottom: "3rem",
        left: "3rem",
        right: "3rem",
      }}
    >
      {template.params.title?.text && (
        <div
          style={{
            fontFamily: template.params.title.fontFamily,
            fontWeight: template.params.title.fontWeight,
            fontSize: `${template.params.title.fontSize}px`,
            color: template.params.title.color || "#ffffff",
            letterSpacing: "-0.025em",
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {template.params.title.text}
        </div>
      )}
    </div>

    {renderWatermark && (
      <Watermark
        style={{
          bottom: "1rem",
          right: "1rem",
        }}
      />
    )}
  </div>
)
