// schemas/pet.js
export default {
    name: 'products',
    type: 'document',
    title: 'Products',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'photo',
            type: 'image',
            title: 'Photo'
        }
    ]
}