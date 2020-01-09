export interface IRepository<T> {
	save(aggregate: T): void;
	getById(id: string): T;
}
