// components/forms/template-params/linkedin/header-simple.tsx
import { useTemplateStore } from "@/providers/template-store-provider"
import { MixerHorizontalIcon } from "@radix-ui/react-icons"

import { HeaderSimpleTemplate } from "@/lib/templates/linkedin"
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
  const params = template.params as HeaderSimpleTemplate["params"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Template Properties</CardTitle>
        <CardDescription>
          Customize your LinkedIn header by changing the properties.
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
                    fontSize={params.title?.fontSize || 56}
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
              <Label htmlFor="subtitle">Subtitle</Label>
              <div className="flex space-x-2">
                <Input
                  id="subtitle"
                  value={params.subtitle?.text || ""}
                  onChange={(e) =>
                    template.updateParams({
                      subtitle: {
                        ...params.subtitle,
                        text: e.target.value,
                      },
                    })
                  }
                />

                <ResponsivePopover
                  title="Font Settings"
                  description="Customize the font for the subtitle."
                  trigger={
                    <Button variant="outline" size="icon">
                      <MixerHorizontalIcon className="h-4 w-4" />
                    </Button>
                  }
                >
                  <TextSettings
                    fontFamily={params.subtitle?.fontFamily || "inter"}
                    fontSize={params.subtitle?.fontSize || 28}
                    fontWeight={params.subtitle?.fontWeight || 400}
                    color={params.subtitle?.color || "#e5e7eb"}
                    onChangeFontFamily={(fontFamily) =>
                      template.updateParams({
                        subtitle: {
                          ...params.subtitle,
                          fontFamily,
                        },
                      })
                    }
                    onChangeFontSize={(fontSize) =>
                      template.updateParams({
                        subtitle: {
                          ...params.subtitle,
                          fontSize,
                        },
                      })
                    }
                    onChangeFontWeight={(fontWeight) =>
                      template.updateParams({
                        subtitle: {
                          ...params.subtitle,
                          fontWeight,
                        },
                      })
                    }
                    onChangeColor={(color) =>
                      template.updateParams({
                        subtitle: {
                          ...params.subtitle,
                          color,
                        },
                      })
                    }
                  />
                </ResponsivePopover>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
