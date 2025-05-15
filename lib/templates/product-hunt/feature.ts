// lib/templates/product-hunt/feature.ts
import { z } from "zod"

import { absoluteUrl } from "@/lib/url"

import { backgroundSchema } from "../elements/background"
import { canvasSchema } from "../elements/canvas"
import { imageSchema } from "../elements/image"
import { textSchema } from "../elements/text"

export const featureTemplateSchema = z.object({
  name: z.literal("product-hunt:feature"),
  params: z.object({
    title: textSchema.merge(
      z.object({
        // apply defaults
        fontWeight: textSchema.shape.fontWeight.default(600),
        fontSize: textSchema.shape.fontSize.default(42),
      })
    ),
    description: textSchema.merge(
      z.object({
        // apply defaults
        fontSize: textSchema.shape.fontSize.default(24),
      })
    ),
    logo: imageSchema,
    image: imageSchema,
  }),
  background: backgroundSchema,
  canvas: canvasSchema.extend({
    width: z.number().default(1600),
    height: z.number().default(900),
  }),
})
export type FeatureTemplate = z.infer<typeof featureTemplateSchema>

export const featureTemplateDefault: FeatureTemplate = {
  name: "product-hunt:feature",
  params: {
    title: {
      text: "Featured on Product Hunt",
      fontFamily: "inter",
      fontWeight: 600,
      fontSize: 42,
      color: "#111827",
    },
    description: {
      text: "Join thousands of users who love our product",
      fontFamily: "inter",
      fontWeight: 400,
      fontSize: 24,
      color: "#4b5563",
    },
    logo: {
      url: absoluteUrl("/samples/logos/ph-logo.svg"),
    },
    image: {
      url: absoluteUrl("/samples/product-feature.jpg"),
    },
  },
  background: {
    type: "linear-gradient",
    direction: "to bottom",
    colorStops: ["#fffbeb", "#fef3c7"],
    noise: 0.05,
  },
  canvas: {
    width: 1600,
    height: 900,
  },
}
