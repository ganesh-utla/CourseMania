const schema = {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'resourceLink',
      title: 'Resource Link',
      type: 'url',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'poster',
      title: 'Poster',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['web development', 'full stack development', 'android development', 'system design', 'data strutures and algorithms', 'competitive programming', 'interview preparation', 'other']
      }
    },
  ]
}

export default schema;