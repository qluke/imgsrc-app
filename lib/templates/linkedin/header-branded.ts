// lib/templates/linkedin/header-branded.ts
import { z } from "zod"

import { absoluteUrl } from "@/lib/url"

import { backgroundSchema } from "../elements/background"
import { canvasSchema } from "../elements/canvas"
import { imageSchema } from "../elements/image"
import { textSchema } from "../elements/text"

export const headerBrandedTemplateSchema = z.object({
  name: z.literal("linkedin:header-branded"),
  params: z.object({
    title: textSchema.merge(
      z.object({
        // apply defaults
        fontWeight: textSchema.shape.fontWeight.default(700),
        fontSize: textSchema.shape.fontSize.default(40),
      })
    ),
    subtitle: textSchema.merge(
      z.object({
        // apply defaults
        fontSize: textSchema.shape.fontSize.default(22),
      })
    ),
    logo: imageSchema,
    image: imageSchema,
  }),
  background: backgroundSchema,
  canvas: canvasSchema.extend({
    width: z.number().default(1584),
    height: z.number().default(396),
  }),
})
export type HeaderBrandedTemplate = z.infer<typeof headerBrandedTemplateSchema>

export const headerBrandedTemplateDefault: HeaderBrandedTemplate = {
  name: "linkedin:header-branded",
  params: {
    title: {
      text: "TechCorp Solutions",
      fontFamily: "inter",
      fontWeight: 700,
      fontSize: 40,
      color: "#030712",
    },
    subtitle: {
      text: "Innovative Software for Modern Businesses",
      fontFamily: "inter",
      fontWeight: 400,
      fontSize: 22,
      color: "#4b5563",
    },
    logo: {
      url: absoluteUrl("/samples/logos/techcorp.svg"),
    },
    image: {
      url: absoluteUrl("/samples/linkedin-header.jpg"),
    },
  },
  background: {
    type: "color",
    color: "#ffffff",
    noise: 0.05,
  },
  canvas: {
    width: 1584,
    height: 396,
  },
}
