import {CodeIcon} from '@sanity/icons'
const works = {
  name: 'works',
  type: 'document',
  title: 'Works',
  icon: CodeIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Skill Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'screenshot',
      type: 'image',
      title: 'Screenshots',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      validation: (Rule) => Rule.required(),
    },
  ],
}
export default works
