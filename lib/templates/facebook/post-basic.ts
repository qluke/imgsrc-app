// lib/templates/facebook/post-basic.ts
import { z } from "zod"

import { absoluteUrl } from "@/lib/url"

import { backgroundSchema } from "../elements/background"
import { canvasSchema } from "../elements/canvas"
import { imageSchema } from "../elements/image"
import { textSchema } from "../elements/text"

export const postBasicTemplateSchema = z.object({
  name: z.literal("facebook:post-basic"),
  params: z.object({
    title: textSchema.merge(
      z.object({
        // apply defaults
        fontWeight: textSchema.shape.fontWeight.default(600),
        fontSize: textSchema.shape.fontSize.default(40),
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
  canvas: canvasSchema,
})
export type PostBasicTemplate = z.infer<typeof postBasicTemplateSchema>

export const postBasicTemplateDefault: PostBasicTemplate = {
  name: "facebook:post-basic",
  params: {
    title: {
      text: "Introducing Our New Product Line",
      fontFamily: "inter",
      fontWeight: 600,
      fontSize: 40,
      color: "#030712",
    },
    description: {
      text: "Discover innovation at its finest",
      fontFamily: "inter",
      fontWeight: 400,
      fontSize: 24,
      color: "#4b5563",
    },
    logo: {
      url: absoluteUrl("/samples/logos/brand.svg"),
    },
    image: {
      url: absoluteUrl("/samples/fb-post.jpg"),
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
