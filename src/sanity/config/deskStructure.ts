import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { StructureBuilder, StructureResolverContext } from 'sanity/structure'

import {
  DocumentIcon,
  EarthAmericasIcon,
  BulbOutlineIcon,
  ChartUpwardIcon,
  ActivityIcon,
  ClipboardIcon,
  UsersIcon,
  BlockContentIcon,
  PlayIcon
} from '@sanity/icons'

export const deskStructure = (
  S: StructureBuilder,
  context: StructureResolverContext
) =>
  S.list()
    .title('Content Manager')
    .items([
      orderableDocumentListDeskItem({
        title: 'Climate Change',
        type: 'climate',
        icon: EarthAmericasIcon,
        S,
        context
      }),
      orderableDocumentListDeskItem({
        title: 'Energy Certification',
        type: 'energy',
        icon: BulbOutlineIcon,
        S,
        context
      }),
      orderableDocumentListDeskItem({
        title: 'Carbon Market',
        type: 'carbon',
        icon: ChartUpwardIcon,
        S,
        context
      }),
      orderableDocumentListDeskItem({
        title: 'Environment, Social & Governance',
        type: 'esg',
        icon: ActivityIcon,
        S,
        context
      }),
      orderableDocumentListDeskItem({
        title: 'Green House Gas Accounting',
        type: 'ghg',
        icon: ClipboardIcon,
        S,
        context
      }),
      orderableDocumentListDeskItem({
        title: 'Academy',
        type: 'academy',
        icon: UsersIcon,
        S,
        context
      }),
      S.divider(),
      S.documentTypeListItem('partner').title('Partners').icon(UsersIcon),
      S.divider(),
      S.listItem()
        .icon(BlockContentIcon)
        .title('Spotlight News')
        .child(
          S.editor().schemaType('spotlightNews').documentId('spotlightNews')
        ),
      S.documentTypeListItem('news').title('News').icon(BlockContentIcon),
      S.documentTypeListItem('video').title('Videos').icon(PlayIcon)
    ])
