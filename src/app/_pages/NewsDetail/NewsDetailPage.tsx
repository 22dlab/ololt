import { NewsType } from '@/type'
import Content from './Content'

export default function NewsDetailPage({ news }: { news: NewsType }) {
  return (
    <div className='pt-48 lg:pt-96 text-primary'>
      <Content news={news} />
    </div>
  )
}
