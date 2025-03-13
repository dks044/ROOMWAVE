import cn from 'classnames'

export const SkeletonBox = ({ classname }: { classname?: string }) => {
  return (
    <div
      className={
        (cn('w-full h-56 bg-gray-200 animate-pulse bg-muted/80 rounded-md'),
        classname)
      }
    >
      <div className="hidden">&nbsp;</div>
    </div>
  )
}
