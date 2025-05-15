// lib/templates/linkedin/post-basic.ts
import { z } from "zod"

import { absoluteUrl } from "@/lib/url"

import { backgroundSchema } from "../elements/background"
import { canvasSchema } from "../elements/canvas"
import { imageSchema } from "../elements/image"
import { textSchema } from "../elements/text"

export const postBasicTemplateSchema = z.object({
  name: z.literal("linkedin:post-basic"),
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
    width: z.number().default(1200),
    height: z.number().default(627),
  }),
})
export type PostBasicTemplate = z.infer<typeof postBasicTemplateSchema>

export const postBasicTemplateDefault: PostBasicTemplate = {
  name: "linkedin:post-basic",
  params: {
    title: {
      text: "5 Ways to Improve Team Productivity",
      fontFamily: "inter",
      fontWeight: 600,
      fontSize: 42,
      color: "#030712",
    },
    description: {
      text: "Professional insights for better teamwork",
      fontFamily: "inter",
      fontWeight: 400,
      fontSize: 24,
      color: "#4b5563",
    },
    logo: {
      url: absoluteUrl("/samples/logos/company.svg"),
    },
    image: {
      url: absoluteUrl("/samples/linkedin-post.jpg"),
    },
  },
  background: {
    type: "color",
    color: "#ffffff",
    noise: 0.05,
  },
  canvas: {
    width: 1200,
    height: 627,
  },
}
