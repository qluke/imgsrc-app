// components/template-skeletons/facebook/index.tsx
import { Skeleton } from "../skeleton"

export function PostBasic() {
  return (
    <div className="flex aspect-video h-full w-full flex-col">
      <div className="mb-1 flex items-center space-x-2 p-1">
        <Skeleton className="h-3 w-3 rounded-full md:h-5 md:w-5" />
        <Skeleton className="h-2 w-1/4 md:h-3" />
      </div>
      <Skeleton className="h-2/3 w-full" />
      <div className="mt-1 p-1">
        <Skeleton className="h-2 w-3/4 md:h-3" />
      </div>
    </div>
  )
}

export function PostPromotion() {
  return (
    <div className="flex aspect-video h-full w-full flex-col">
      <Skeleton className="h-3/5 w-full" />
      <div className="mt-2 flex flex-col space-y-1 p-1">
        <Skeleton className="h-3 w-1/2 md:h-4" />
        <Skeleton className="h-2 w-3/4 md:h-3" />
        <div className="flex space-x-1 pt-1">
          <Skeleton className="h-2 w-1/6 rounded-sm md:h-3" />
        </div>
      </div>
    </div>
  )
}

export function CoverSimple() {
  return (
    <div className="flex aspect-[820/360] h-full w-full items-center justify-center">
      <Skeleton className="h-1/3 w-1/2" />
    </div>
  )
}

export function CoverBranded() {
  return (
    <div className="flex aspect-[820/360] h-full w-full">
      <div className="flex w-1/3 flex-col items-center justify-center p-2">
        <Skeleton className="h-4 w-4 rounded-full md:h-6 md:w-6" />
        <Skeleton className="mt-1 h-2 w-2/3 md:h-3" />
      </div>
      <Skeleton className="h-full w-2/3" />
    </div>
  )
}
