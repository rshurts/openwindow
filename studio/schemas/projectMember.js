export default {
  type: 'object',
  name: 'projectMember',
  title: 'Project Member',
  fields: [
    {
      title: 'Staff',
      name: 'staff',
      type: 'reference',
      to: { type: 'staff' },
    },
    {
      title: 'Roles',
      name: 'roles',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'radio',
        list: [
          { title: 'Designer', value: 'designer' },
          { title: 'Developer', value: 'developer' },
          { title: 'Editor', value: 'editor' },
          { title: 'Manager', value: 'manager' },
        ],
      },
    },
  ],
  preview: {
    select: {
      name: 'staff.name',
      roles: 'roles',
      media: 'staff.headshot',
    },
    prepare(data) {
      return {
        ...data,
        title: data.name,
        subtitle: data.roles && data.roles.join('/'),
      }
    },
  },
}
