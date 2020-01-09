import { injectable, inject } from "inversify";
import { Request } from "express";
import { ICommandBus } from "../../shared/interfaces/commands";
import { CreateUserCommand } from "../commands";
import { User } from "../models/user.model";
import { COMMAND_BUS_IDENTIFIER } from "../../shared/service-identifiers";

@injectable()
export class UserController {
    @inject(COMMAND_BUS_IDENTIFIER)
    private readonly _commandBus: ICommandBus;

    create(req: Request): void {
        let data: User = req.body;
        data = {
            firstName: "Yana",
            lastName: "Yana",
            email: "Yana"
        };
        this._commandBus.execute(new CreateUserCommand(data));
    }
}