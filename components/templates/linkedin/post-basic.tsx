// components/templates/linkedin/post-basic.tsx
import { patterns } from "@/lib/patterns"
import { toBackgroundShorthand } from "@/lib/templates/elements/background"
import { PostBasicTemplate } from "@/lib/templates/linkedin"
import { absoluteUrl } from "@/lib/url"

import { Watermark } from "../elements/watermark"

export const Template = ({
  template,
  renderWatermark,
}: {
  template: PostBasicTemplate
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
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "5px",
          }}
          src={template.params.logo.url}
        />
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
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
              marginTop: "0.25rem",
            }}
          >
            {template.params.description.text}
          </div>
        )}
      </div>
    </div>

    {template.params.image?.url && (
      <div
        style={{
          flex: 1,
          padding: "0 2rem 2rem 2rem",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0.5rem",
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
