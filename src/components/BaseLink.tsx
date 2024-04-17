export default function BaseLink({
  label,
  icon
}: {
  label: string
  icon?: boolean
}) {
  return (
    <div className='flex w-fit text-accent f-ui-1 justify-center items-center group space-x-8'>
      <p className='no-underline group-hover:underline'>{label}</p>
      {icon && (
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9 3L8.285 3.6965L12.075 7.5H2V8.5H12.075L8.285 12.2865L9 13L14 8L9 3Z'
            fill='#EC008C'
          />
        </svg>
      )}
    </div>
  )
}
