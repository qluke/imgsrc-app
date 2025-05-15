// lib/templates/x/post/standard.ts
import { z } from "zod"

import { absoluteUrl } from "@/lib/url"

import { backgroundSchema } from "../../elements/background"
import { canvasSchema } from "../../elements/canvas"
import { imageSchema } from "../../elements/image"
import { textSchema } from "../../elements/text"

export const standardTemplateSchema = z.object({
  name: z.literal("x:post-standard"),
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
    width: z.number().default(1024),
    height: z.number().default(512),
  }),
})
export type StandardTemplate = z.infer<typeof standardTemplateSchema>

export const standardTemplateDefault: StandardTemplate = {
  name: "x:post-standard",
  params: {
    title: {
      text: "Company Name",
      fontFamily: "inter",
      fontWeight: 600,
      fontSize: 32,
      color: "#030712",
    },
    logo: {
      url: absoluteUrl("/samples/logos/brand.svg"),
    },
    image: {
      url: absoluteUrl("/samples/twitter-post.jpg"),
    },
  },
  background: {
    type: "color",
    color: "#ffffff",
    noise: 0.05,
  },
  canvas: {
    width: 1024,
    height: 512,
  },
}
