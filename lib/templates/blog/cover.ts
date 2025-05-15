// lib/templates/blog/cover.ts
import { z } from "zod"

import { absoluteUrl } from "@/lib/url"

import { backgroundSchema } from "../elements/background"
import { canvasSchema } from "../elements/canvas"
import { imageSchema } from "../elements/image"
import { textSchema } from "../elements/text"

export const coverTemplateSchema = z.object({
  name: z.literal("blog:cover"),
  params: z.object({
    title: textSchema.merge(
      z.object({
        // apply defaults
        fontWeight: textSchema.shape.fontWeight.default(700),
        fontSize: textSchema.shape.fontSize.default(56),
      })
    ),
    image: imageSchema,
  }),
  background: backgroundSchema,
  canvas: canvasSchema,
})
export type CoverTemplate = z.infer<typeof coverTemplateSchema>

export const coverTemplateDefault: CoverTemplate = {
  name: "blog:cover",
  params: {
    title: {
      text: "Building Scalable Applications with Modern Architecture",
      fontFamily: "inter",
      fontWeight: 700,
      fontSize: 56,
      color: "#ffffff",
    },
    image: {
      url: absoluteUrl("/samples/blog-cover.jpg"),
    },
  },
  background: {
    type: "color",
    color: "#000000",
    noise: 0,
  },
  canvas: {
    width: 1200,
    height: 630,
  },
}
