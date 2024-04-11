import { ContentType } from '@/type'

import TextBlock from './TextBlock'
import IconCard from './IconCard'
import ServiceCard from './ServiceCard'

import Photo from './Photo'

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
                      return <TextBlock key={index} item={item} />
                    }
                    case 'iconCard': {
                      return <IconCard key={index} item={item} />
                    }
                    case 'serviceCard': {
                      return <ServiceCard key={index} item={item} />
                    }
                    // case 'statCard': {
                    //   return <StatCard key={index} item={item} />
                    // }
                    // case 'listItem': {
                    //   return <ListItem key={index} item={item} />
                    // }
                    // case 'accordion': {
                    //   return <Accordion key={index} item={item} />
                    // }
                    case 'photo': {
                      return <Photo key={index} item={item} />
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
