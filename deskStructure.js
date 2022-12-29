import {HomeIcon} from '@sanity/icons'
export const deskStructure = (S) =>
  S.list()
    .title('Portfolio Pages')
    .items([
      S.listItem()
        .title('Home')
        .icon(HomeIcon)
        .child(S.document().schemaType('home').documentId('home')),
      ...S.documentTypeListItems().filter((listItem) => !['home'].includes(listItem.getId())),
    ])
