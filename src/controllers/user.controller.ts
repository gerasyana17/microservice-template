import { Request } from "express";
import { CommandBus } from "../../shared/command-bus";
import { CreateUserCommand } from "../commands/create-user";
import { User } from "../domain/user.entity";

export class UserController {
    private readonly _commandBus: CommandBus = new CommandBus();

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