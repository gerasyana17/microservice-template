import { inject, injectable } from "inversify";
import { REPOSITYPY_IDENTIFIER } from "../../shared/service-identifiers";
import { ICommand, ICommandHandler } from "../../shared/cqrs";
import { IRepository } from "../../shared/ddd";
import { User, UserAR } from "../models/user.model";
import { AggregateRoot } from "../../shared/ddd/aggregate-root";
import { CommandHandler } from "../../shared/decorators/";

@injectable()
export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
	@inject(REPOSITYPY_IDENTIFIER)
	private readonly _repository: IRepository<AggregateRoot>;

	execute({ data }: CreateUserCommand): void {
		console.log("executing CreateUserCommandHandler");
		//TODO validation logic
		const user = new UserAR();
		user.create(data);
		this._repository.save(user);
	}
}

@CommandHandler(CreateUserCommandHandler)
export class CreateUserCommand extends ICommand {
	constructor(public readonly data: User) {
		super();
	 }
}