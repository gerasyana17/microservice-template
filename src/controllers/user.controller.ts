import { injectable, inject } from "inversify";
import { Request } from "express";
import { CreateUserCommand } from "../commands";
import { ICommandBus } from "../../shared/cqrs";
import { COMMAND_BUS_IDENTIFIER } from "../../shared/service-identifiers";
import { NewUserDTO } from "../dto/user.dto";

@injectable()
export class UserController {
    @inject(COMMAND_BUS_IDENTIFIER)
    private readonly _commandBus: ICommandBus;

    create(req: Request): void {
        let data: NewUserDTO = req.body;
        data = {
            firstName: "Yana",
            lastName: "Yana",
            email: "Yana"
        };
        this._commandBus.execute(new CreateUserCommand(data));
    }
}