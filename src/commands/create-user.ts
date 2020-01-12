import { inject, injectable } from "inversify";
import { REPOSITYPY_IDENTIFIER } from "../../shared/service-identifiers";
import { ICommand, ICommandHandler , IRepository } from "../../shared/interfaces";
import { User, UserAR } from "../models/user.model";
import { AggregateRoot } from "../../shared/aggregate-root";
import { CommandHandler } from "../../shared/decorators/";

@injectable()
export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
	@inject(REPOSITYPY_IDENTIFIER)
	private readonly _repository: IRepository<AggregateRoot>;

	execute({ data }: CreateUserCommand): void {
		console.log("executing CreateUserCommandHandler");
		const user = new UserAR();
		user.create(data);
		this._repository.save(user);
	}
}

@CommandHandler(CreateUserCommandHandler)
export class CreateUserCommand implements ICommand {
	constructor(public readonly data: User) { }
}