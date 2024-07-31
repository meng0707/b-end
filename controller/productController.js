const Product = require('../models/product');
const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require ("bcryptjs");
// Get all products
exports.getProducts = async (req, res) => { 
    try { 
        const products = await Product.find(); 
        res.status(200).json(products); 
    } catch (err) { 
        res.status(500).json({ message: err.message }); 
    }
}; 

// Get a specific product by ID
exports.getProduct = async (req, res) => {
    try { 
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: 'Product not found' }); 
        res.json(product); 
    } catch (err) { 
        res.status(500).json({ message: err.message }); 
    }
};
    
// Create a new product
exports.createProduct = async (req, res) => {
    const { product_name, product_type, price, unit } = req.body;
    const product = new Product({ product_name, product_type, price, unit });
    try { 
        const newProduct = await product.save();
        res.status(201).json(newProduct); 
    } catch (err) { 
        res.status(400).json({ message: err.message }); 
    }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(updatedProduct);
    } catch (err) { 
        res.status(400).json({ message: err.message }); 
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) { 
        res.status(400).json({ message: err.message }); 
    }
};