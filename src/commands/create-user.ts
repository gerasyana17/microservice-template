import { inject, injectable } from "inversify";
import { REPOSITYPY_IDENTIFIER } from "../../shared/service-identifiers";
import { ICommand, ICommandHandler } from "../../shared/cqrs";
import { IRepository, RepositoryType } from "../../shared/ddd";
import { CommandHandler } from "../../shared/decorators";
import { UserAR, User } from "../models/user.model";

@injectable()
export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
	@inject(REPOSITYPY_IDENTIFIER)
	private readonly _repository: IRepository<RepositoryType>;

	execute({ data }: CreateUserCommand): void {
		console.log("executing CreateUserCommandHandler");
		const user = new UserAR();
		user.create(data);
		this._repository.save(user);
	}
}

@CommandHandler(CreateUserCommandHandler)
export class CreateUserCommand implements ICommand {
	constructor(public readonly data: User) {}
}