export interface ICommand { }

export interface ICommandHandler<T extends ICommand> {
  execute(command: T): void;
}

export interface ICommandBus {
  execute<T extends ICommand>(command: T): void;
}

export interface ICommandHandlersMapper {
  handlersByCommandType: Map<ICommand, new () => ICommandHandler<ICommand>>;
}