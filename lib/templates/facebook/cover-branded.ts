// lib/templates/facebook/cover-branded.ts
import { z } from "zod"

import { absoluteUrl } from "@/lib/url"

import { backgroundSchema } from "../elements/background"
import { canvasSchema } from "../elements/canvas"
import { imageSchema } from "../elements/image"
import { textSchema } from "../elements/text"

export const coverBrandedTemplateSchema = z.object({
  name: z.literal("facebook:cover-branded"),
  params: z.object({
    title: textSchema.merge(
      z.object({
        // apply defaults
        fontWeight: textSchema.shape.fontWeight.default(600),
        fontSize: textSchema.shape.fontSize.default(32),
      })
    ),
    logo: imageSchema,
    image: imageSchema,
  }),
  background: backgroundSchema,
  canvas: canvasSchema.extend({
    width: z.number().default(820),
    height: z.number().default(360),
  }),
})
export type CoverBrandedTemplate = z.infer<typeof coverBrandedTemplateSchema>

export const coverBrandedTemplateDefault: CoverBrandedTemplate = {
  name: "facebook:cover-branded",
  params: {
    title: {
      text: "Innovation Starts Here",
      fontFamily: "inter",
      fontWeight: 600,
      fontSize: 32,
      color: "#030712",
    },
    logo: {
      url: absoluteUrl("/samples/logos/brand.svg"),
    },
    image: {
      url: absoluteUrl("/samples/fb-cover-image.jpg"),
    },
  },
  background: {
    type: "color",
    color: "#f3f4f6",
    noise: 0.05,
  },
  canvas: {
    width: 820,
    height: 360,
  },
}
