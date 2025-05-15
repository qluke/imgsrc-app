// lib/templates/x/post/promo.ts
import { z } from "zod"

import { backgroundSchema } from "../../elements/background"
import { canvasSchema } from "../../elements/canvas"
import { textSchema } from "../../elements/text"

export const promoTemplateSchema = z.object({
  name: z.literal("x:post-promo"),
  params: z.object({
    title: textSchema.merge(
      z.object({
        // apply defaults
        fontWeight: textSchema.shape.fontWeight.default(700),
        fontSize: textSchema.shape.fontSize.default(48),
      })
    ),
    description: textSchema.merge(
      z.object({
        // apply defaults
        fontSize: textSchema.shape.fontSize.default(24),
      })
    ),
    button: textSchema.merge(
      z.object({
        // apply defaults
        fontSize: textSchema.shape.fontSize.default(20),
        background: z.string().default("#4f46e5"),
      })
    ),
  }),
  background: backgroundSchema,
  canvas: canvasSchema.extend({
    width: z.number().default(1024),
    height: z.number().default(512),
  }),
})
export type PromoTemplate = z.infer<typeof promoTemplateSchema>

export const promoTemplateDefault: PromoTemplate = {
  name: "x:post-promo",
  params: {
    title: {
      text: "Join Our Community",
      fontFamily: "inter",
      fontWeight: 700,
      fontSize: 48,
      color: "#ffffff",
    },
    description: {
      text: "Connect with like-minded professionals",
      fontFamily: "inter",
      fontWeight: 400,
      fontSize: 24,
      color: "#f9fafb",
    },
    button: {
      text: "Sign Up",
      fontFamily: "inter",
      fontWeight: 600,
      fontSize: 20,
      color: "#ffffff",
      background: "#4f46e5",
    },
  },
  background: {
    type: "linear-gradient",
    direction: "to bottom right",
    colorStops: ["#4f46e5", "#7c3aed"],
    noise: 0.1,
    gridOverlay: {
      pattern: "dots",
      color: "#ffffff",
      opacity: 0.4,
      blurRadius: 20,
    },
  },
  canvas: {
    width: 1024,
    height: 512,
  },
}
