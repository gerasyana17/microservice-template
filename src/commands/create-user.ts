import { inject, injectable } from "inversify";
import { ICommandHandler, ICommand } from "../../shared/cqrs/commands";
import { UserAR } from "../domain/user.aggregate-root";
import { User } from "../domain/user.entity";
import { Repository } from "../../shared/ddd/repository";
import { AggregateRoot } from "../../shared/ddd/aggregate-root";

@injectable()
class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
	@inject(Symbol.for("Repository"))
	private readonly _repository: Repository<AggregateRoot>;

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