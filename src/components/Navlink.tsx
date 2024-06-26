export default function Navlink({
  label,
  active,
  top
}: {
  label: string
  active: boolean
  top?: boolean
}) {
  return (
    <div
      className={`h-full f-ui-1 py-[15px] px-16 box-border bg-transparent hover:bg-secondary transition-colors ${
        active && !top && 'border-b-2 border-secondary translate-y-1'
      }`}
    >
      <p
        className={`text-secondary hover:text-primary transition-colors ${
          active && !top && '-translate-y-1'
        }`}
      >
        {label}
      </p>
    </div>
  )
}
