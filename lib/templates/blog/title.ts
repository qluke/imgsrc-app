// lib/templates/blog/title.ts
import { z } from "zod"

import { backgroundSchema } from "../elements/background"
import { canvasSchema } from "../elements/canvas"
import { textSchema } from "../elements/text"

export const titleTemplateSchema = z.object({
  name: z.literal("blog:title"),
  params: z.object({
    category: textSchema.merge(
      z.object({
        // apply defaults
        fontSize: textSchema.shape.fontSize.default(20),
      })
    ),
    title: textSchema.merge(
      z.object({
        // apply defaults
        fontWeight: textSchema.shape.fontWeight.default(700),
        fontSize: textSchema.shape.fontSize.default(64),
      })
    ),
    author: textSchema.merge(
      z.object({
        // apply defaults
        fontSize: textSchema.shape.fontSize.default(24),
      })
    ),
  }),
  background: backgroundSchema,
  canvas: canvasSchema,
})
export type TitleTemplate = z.infer<typeof titleTemplateSchema>

export const titleTemplateDefault: TitleTemplate = {
  name: "blog:title",
  params: {
    category: {
      text: "DEVELOPMENT",
      fontFamily: "inter",
      fontWeight: 500,
      fontSize: 20,
      color: "#6366f1",
    },
    title: {
      text: "The Future of Web Development in 2025",
      fontFamily: "inter",
      fontWeight: 700,
      fontSize: 64,
      color: "#030712",
    },
    author: {
      text: "By John Doe • 10 min read",
      fontFamily: "inter",
      fontWeight: 400,
      fontSize: 24,
      color: "#4b5563",
    },
  },
  background: {
    type: "linear-gradient",
    direction: "to bottom right",
    colorStops: ["#f9fafb", "#f3f4f6"],
    noise: 0.05,
  },
  canvas: {
    width: 1200,
    height: 630,
  },
}
