// components/templates/blog/title.tsx
import { patterns } from "@/lib/patterns"
import { TitleTemplate } from "@/lib/templates/blog"
import { toBackgroundShorthand } from "@/lib/templates/elements/background"
import { absoluteUrl } from "@/lib/url"

import { Watermark } from "../elements/watermark"

export const Template = ({
  template,
  renderWatermark,
}: {
  template: TitleTemplate
  renderWatermark: boolean
}) => (
  <div
    style={{
      width: template.canvas.width,
      height: template.canvas.height,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: toBackgroundShorthand(template.background),
      textAlign: "center",
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        maxWidth: "80%",
      }}
    >
      {template.params.category?.text && (
        <div
          style={{
            fontFamily: template.params.category.fontFamily,
            fontWeight: template.params.category.fontWeight,
            fontSize: `${template.params.category.fontSize}px`,
            color: template.params.category.color,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {template.params.category.text}
        </div>
      )}

      {template.params.title?.text && (
        <div
          style={{
            fontFamily: template.params.title.fontFamily,
            fontWeight: template.params.title.fontWeight,
            fontSize: `${template.params.title.fontSize}px`,
            color: template.params.title.color,
            letterSpacing: "-0.025em",
            lineHeight: 1.2,
          }}
        >
          {template.params.title.text}
        </div>
      )}

      {template.params.author?.text && (
        <div
          style={{
            fontFamily: template.params.author.fontFamily,
            fontWeight: template.params.author.fontWeight,
            fontSize: `${template.params.author.fontSize}px`,
            color: template.params.author.color,
          }}
        >
          {template.params.author.text}
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
