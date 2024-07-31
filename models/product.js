const mongoose = require('mongoose');

// Define the schema correctly
const productSchema = new mongoose.Schema({
    product_name: { type: String, required: true },
    product_type: { type: String, required: true },
    price: { type: Number, required: true },
    unit: { type: String, required: true },
},
    {timestamps : true, versionKey: false}
);
// Export the model with the correct schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;