// lib/templates/linkedin/post-feature.ts
import { z } from "zod"

import { absoluteUrl } from "@/lib/url"

import { backgroundSchema } from "../elements/background"
import { canvasSchema } from "../elements/canvas"
import { imageSchema } from "../elements/image"
import { textSchema } from "../elements/text"

export const postFeatureTemplateSchema = z.object({
  name: z.literal("linkedin:post-feature"),
  params: z.object({
    title: textSchema.merge(
      z.object({
        // apply defaults
        fontWeight: textSchema.shape.fontWeight.default(700),
        fontSize: textSchema.shape.fontSize.default(44),
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
        background: z.string().default("#0a66c2"),
      })
    ),
    image: imageSchema,
  }),
  background: backgroundSchema,
  canvas: canvasSchema.extend({
    width: z.number().default(1200),
    height: z.number().default(627),
  }),
})
export type PostFeatureTemplate = z.infer<typeof postFeatureTemplateSchema>

export const postFeatureTemplateDefault: PostFeatureTemplate = {
  name: "linkedin:post-feature",
  params: {
    title: {
      text: "New Feature Announcement",
      fontFamily: "inter",
      fontWeight: 700,
      fontSize: 44,
      color: "#030712",
    },
    description: {
      text: "We've added powerful new capabilities to our platform",
      fontFamily: "inter",
      fontWeight: 400,
      fontSize: 24,
      color: "#4b5563",
    },
    button: {
      text: "Learn More",
      fontFamily: "inter",
      fontWeight: 600,
      fontSize: 20,
      color: "#ffffff",
      background: "#0a66c2",
    },
    image: {
      url: absoluteUrl("/samples/feature.jpg"),
    },
  },
  background: {
    type: "linear-gradient",
    direction: "to bottom",
    colorStops: ["#f9fafb", "#f3f4f6"],
    noise: 0.05,
  },
  canvas: {
    width: 1200,
    height: 627,
  },
}
