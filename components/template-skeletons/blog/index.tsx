// components/template-skeletons/blog/index.tsx
import { Skeleton } from "../skeleton"

export function Featured() {
  return (
    <div className="flex aspect-video h-full w-full flex-col">
      <Skeleton className="h-2/3 w-full" />
      <div className="mt-2 flex flex-col space-y-1 p-1">
        <Skeleton className="h-3 w-3/4 md:h-4" />
        <Skeleton className="h-2 w-1/2 md:h-3" />
      </div>
    </div>
  )
}

export function Title() {
  return (
    <div className="flex aspect-video h-full w-full flex-col items-center justify-center space-y-2">
      <Skeleton className="h-3 w-1/3 md:h-4" />
      <Skeleton className="h-4 w-2/3 md:h-6" />
      <Skeleton className="h-2 w-1/4 md:h-3" />
    </div>
  )
}

export function Cover() {
  return (
    <div className="relative flex aspect-video h-full w-full flex-col">
      <Skeleton className="h-full w-full" />
      <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4">
        <Skeleton className="h-3 w-1/2 md:h-4" />
      </div>
    </div>
  )
}
