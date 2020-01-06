import * as express from 'express';
import { Request, Response } from 'express';
import { CreateUserCommand } from './commands/impl';
import { commandBus } from '../shared/utils/command-bus';

const router = express.Router({
    strict: true
});

router.get("/", (req: Request, res: Response) => {
    try {
        //const { data } = req.body;
        let data = {
            firstName: "Yana",
            lastName: "Yana",
            email: "Yana"
        }
        commandBus.execute(new CreateUserCommand(data));
        return res.sendStatus(202);
    } catch (ex) {
        return res.send(ex);
    }
});

export {
    router
}