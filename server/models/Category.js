const { Schema, model } = require('mongoose');
const Product = require('./Product');

const categorySchema = new Schema(
    {
        categoryName: {
            type: String,
            required: true,
            unique: true,
            minLength: 1,
            maxLength: 48
        },
        products: [{
            type: Schema.Types.ObjectId,
            ref: 'Product'

        }]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

categorySchema.virtual('productsCount').get(function () {
    return this.products.length;
});

const Category = model('category', categorySchema);

module.exports = Category;