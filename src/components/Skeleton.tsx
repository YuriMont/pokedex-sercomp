export function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={`animate-pulse bg-slate-300 rounded-lg ${className}`}
      {...props}
    />
  )
}