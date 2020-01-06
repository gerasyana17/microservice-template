import { CreateUserCommand } from "../impl/create-user.command";
import { ICommandHandler } from "../../../shared/interfaces";
import { User } from "../../models/user.model";

export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
	execute({ data }: CreateUserCommand): Promise<any> | void {
		//business logic
		console.log('executing CreateUserCommandHandler');
		const user = new User();
		user.create(data);
		return;
	}
}