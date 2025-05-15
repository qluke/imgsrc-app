// components/templates/x/post/standard.tsx
import { patterns } from "@/lib/patterns"
import { toBackgroundShorthand } from "@/lib/templates/elements/background"
import { StandardTemplate } from "@/lib/templates/x/post"
import { absoluteUrl } from "@/lib/url"

import { Watermark } from "../../elements/watermark"

export const Template = ({
  template,
  renderWatermark,
}: {
  template: StandardTemplate
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

    <div
      style={{
        display: "flex",
        padding: "2rem",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {template.params.logo?.url && (
        <img
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
          }}
          src={template.params.logo.url}
        />
      )}

      {template.params.title?.text && (
        <div
          style={{
            fontFamily: template.params.title.fontFamily,
            fontWeight: template.params.title.fontWeight,
            fontSize: `${template.params.title.fontSize}px`,
            color: template.params.title.color,
          }}
        >
          {template.params.title.text}
        </div>
      )}
    </div>

    {template.params.image?.url && (
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          padding: "0 2rem 2rem 2rem",
        }}
      >
        <img
          style={{
            width: "100%",
            objectFit: "cover",
            borderRadius: "0.75rem",
          }}
          src={template.params.image.url}
        />
      </div>
    )}

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
