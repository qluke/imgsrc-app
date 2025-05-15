// components/templates/facebook/post-basic.tsx
import { patterns } from "@/lib/patterns"
import { toBackgroundShorthand } from "@/lib/templates/elements/background"
import { PostBasicTemplate } from "@/lib/templates/facebook"
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
        alignItems: "center",
        padding: "1.5rem",
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
            }}
          >
            {template.params.title.text}
          </div>
        )}
      </div>
    </div>

    {template.params.image?.url && (
      <div
        style={{
          flexGrow: 1,
          overflow: "hidden",
          maxHeight: "60%",
        }}
      >
        <img
          style={{
            width: "100%",
            objectFit: "cover",
          }}
          src={template.params.image.url}
        />
      </div>
    )}

    {template.params.description?.text && (
      <div
        style={{
          padding: "1.5rem",
        }}
      >
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
