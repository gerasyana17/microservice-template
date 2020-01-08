import { ICommandHandler, ICommand, IRepository } from "../../shared/interfaces";
import { User } from "../models/user.model";
import { NewUser } from "../dto/new-user";
import { inject, injectable } from "inversify";
import { TYPES } from "../../shared/types";
import { Repository } from "../../shared/services/repository";

@injectable()
class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
	@inject(TYPES.Repository)
	private readonly _repository: IRepository<User>;

	execute({ payload }: CreateUserCommand): void {
		console.log(this._repository);
		console.log("executing CreateUserCommandHandler");
		console.log(this._repository);
		/*const data = {
			...payload,
			id: "1"
		};
		const user = new User();
		user.create(data);
		this._repository.save(user);*/
	}
}

class CreateUserCommand implements ICommand {
	constructor(public readonly payload: NewUser) { }
}

export {
	CreateUserCommandHandler,
	CreateUserCommand
};