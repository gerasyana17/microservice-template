import { ICommand } from "../../../shared/interfaces";

export class CreateUserCommand implements ICommand {
    constructor(public readonly data: {
        firstName: string,
        lastName: string,
        email: string
    }) { }
}