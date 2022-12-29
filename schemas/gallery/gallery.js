import {ImagesIcon} from '@sanity/icons'
const gallery = {
  name: 'gallery',
  type: 'document',
  title: 'Gallery',
  icon: ImagesIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Skill Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
  ],
}
export default gallery
