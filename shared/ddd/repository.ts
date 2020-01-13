import { Guid } from "guid-typescript";

export interface IRepository<T> {
	save(aggregate: T): void;
	getById(id: Guid): T;
}
