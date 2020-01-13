import { Guid } from "guid-typescript";
import { EventType } from "../types";
import { IEntity } from "../ddd/";

export abstract class IEvent {
    _id: Guid;
    type: EventType;
    payload: IEntity;
    createdAt: Date;

    constructor(_id: Guid, payload: IEntity) {
        this._id = _id;
        this.payload = payload;
        this.createdAt = new Date();
    }
}
