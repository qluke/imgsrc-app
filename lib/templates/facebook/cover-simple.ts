// lib/templates/facebook/cover-simple.ts
import { z } from "zod"

import { backgroundSchema } from "../elements/background"
import { canvasSchema } from "../elements/canvas"
import { textSchema } from "../elements/text"

export const coverSimpleTemplateSchema = z.object({
  name: z.literal("facebook:cover-simple"),
  params: z.object({
    title: textSchema.merge(
      z.object({
        // apply defaults
        fontWeight: textSchema.shape.fontWeight.default(700),
        fontSize: textSchema.shape.fontSize.default(42),
      })
    ),
  }),
  background: backgroundSchema,
  canvas: canvasSchema.extend({
    width: z.number().default(820),
    height: z.number().default(360),
  }),
})
export type CoverSimpleTemplate = z.infer<typeof coverSimpleTemplateSchema>

export const coverSimpleTemplateDefault: CoverSimpleTemplate = {
  name: "facebook:cover-simple",
  params: {
    title: {
      text: "Creative Solutions for Modern Businesses",
      fontFamily: "inter",
      fontWeight: 700,
      fontSize: 42,
      color: "#ffffff",
    },
  },
  background: {
    type: "linear-gradient",
    direction: "to right",
    colorStops: ["#3b82f6", "#a855f7", "#ec4899"],
    noise: 0.1,
  },
  canvas: {
    width: 820,
    height: 360,
  },
}
