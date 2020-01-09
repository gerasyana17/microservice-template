import { ICommandHandler, ICommand } from "../../shared/cqrs/commands";
import { UserAR } from "../domain/user.aggregate-root";
import { User } from "../domain/user.entity";
import { Repository } from "../../shared/ddd/repository";
import { UserRepository } from "../repositories/user.repository";

class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
	private readonly _repository: Repository<UserAR> = new UserRepository();

	execute({ data }: CreateUserCommand): void {
		console.log("executing CreateUserCommandHandler");
		const user = new UserAR();
		user.create(data);
		this._repository.save(user);
	}
}

class CreateUserCommand implements ICommand {
	constructor(public readonly data: User) { }
}

export {
	CreateUserCommandHandler,
	CreateUserCommand
};