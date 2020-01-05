import { ICommandHandler } from "../../../shared/interfaces/command-handler";
import { AddMovieCommand } from "../add-movie.command";

export class AddMovieCommandHandler implements ICommandHandler<AddMovieCommand> {
	execute(command: AddMovieCommand): Promise<any> | void {
		console.log('command executing');
	}
}