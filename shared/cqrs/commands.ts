export abstract class ICommand { }

export interface ICommandHandler<T extends ICommand> {
  execute(command: T): void;
}

export interface ICommandBus {
  execute<T extends ICommand>(command: T): void;
}