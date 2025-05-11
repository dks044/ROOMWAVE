import cn from 'classnames'

export const SkeletonBox = ({ classname }: { classname?: string }) => {
  return (
    <div
      className={cn(
        'bg-gray-200 animate-pulse bg-muted/80 rounded-md object-fill z-[0]',
        classname,
      )}
    />
  )
}
