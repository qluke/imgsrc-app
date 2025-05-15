// components/templates/blog/featured.tsx
import { patterns } from "@/lib/patterns"
import { FeaturedTemplate } from "@/lib/templates/blog"
import { toBackgroundShorthand } from "@/lib/templates/elements/background"
import { absoluteUrl } from "@/lib/url"

import { Watermark } from "../elements/watermark"

export const Template = ({
  template,
  renderWatermark,
}: {
  template: FeaturedTemplate
  renderWatermark: boolean
}) => (
  <div
    style={{
      width: template.canvas.width,
      height: template.canvas.height,
      display: "flex",
      flexDirection: "column",
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

    {template.params.image?.url && (
      <div
        style={{
          width: "100%",
          height: "70%",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={template.params.image.url}
        />
      </div>
    )}

    <div
      style={{
        padding: "2rem",
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

      {template.params.description?.text && (
        <div
          style={{
            fontFamily: template.params.description.fontFamily,
            fontWeight: template.params.description.fontWeight,
            fontSize: `${template.params.description.fontSize}px`,
            color: template.params.description.color,
          }}
        >
          {template.params.description.text}
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
