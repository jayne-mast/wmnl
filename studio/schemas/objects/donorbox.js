export default {
  name: 'donorbox',
  title: 'Donorbox',
  type: 'object',
  fields: [
    {
      title: 'Pre-filled amount (€)',
      name: 'prefill',
      type: 'number'
    }
  ],
  preview: {
    select: {
      prefill: 'prefill'
    },
    prepare({ prefill }) {
      return {
        title: 'Donorbox',
        subtitle: prefill ? '€ ' + prefill : ''
      };
    }
  }
};
