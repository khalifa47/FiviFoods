import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_desc',
      title: 'Short Description',
      type: 'slug',
      options: {
        maxLength: 200,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price of the Dish',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Dish Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
