// lib/templates/product-hunt/launch.ts
import { z } from "zod"

import { absoluteUrl } from "@/lib/url"

import { backgroundSchema } from "../elements/background"
import { canvasSchema } from "../elements/canvas"
import { imageSchema } from "../elements/image"
import { textSchema } from "../elements/text"

export const launchTemplateSchema = z.object({
  name: z.literal("product-hunt:launch"),
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
    tagline: textSchema.merge(
      z.object({
        // apply defaults
        fontSize: textSchema.shape.fontSize.default(20),
      })
    ),
    logo: imageSchema,
    image: imageSchema,
  }),
  background: backgroundSchema,
  canvas: canvasSchema.extend({
    width: z.number().default(1600),
    height: z.number().default(900),
  }),
})
export type LaunchTemplate = z.infer<typeof launchTemplateSchema>

export const launchTemplateDefault: LaunchTemplate = {
  name: "product-hunt:launch",
  params: {
    title: {
      text: "ProductName",
      fontFamily: "inter",
      fontWeight: 700,
      fontSize: 48,
      color: "#da552f",
    },
    description: {
      text: "The easiest way to build amazing products",
      fontFamily: "inter",
      fontWeight: 500,
      fontSize: 24,
      color: "#4b5563",
    },
    tagline: {
      text: "LAUNCHING TODAY",
      fontFamily: "inter",
      fontWeight: 600,
      fontSize: 20,
      color: "#111827",
    },
    logo: {
      url: absoluteUrl("/samples/logos/product.svg"),
    },
    image: {
      url: absoluteUrl("/samples/product-screenshot.png"),
    },
  },
  background: {
    type: "color",
    color: "#ffffff",
    noise: 0.05,
  },
  canvas: {
    width: 1600,
    height: 900,
  },
}
