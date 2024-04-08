import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { StructureBuilder, StructureResolverContext } from 'sanity/structure'

import { DocumentIcon } from '@sanity/icons'

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
        icon: DocumentIcon,
        S,
        context
      }),
      orderableDocumentListDeskItem({
        title: 'Energy Certification',
        type: 'energy',
        icon: DocumentIcon,
        S,
        context
      }),
      orderableDocumentListDeskItem({
        title: 'Carbon Market',
        type: 'carbon',
        icon: DocumentIcon,
        S,
        context
      }),
      orderableDocumentListDeskItem({
        title: 'Environment, Social & Governance',
        type: 'esg',
        icon: DocumentIcon,
        S,
        context
      }),
      orderableDocumentListDeskItem({
        title: 'Green House Gas Accounting',
        type: 'ghg',
        icon: DocumentIcon,
        S,
        context
      }),
      orderableDocumentListDeskItem({
        title: 'Academy',
        type: 'academy',
        icon: DocumentIcon,
        S,
        context
      })
      // S.listItem()
      //   .icon(CogIcon)
      //   .title('Settings')
      //   .child(S.editor().schemaType('settings').documentId('settings'))
    ])
