// lib/templates/index.ts
import { z } from "zod"

import * as blog from "./blog"
import * as facebook from "./facebook"
import * as linkedin from "./linkedin"
import * as og from "./open-graph"
import * as productHunt from "./product-hunt"
import * as x from "./x"

const templateNameSchema = z.union([
  // Open Graph
  z.literal("og:image-right"),
  z.literal("og:basic"),
  z.literal("og:hero"),
  z.literal("og:notice"),
  z.literal("og:logos"),

  // X Header templates
  z.literal("x:header-basic"),
  z.literal("x:header-minimalist"),
  z.literal("x:header-logo"),

  // X Post templates
  z.literal("x:post-standard"),
  z.literal("x:post-promo"),

  // Blog templates
  z.literal("blog:featured"),
  z.literal("blog:title"),
  z.literal("blog:cover"),

  // Facebook templates
  z.literal("facebook:post-basic"),
  z.literal("facebook:post-promotion"),
  z.literal("facebook:cover-simple"),
  z.literal("facebook:cover-branded"),

  // LinkedIn templates
  z.literal("linkedin:post-basic"),
  z.literal("linkedin:post-feature"),
  z.literal("linkedin:header-simple"),
  z.literal("linkedin:header-branded"),

  // Product Hunt templates
  z.literal("product-hunt:launch"),
  z.literal("product-hunt:feature"),
])
export type TemplateName = z.infer<typeof templateNameSchema>

export const templateSchema = z.discriminatedUnion("name", [
  // Open Graph
  og.imageRightTemplateSchema,
  og.basicTemplateSchema,
  og.heroTemplateSchema,
  og.noticeTemplateSchema,
  og.logosTemplateSchema,

  // X Header templates
  x.header.basicTemplateSchema,
  x.header.minimalistTemplateSchema,
  x.header.logoTemplateSchema,

  // X Post templates
  x.post.standardTemplateSchema,
  x.post.promoTemplateSchema,

  // Blog templates
  blog.featuredTemplateSchema,
  blog.titleTemplateSchema,
  blog.coverTemplateSchema,

  // Facebook templates
  facebook.postBasicTemplateSchema,
  facebook.postPromotionTemplateSchema,
  facebook.coverSimpleTemplateSchema,
  facebook.coverBrandedTemplateSchema,

  // LinkedIn templates
  linkedin.postBasicTemplateSchema,
  linkedin.postFeatureTemplateSchema,
  linkedin.headerSimpleTemplateSchema,
  linkedin.headerBrandedTemplateSchema,

  // Product Hunt templates
  productHunt.launchTemplateSchema,
  productHunt.featureTemplateSchema,
])
export type Template = z.infer<typeof templateSchema>

export const templateDefaults: Record<TemplateName, Template> = {
  // Open Graph
  "og:image-right": og.imageRightTemplateDefault,
  "og:basic": og.basicTemplateDefault,
  "og:hero": og.heroTemplateDefault,
  "og:notice": og.noticeTemplateDefault,
  "og:logos": og.logosTemplateDefault,

  // X Header templates
  "x:header-basic": x.header.basicTemplateDefault,
  "x:header-minimalist": x.header.minimalistTemplateDefault,
  "x:header-logo": x.header.logoTemplateDefault,

  // X Post templates
  "x:post-standard": x.post.standardTemplateDefault,
  "x:post-promo": x.post.promoTemplateDefault,

  // Blog templates
  "blog:featured": blog.featuredTemplateDefault,
  "blog:title": blog.titleTemplateDefault,
  "blog:cover": blog.coverTemplateDefault,

  // Facebook templates
  "facebook:post-basic": facebook.postBasicTemplateDefault,
  "facebook:post-promotion": facebook.postPromotionTemplateDefault,
  "facebook:cover-simple": facebook.coverSimpleTemplateDefault,
  "facebook:cover-branded": facebook.coverBrandedTemplateDefault,

  // LinkedIn templates
  "linkedin:post-basic": linkedin.postBasicTemplateDefault,
  "linkedin:post-feature": linkedin.postFeatureTemplateDefault,
  "linkedin:header-simple": linkedin.headerSimpleTemplateDefault,
  "linkedin:header-branded": linkedin.headerBrandedTemplateDefault,

  // Product Hunt templates
  "product-hunt:launch": productHunt.launchTemplateDefault,
  "product-hunt:feature": productHunt.featureTemplateDefault,
}
