import { verifyToken } from "../middlewares/authJwt.js";
import * as controller from "../controllers/product.controller.js";

export default function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


    app.post("/product", [verifyToken], controller.createProduct);
};
