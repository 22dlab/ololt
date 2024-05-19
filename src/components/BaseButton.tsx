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
  download?: boolean
}

export default function BaseButton({
  type,
  icon,
  label,
  down,
  download
}: ButtonProps) {
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
      {download && (
        <svg
          width='16'
          height='17'
          viewBox='0 0 16 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13 12.7505V14.7505H3V12.7505H2V14.7505C2 15.0157 2.10536 15.2701 2.29289 15.4576C2.48043 15.6451 2.73478 15.7505 3 15.7505H13C13.2652 15.7505 13.5196 15.6451 13.7071 15.4576C13.8946 15.2701 14 15.0157 14 14.7505V12.7505H13Z'
            fill='#FFD6E8'
          />
          <path
            d='M13 7.75049L12.295 7.04549L8.5 10.8355V1.75049H7.5V10.8355L3.705 7.04549L3 7.75049L8 12.7505L13 7.75049Z'
            fill='#FFD6E8'
          />
        </svg>
      )}
    </div>
  )
}
