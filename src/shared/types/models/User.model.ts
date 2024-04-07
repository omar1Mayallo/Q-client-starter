import { STATUS } from "../enums/status.enum";
import { BaseModel } from "./Base.model";

export enum USER_TYPE {
  ADMINISTRATIVE = "ADMINISTRATIVE",
  PORTAL = "PORTAL",
}

export interface UserModel extends BaseModel {
  username: string;

  email: string;

  password: string;

  status: STATUS;

  type: USER_TYPE;

  deleted_at?: Date;
}
