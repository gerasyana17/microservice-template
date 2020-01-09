import Injector from "../inversify.config";
import { Router, Request, Response } from "express";
import { UserController } from "./controllers/user.controller";

const cntr = Injector.resolve(UserController);
const router = Router({
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