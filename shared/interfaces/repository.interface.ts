import { AggregateRoot } from "../services/aggregate-root";

export interface IRepository<T extends AggregateRoot> {
	save(aggregate: T)
	getById(id: string): T
}