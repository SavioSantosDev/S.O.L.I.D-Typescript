import { IMessaging } from '../models/i-messaging';

export class Messaging implements IMessaging {
  sendMessage(msg: string): void {
    console.log(msg);
  }
}
