export default {
  name: 'companyInfo',
  title: 'Company Info',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  fieldsets: [
    { name: 'social', title: 'Social media links' },
    { name: 'address', title: 'Address' },
  ],
  fields: [
    {
      name: 'name',
      title: 'Company name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
    {
      name: 'phone',
      title: 'Phone number',
      type: 'string',
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'url',
      fieldset: 'social',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      fieldset: 'social',
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      fieldset: 'social',
    },
    {
      name: 'pinterest',
      title: 'Pinterest',
      type: 'url',
      fieldset: 'social',
    },
    {
      name: 'vimeo',
      title: 'Vimeo',
      type: 'url',
      fieldset: 'social',
    },
    {
      name: 'address1',
      title: 'Address 1',
      type: 'string',
      fieldset: 'address',
    },
    {
      name: 'address2',
      title: 'Address 2',
      type: 'string',
      fieldset: 'address',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      fieldset: 'address',
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
      fieldset: 'address',
    },
    {
      name: 'zipCode',
      title: 'ZIP Code',
      type: 'string',
      fieldset: 'address',
    },
  ],
}
