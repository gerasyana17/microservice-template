import { ICommandBus, ICommand } from "../interfaces";
import { handlers } from '../../src/commands/index';

class CommandBus implements ICommandBus {
    execute<T extends ICommand>(command: T): Promise<any> {
        const { constructor } = Object.getPrototypeOf(command)
        const commandHandler = handlers.get(constructor)
        commandHandler.execute(command);
        return
    }
}

const commandBus = new CommandBus();

export {
    commandBus
}