// components/template-skeletons/index.tsx
import * as blog from "./blog"
import * as facebook from "./facebook"
import * as linkedin from "./linkedin"
import * as og from "./open-graph"
import * as productHunt from "./product-hunt"
import * as x from "./x"

export const skeletons = {
  // Open Graph
  "og:basic": og.Basic,
  "og:notice": og.Notice,
  "og:hero": og.Hero,
  "og:image-right": og.ImageRight,
  "og:logos": og.Logos,

  // X/Twitter Header templates
  "x:header-basic": x.header.Basic,
  "x:header-minimalist": x.header.Minimalist,
  "x:header-logo": x.header.Logo,

  // X/Twitter Post templates
  "x:post-standard": x.post.Standard,
  "x:post-promo": x.post.Promo,

  // Blog templates
  "blog:featured": blog.Featured,
  "blog:title": blog.Title,
  "blog:cover": blog.Cover,

  // Facebook templates
  "facebook:post-basic": facebook.PostBasic,
  "facebook:post-promotion": facebook.PostPromotion,
  "facebook:cover-simple": facebook.CoverSimple,
  "facebook:cover-branded": facebook.CoverBranded,

  // LinkedIn templates
  "linkedin:post-basic": linkedin.PostBasic,
  "linkedin:post-feature": linkedin.PostFeature,
  "linkedin:header-simple": linkedin.HeaderSimple,
  "linkedin:header-branded": linkedin.HeaderBranded,

  // Product Hunt templates
  "product-hunt:launch": productHunt.Launch,
  "product-hunt:feature": productHunt.Feature,
}
