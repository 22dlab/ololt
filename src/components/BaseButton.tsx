import { cva, type VariantProps } from 'class-variance-authority'

const buttonStyles = cva(
  'w-fit f-ui-1 flex items-center justify-center px-16 py-12 box-border transition-all ease-out duration-300 relative group overflow-hidden rounded-[4px] space-x-8',
  {
    variants: {
      type: {
        primary: 'bg-brand-magenta text-inverse hover:bg-[#740937]',
        secondary: 'text-primary border border-primary hover:border-secondary'
      }
    }
  }
)

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  label: string
  icon?: boolean
  down?: boolean
}

export default function BaseButton({ type, icon, label, down }: ButtonProps) {
  return (
    <div className={buttonStyles({ type })}>
      <p>{label}</p>
      {icon && (
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={down ? 'rotate-90' : 'rotate-0'}
        >
          <path
            d='M9 3L8.285 3.6965L12.075 7.5H2V8.5H12.075L8.285 12.2865L9 13L14 8L9 3Z'
            fill={type === 'primary' ? '#FFD6E8' : '#EC008C'}
          />
        </svg>
      )}
    </div>
  )
}
