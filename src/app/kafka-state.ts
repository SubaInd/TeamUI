
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddMessageAction } from '../app/add-message-action';
import {PractiseMcq}  from '../app/practise-mcq';

export class KafkaStateModel {
    public messages: PractiseMcq[];
  }
  
  @State<KafkaStateModel>({
    name: 'kafka',
    defaults: {
      messages: []
    }
  })
  export class KafkaState {
    @Selector()
    static messages(state: KafkaStateModel): PractiseMcq[] {
      return state.messages;
    }
  
    @Action(AddMessageAction)
    add(ctx: StateContext<KafkaStateModel>, action: AddMessageAction) {
      const state = ctx.getState();
      ctx.setState({ messages: [ ...state.messages, action.message ] });
    }
  }
