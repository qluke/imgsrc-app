// components/forms/template-params/blog/featured.tsx
import { useTemplateStore } from "@/providers/template-store-provider"
import { MixerHorizontalIcon } from "@radix-ui/react-icons"

import { FeaturedTemplate } from "@/lib/templates/blog"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextSettings } from "@/components/forms/text-settings"
import { ImageSelector } from "@/components/image-selector"
import { ResponsivePopover } from "@/components/responsive-popover"

export function Form() {
  const template = useTemplateStore((state) => state)
  const params = template.params as FeaturedTemplate["params"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Template Properties</CardTitle>
        <CardDescription>
          Customize your blog post by changing the properties.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <div className="flex space-x-2">
                <Input
                  id="title"
                  value={params.title?.text || ""}
                  onChange={(e) =>
                    template.updateParams({
                      title: {
                        ...params.title,
                        text: e.target.value,
                      },
                    })
                  }
                />

                <ResponsivePopover
                  title="Font Settings"
                  description="Customize the title font."
                  trigger={
                    <Button variant="outline" size="icon">
                      <MixerHorizontalIcon className="h-4 w-4" />
                    </Button>
                  }
                >
                  <TextSettings
                    fontFamily={params.title?.fontFamily || "inter"}
                    fontSize={params.title?.fontSize || 48}
                    fontWeight={params.title?.fontWeight || 700}
                    color={params.title?.color || "#030712"}
                    onChangeFontFamily={(fontFamily) =>
                      template.updateParams({
                        title: {
                          ...params.title,
                          fontFamily,
                        },
                      })
                    }
                    onChangeFontSize={(fontSize) =>
                      template.updateParams({
                        title: {
                          ...params.title,
                          fontSize,
                        },
                      })
                    }
                    onChangeFontWeight={(fontWeight) =>
                      template.updateParams({
                        title: {
                          ...params.title,
                          fontWeight,
                        },
                      })
                    }
                    onChangeColor={(color) =>
                      template.updateParams({
                        title: {
                          ...params.title,
                          color,
                        },
                      })
                    }
                  />
                </ResponsivePopover>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <div className="flex space-x-2">
                <Input
                  id="description"
                  value={params.description?.text || ""}
                  onChange={(e) =>
                    template.updateParams({
                      description: {
                        ...params.description,
                        text: e.target.value,
                      },
                    })
                  }
                />

                <ResponsivePopover
                  title="Font Settings"
                  description="Customize the font for the description."
                  trigger={
                    <Button variant="outline" size="icon">
                      <MixerHorizontalIcon className="h-4 w-4" />
                    </Button>
                  }
                >
                  <TextSettings
                    fontFamily={params.description?.fontFamily || "inter"}
                    fontSize={params.description?.fontSize || 24}
                    fontWeight={params.description?.fontWeight || 400}
                    color={params.description?.color || "#4b5563"}
                    onChangeFontFamily={(fontFamily) =>
                      template.updateParams({
                        description: {
                          ...params.description,
                          fontFamily,
                        },
                      })
                    }
                    onChangeFontSize={(fontSize) =>
                      template.updateParams({
                        description: {
                          ...params.description,
                          fontSize,
                        },
                      })
                    }
                    onChangeFontWeight={(fontWeight) =>
                      template.updateParams({
                        description: {
                          ...params.description,
                          fontWeight,
                        },
                      })
                    }
                    onChangeColor={(color) =>
                      template.updateParams({
                        description: {
                          ...params.description,
                          color,
                        },
                      })
                    }
                  />
                </ResponsivePopover>
              </div>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="image">Featured Image</Label>
              <ImageSelector
                id="image"
                onChange={(v) =>
                  template.updateParams({
                    image: {
                      ...params.image,
                      url: v ?? "",
                    },
                  })
                }
                initialFileName={
                  params.image?.url
                    ? params.image.url.split("/").pop()
                    : undefined
                }
              />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
