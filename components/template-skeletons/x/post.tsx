// components/template-skeletons/x/post.tsx
import { Skeleton } from "../skeleton"

export function Standard() {
  return (
    <div className="flex aspect-[1024/512] h-full w-full flex-col">
      <div className="mb-1 flex items-center space-x-2 p-1">
        <Skeleton className="h-3 w-3 rounded-full md:h-5 md:w-5" />
        <Skeleton className="h-2 w-1/4 md:h-3" />
      </div>
      <Skeleton className="h-3/4 w-full" />
    </div>
  )
}

export function Promo() {
  return (
    <div className="flex aspect-[1024/512] h-full w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-2">
        <Skeleton className="h-3 w-1/2 md:h-5" />
        <Skeleton className="h-2 w-2/3 md:h-3" />
        <Skeleton className="mt-1 h-2 w-1/4 rounded-md md:h-3" />
      </div>
    </div>
  )
}
