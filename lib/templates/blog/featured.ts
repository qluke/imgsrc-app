// lib/templates/blog/featured.ts
import { z } from "zod"

import { absoluteUrl } from "@/lib/url"

import { backgroundSchema } from "../elements/background"
import { canvasSchema } from "../elements/canvas"
import { imageSchema } from "../elements/image"
import { textSchema } from "../elements/text"

export const featuredTemplateSchema = z.object({
  name: z.literal("blog:featured"),
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
    image: imageSchema,
  }),
  background: backgroundSchema,
  canvas: canvasSchema,
})
export type FeaturedTemplate = z.infer<typeof featuredTemplateSchema>

export const featuredTemplateDefault: FeaturedTemplate = {
  name: "blog:featured",
  params: {
    title: {
      text: "10 Essential Web Development Tools for 2025",
      fontFamily: "inter",
      fontWeight: 700,
      fontSize: 48,
      color: "#030712",
    },
    description: {
      text: "Boost your productivity with these game-changing tools",
      fontFamily: "inter",
      fontWeight: 400,
      fontSize: 24,
      color: "#4b5563",
    },
    image: {
      url: absoluteUrl("/samples/blog-featured.jpg"),
    },
  },
  background: {
    type: "color",
    color: "#ffffff",
    noise: 0.05,
  },
  canvas: {
    width: 1200,
    height: 630,
  },
}
