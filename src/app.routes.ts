import express from "express";
import { Request, Response } from "express";
import { UserController } from "./controllers/user.controller";
import { myContainer } from "../inversify.config";

const cntr = myContainer.resolve(UserController);
const router = express.Router({
    strict: true
});

router.get("/", (req: Request, res: Response) => {
    try {
        cntr.create(req);
        return res.sendStatus(202);
    } catch (ex) {
        return res.send(ex);
    }
});

export {
    router
};