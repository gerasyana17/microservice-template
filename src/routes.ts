import { Router, Request, Response } from "express";
import { UserController } from "./controllers/user.controller";

//const cntr = myContainer.resolve(UserController);
const router = Router({
    strict: true
});

router.get("/", (req: Request, res: Response) => {
    try {
        const cntr = new UserController();
        cntr.create(req);
        return res.sendStatus(202);
    } catch (ex) {
        return res.send(ex);
    }
});

export {
    router
};