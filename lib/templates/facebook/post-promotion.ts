// lib/templates/facebook/post-promotion.ts
import { z } from "zod"

import { absoluteUrl } from "@/lib/url"

import { backgroundSchema } from "../elements/background"
import { canvasSchema } from "../elements/canvas"
import { imageSchema } from "../elements/image"
import { textSchema } from "../elements/text"

export const postPromotionTemplateSchema = z.object({
  name: z.literal("facebook:post-promotion"),
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
    image: imageSchema,
  }),
  background: backgroundSchema,
  canvas: canvasSchema,
})
export type PostPromotionTemplate = z.infer<typeof postPromotionTemplateSchema>

export const postPromotionTemplateDefault: PostPromotionTemplate = {
  name: "facebook:post-promotion",
  params: {
    title: {
      text: "Summer Sale - Up to 50% Off",
      fontFamily: "inter",
      fontWeight: 700,
      fontSize: 48,
      color: "#ffffff",
    },
    description: {
      text: "Limited time offer. Shop now before items sell out!",
      fontFamily: "inter",
      fontWeight: 400,
      fontSize: 24,
      color: "#f9fafb",
    },
    button: {
      text: "Shop Now",
      fontFamily: "inter",
      fontWeight: 600,
      fontSize: 20,
      color: "#ffffff",
      background: "#4f46e5",
    },
    image: {
      url: absoluteUrl("/samples/promo.jpg"),
    },
  },
  background: {
    type: "linear-gradient",
    direction: "to bottom right",
    colorStops: ["#3b82f6", "#1d4ed8"],
    noise: 0.1,
  },
  canvas: {
    width: 1200,
    height: 630,
  },
}
