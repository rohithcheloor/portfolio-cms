import {CodeBlockIcon} from '@sanity/icons'
const skillset = {
  name: 'skillset',
  type: 'document',
  title: 'Skillset',
  icon: CodeBlockIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Skill Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'experience',
      type: 'number',
      title: 'Years of Experience',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
}
export default skillset
