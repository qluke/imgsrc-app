// components/forms/template-params/facebook/cover-branded.tsx
import { useTemplateStore } from "@/providers/template-store-provider"
import { MixerHorizontalIcon } from "@radix-ui/react-icons"

import { CoverBrandedTemplate } from "@/lib/templates/facebook"
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
  const params = template.params as CoverBrandedTemplate["params"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Template Properties</CardTitle>
        <CardDescription>
          Customize your branded Facebook cover by changing the properties.
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
                    fontSize={params.title?.fontSize || 32}
                    fontWeight={params.title?.fontWeight || 600}
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

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="logo">Logo</Label>
              <ImageSelector
                id="logo"
                onChange={(v) =>
                  template.updateParams({
                    logo: {
                      ...params.logo,
                      url: v ?? "",
                    },
                  })
                }
                initialFileName={
                  params.logo?.url
                    ? params.logo.url.split("/").pop()
                    : undefined
                }
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="image">Background Image</Label>
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
