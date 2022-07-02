import * as services from '../services/product.services.js';

export const createProduct = async (req, res) => {
    try{
        const productId = await services.createProduct(res.locals.userId, req.body.name, req.body.type);
        res.status(200).send({productId});
    }
    catch(err){
        res.status(500).send({ message: err.message });

    }
};