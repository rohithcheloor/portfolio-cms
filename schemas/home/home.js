import {HomeIcon} from '@sanity/icons'
const home = {
  name: 'home',
  type: 'document',
  title: 'Home',
  icon: HomeIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slideshow',
      type: 'array',
      title: 'Slideshow',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true, // <-- Defaults to false
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}
export default home
