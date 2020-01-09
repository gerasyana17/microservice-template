import { injectable, inject } from "inversify";
import { Request } from "express";
import { ICommandBus } from "../../shared/cqrs/commands";
import { CreateUserCommand } from "../commands/create-user";
import { User } from "../domain/user.entity";

@injectable()
export class UserController {
    @inject(Symbol.for("ICommandBus"))
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