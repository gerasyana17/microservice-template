import { inject, injectable } from "inversify";
import { Request } from "express";
import { CommandBus } from "../../shared/services/command-bus";
import { CreateUserCommand } from "../commands";
import { TYPES } from "../../shared/types";
import { NewUser } from "../dto/new-user";

@injectable()
export class UserController {

    @inject(TYPES.CommandBus)
    private readonly _commandBus: CommandBus;

    create(req: Request): void {
        let data: NewUser = req.body;
        data = {
            firstName: "Yana",
            lastName: "Yana",
            email: "Yana"
        };
        this._commandBus.execute(new CreateUserCommand(data));
    }
}