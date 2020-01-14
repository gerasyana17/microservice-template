import { Guid } from "guid-typescript";
import { AggregateRoot, IAggregate } from ".";

export type RepositoryType = AggregateRoot<IAggregate>;

export interface IRepository<T extends RepositoryType> {
	save(aggregate: T): void;
	getById(id: Guid): T;
}