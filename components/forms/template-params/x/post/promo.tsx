// components/forms/template-params/x/post/promo.tsx
import { useTemplateStore } from "@/providers/template-store-provider"
import { MixerHorizontalIcon } from "@radix-ui/react-icons"

import { PromoTemplate } from "@/lib/templates/x/post"
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
import { ResponsivePopover } from "@/components/responsive-popover"

export function Form() {
  const template = useTemplateStore((state) => state)
  const params = template.params as PromoTemplate["params"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Template Properties</CardTitle>
        <CardDescription>
          Customize your promo post by changing the properties.
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
                    color={params.title?.color || "#ffffff"}
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
                    color={params.description?.color || "#f9fafb"}
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

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="button">Button Text</Label>
              <div className="flex space-x-2">
                <Input
                  id="button"
                  value={params.button?.text || ""}
                  onChange={(e) =>
                    template.updateParams({
                      button: {
                        ...params.button,
                        text: e.target.value,
                      },
                    })
                  }
                />

                <ResponsivePopover
                  title="Button Settings"
                  description="Customize the button appearance."
                  trigger={
                    <Button variant="outline" size="icon">
                      <MixerHorizontalIcon className="h-4 w-4" />
                    </Button>
                  }
                >
                  <TextSettings
                    fontFamily={params.button?.fontFamily || "inter"}
                    fontSize={params.button?.fontSize || 20}
                    fontWeight={params.button?.fontWeight || 600}
                    color={params.button?.color || "#ffffff"}
                    onChangeFontFamily={(fontFamily) =>
                      template.updateParams({
                        button: {
                          ...params.button,
                          fontFamily,
                        },
                      })
                    }
                    onChangeFontSize={(fontSize) =>
                      template.updateParams({
                        button: {
                          ...params.button,
                          fontSize,
                        },
                      })
                    }
                    onChangeFontWeight={(fontWeight) =>
                      template.updateParams({
                        button: {
                          ...params.button,
                          fontWeight,
                        },
                      })
                    }
                    onChangeColor={(color) =>
                      template.updateParams({
                        button: {
                          ...params.button,
                          color,
                        },
                      })
                    }
                  />
                </ResponsivePopover>
              </div>
              <Label htmlFor="button-bg" className="mt-2">
                Button Background
              </Label>
              <Input
                id="button-bg"
                value={params.button?.background || "#4f46e5"}
                type="color"
                onChange={(e) =>
                  template.updateParams({
                    button: {
                      ...params.button,
                      background: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
