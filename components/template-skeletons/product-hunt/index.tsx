// components/template-skeletons/product-hunt/index.tsx
import { Skeleton } from "../skeleton"

export function Launch() {
  return (
    <div className="flex aspect-[16/9] h-full w-full">
      <div className="flex w-1/2 flex-col items-center justify-center p-2">
        <Skeleton className="h-5 w-5 rounded-md md:h-8 md:w-8" />
        <Skeleton className="mt-2 h-3 w-3/4 md:h-4" />
        <Skeleton className="mt-1 h-2 w-1/2 md:h-3" />
        <div className="mt-2 flex space-x-1">
          <Skeleton className="h-2 w-6 rounded-full md:h-3 md:w-10" />
          <Skeleton className="h-2 w-6 rounded-full md:h-3 md:w-10" />
        </div>
      </div>
      <div className="flex w-1/2 flex-col justify-center">
        <Skeleton className="h-1/2 w-full rounded-md" />
      </div>
    </div>
  )
}

export function Feature() {
  return (
    <div className="flex aspect-[16/9] h-full w-full flex-col">
      <Skeleton className="h-2/3 w-full" />
      <div className="flex items-center justify-between p-2">
        <div className="flex flex-col space-y-1">
          <Skeleton className="h-3 w-1/3 md:h-4" />
          <Skeleton className="h-2 w-1/2 md:h-3" />
        </div>
        <Skeleton className="h-6 w-6 rounded-md md:h-10 md:w-10" />
      </div>
    </div>
  )
}
