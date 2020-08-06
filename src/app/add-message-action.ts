import {PractiseMcq} from '../app/practise-mcq';
export class AddMessageAction {
    static readonly type = '[Kafka] Add message';
  constructor(public message: PractiseMcq) { }
}
