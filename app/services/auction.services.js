import Product from "../models/Product.model.js";

export const createProduct = async (userId, name, type) => {
    const product = new Product({
        owner: userId,
        name,
        type
    });
    await product.save();
    return product.id;
}

