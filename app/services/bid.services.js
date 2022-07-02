import Auction from "../models/Auction.mode.js";

export const createAuctionFromProduct = async (
    userId,
    productId,
    expireDate,
    startingBid,
    possibleWinners,
    automaticDelivery
) => {
    const auction = new Auction({
        userId,
        product: productId,
        expireDate,
        startingBid,
        possibleWinners,
        automaticDelivery
    });
    await auction.save();
    return auction.id;
}

