// lib/templates/linkedin/header-simple.ts
import { z } from "zod"

import { backgroundSchema } from "../elements/background"
import { canvasSchema } from "../elements/canvas"
import { textSchema } from "../elements/text"

export const headerSimpleTemplateSchema = z.object({
  name: z.literal("linkedin:header-simple"),
  params: z.object({
    title: textSchema.merge(
      z.object({
        // apply defaults
        fontWeight: textSchema.shape.fontWeight.default(700),
        fontSize: textSchema.shape.fontSize.default(56),
      })
    ),
    subtitle: textSchema.merge(
      z.object({
        // apply defaults
        fontSize: textSchema.shape.fontSize.default(28),
      })
    ),
  }),
  background: backgroundSchema,
  canvas: canvasSchema.extend({
    width: z.number().default(1584),
    height: z.number().default(396),
  }),
})
export type HeaderSimpleTemplate = z.infer<typeof headerSimpleTemplateSchema>

export const headerSimpleTemplateDefault: HeaderSimpleTemplate = {
  name: "linkedin:header-simple",
  params: {
    title: {
      text: "John Smith",
      fontFamily: "inter",
      fontWeight: 700,
      fontSize: 56,
      color: "#ffffff",
    },
    subtitle: {
      text: "Software Engineer | Speaker | Tech Enthusiast",
      fontFamily: "inter",
      fontWeight: 400,
      fontSize: 28,
      color: "#e5e7eb",
    },
  },
  background: {
    type: "linear-gradient",
    direction: "to right",
    colorStops: ["#0a66c2", "#0e76a8"],
    noise: 0.1,
  },
  canvas: {
    width: 1584,
    height: 396,
  },
}
