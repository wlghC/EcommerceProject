export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      {
        name: "image",
        title: "Image",
        type: "array",
        of: [{ type: 'Image'}],
        option: {
            hotspot: true,
        }
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        option: {
            source: 'name',
            maxLength: 90,
        }
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'details',
        title: 'Details',
        type: 'string',
      }
    ],
  };
  