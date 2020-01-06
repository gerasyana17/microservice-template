export interface ICommand { }

export interface ICommandHandler<T extends ICommand = any> {
  execute(command: T): Promise<any> | void
}

export interface ICommandBus {
  execute<T extends ICommand>(command: T): Promise<any>;
}