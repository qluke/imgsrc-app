// components/templates/product-hunt/launch.tsx
import { patterns } from "@/lib/patterns"
import { toBackgroundShorthand } from "@/lib/templates/elements/background"
import { LaunchTemplate } from "@/lib/templates/product-hunt"
import { absoluteUrl } from "@/lib/url"

import { Watermark } from "../elements/watermark"

export const Template = ({
  template,
  renderWatermark,
}: {
  template: LaunchTemplate
  renderWatermark: boolean
}) => (
  <div
    style={{
      width: template.canvas.width,
      height: template.canvas.height,
      display: "flex",
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
        width: "45%",
        padding: "3rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {template.params.tagline?.text && (
        <div
          style={{
            fontFamily: template.params.tagline.fontFamily,
            fontWeight: template.params.tagline.fontWeight,
            fontSize: `${template.params.tagline.fontSize}px`,
            color: template.params.tagline.color,
            marginBottom: "1rem",
          }}
        >
          {template.params.tagline.text}
        </div>
      )}

      {template.params.logo?.url && (
        <img
          style={{
            width: "8rem",
            height: "8rem",
            marginBottom: "1.5rem",
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
            letterSpacing: "-0.025em",
            marginBottom: "0.75rem",
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

    {template.params.image?.url && (
      <div
        style={{
          width: "55%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 3rem 3rem 0",
        }}
      >
        <img
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "0.5rem",
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
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
