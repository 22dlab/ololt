import { useCurrentLocale } from '@/locale/client'
import { ItemType } from '@/type'

export default function StatCard({ item }: { item: ItemType }) {
  const locale = useCurrentLocale()

  return (
    <div className='lg:w-6-cols-vw space-y-32'>
      <p className='f-heading-4'>{item.title?.[locale]}</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-x-gutter gap-y-32'>
        {item.items?.map((x, index) => (
          <div
            key={index}
            className='p-16 space-y-36 border-l border-secondary'
          >
            <p className='f-heading-3'>{x.value?.[locale]}</p>
            <p className='f-ui-1'>{x.label?.[locale]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
