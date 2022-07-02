import * as services from '../services/auction.services.js';

export const createAuctionFromProduct = async (req, res) => {
    try{
        const productId = await services.createAuctionFromProduct(
            res.locals.userId,
            req.body.productId,
            req.body.expireDate,
            req.body.startingBid,
            req.body.possibleWinners,
            req.body.automaticDelivery
        );
        res.status(200).send({productId});
    }
    catch(err){
        res.status(500).send({ message: err.message });

    }
};