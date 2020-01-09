export interface Repository<T> {
	save(aggregate: T): void;
	getById(id: string): T;
}
