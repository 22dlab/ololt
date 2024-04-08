import { ContentType } from '@/type'

import TextBlock from './TextBlock'

export default function Content({ content }: { content: ContentType[] }) {
  return (
    <div className='container py-96'>
      <div className='w-full flex'>
        <div className='w-3-cols-vw mr-gutter'>
          <p className='f-heading-5'>Specialized Areas</p>
          <div className='mt-32'>
            {content.slice(1, content.length).map((item, index) => (
              <div
                key={index}
                className='px-16 py-12 f-ui-1 border-l-4 box-border border-secondary'
              >
                <a href='#'>{item.name.en}</a>
              </div>
            ))}
          </div>
        </div>
        <div className='w-9-cols-vw space-y-48'>
          {content.map((x, index) => {
            return (
              <div key={index} className='space-y-60'>
                {index !== 0 && (
                  <div className='f-heading-1 pt-48 border-t border-primary w-6-cols-vw'>
                    <p>{x.name.en}</p>
                  </div>
                )}
                {x.components.map((item, index) => {
                  switch (item._type) {
                    case 'textBlock': {
                      return <TextBlock item={item} />
                    }
                  }
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
