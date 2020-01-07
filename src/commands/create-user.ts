import { ICommandHandler, ICommand, IRepository } from "../../shared/interfaces";
import { User } from "../models/user.model";
import { Repository } from "../../shared/services/repository";
import { eventStore } from '../event-store';
import { NewUser } from "../dto/new-user";

class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
	private _userRepository: IRepository<User>;
    
	constructor() {
		this._userRepository = new Repository<User>(eventStore);
	}

	execute({ payload }: CreateUserCommand): Promise<any> | void {
		console.log('executing CreateUserCommandHandler');
		const data = {
			...payload,
			id: '1'
		};
		const user = new User();
		user.create(data);
		this._userRepository.save(user);
	}
}

class CreateUserCommand implements ICommand {
	constructor(public readonly payload: NewUser) { }
}

export {
	CreateUserCommandHandler,
	CreateUserCommand
}