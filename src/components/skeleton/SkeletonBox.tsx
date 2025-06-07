import cn from 'classnames'

export const SkeletonBox = ({ classname }: { classname?: string }) => {
  return (
    <div
      className={cn(
        'z-[0] animate-pulse rounded-md bg-gray-200 bg-muted/80 object-fill',
        classname,
      )}
    />
  )
}
