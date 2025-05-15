// components/template-skeletons/linkedin/index.tsx
import { Skeleton } from "../skeleton"

export function PostBasic() {
  return (
    <div className="flex aspect-video h-full w-full flex-col p-1">
      <div className="mb-1 flex items-center space-x-2">
        <Skeleton className="h-3 w-3 rounded-full md:h-5 md:w-5" />
        <div className="flex flex-col space-y-1">
          <Skeleton className="h-2 w-1/4 md:h-3" />
          <Skeleton className="h-1 w-1/6 md:h-2" />
        </div>
      </div>
      <Skeleton className="mt-1 h-2/3 w-full" />
      <div className="mt-1">
        <Skeleton className="h-2 w-3/4 md:h-3" />
      </div>
    </div>
  )
}

export function PostFeature() {
  return (
    <div className="flex aspect-video h-full w-full">
      <div className="flex w-1/2 flex-col justify-center p-2">
        <Skeleton className="h-3 w-3/4 md:h-4" />
        <Skeleton className="mt-1 h-2 w-full md:h-3" />
        <Skeleton className="mt-1 h-2 w-full md:h-3" />
        <Skeleton className="mt-2 h-2 w-1/3 rounded-sm md:h-3" />
      </div>
      <Skeleton className="h-full w-1/2" />
    </div>
  )
}

export function HeaderSimple() {
  return (
    <div className="flex aspect-[1584/396] h-full w-full items-end p-2">
      <div className="mb-2 flex flex-col space-y-1">
        <Skeleton className="h-3 w-1/3 md:h-4" />
        <Skeleton className="h-2 w-1/2 md:h-3" />
      </div>
    </div>
  )
}

export function HeaderBranded() {
  return (
    <div className="flex aspect-[1584/396] h-full w-full">
      <Skeleton className="h-full w-2/3" />
      <div className="flex w-1/3 flex-col items-center justify-center">
        <Skeleton className="h-5 w-5 rounded-full md:h-8 md:w-8" />
        <Skeleton className="mt-1 h-2 w-1/2 md:h-3" />
        <Skeleton className="mt-1 h-1 w-2/3 md:h-2" />
      </div>
    </div>
  )
}
