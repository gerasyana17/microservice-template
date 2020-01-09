import { Entity } from "../../shared/ddd/entity";

export class User implements Entity {

    constructor(public firstName: string,
        public lastName: string,
        public email: string,
        public active?: boolean) {
    }
}
