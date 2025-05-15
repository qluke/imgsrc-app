// components/templates/index.tsx
import * as blog from "./blog"
import * as facebook from "./facebook"
import * as linkedin from "./linkedin"
import * as og from "./open-graph"
import * as productHunt from "./product-hunt"
import * as x from "./x"

export const templates = {
  // Open Graph
  "og:basic": og.basic,
  "og:notice": og.notice,
  "og:hero": og.hero,
  "og:image-right": og.imageRight,
  "og:logos": og.logos,

  // X/Twitter Header templates
  "x:header-basic": x.header.basic,
  "x:header-minimalist": x.header.minimalist,
  "x:header-logo": x.header.logo,

  // X/Twitter Post templates
  "x:post-standard": x.post.standard,
  "x:post-promo": x.post.promo,

  // Blog templates
  "blog:featured": blog.featured,
  "blog:title": blog.title,
  "blog:cover": blog.cover,

  // Facebook templates
  "facebook:post-basic": facebook.postBasic,
  "facebook:post-promotion": facebook.postPromotion,
  "facebook:cover-simple": facebook.coverSimple,
  "facebook:cover-branded": facebook.coverBranded,

  // LinkedIn templates
  "linkedin:post-basic": linkedin.postBasic,
  "linkedin:post-feature": linkedin.postFeature,
  "linkedin:header-simple": linkedin.headerSimple,
  "linkedin:header-branded": linkedin.headerBranded,

  // Product Hunt templates
  "product-hunt:launch": productHunt.launch,
  "product-hunt:feature": productHunt.feature,
}
