import "reflect-metadata";
import { COMMAND_HANDLER_METADATA_KEY } from "../constants/metadata-keys";
import { ICommandHandler, ICommand } from "../cqrs";

export const CommandHandler = (handler: new () => ICommandHandler<ICommand>): ClassDecorator => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return (target: object) => (Reflect.defineMetadata(COMMAND_HANDLER_METADATA_KEY, handler, target));
};