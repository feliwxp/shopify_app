// All the generated types for the "token" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, Token } from "@gadget-client/feliwxp";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultTokenServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly token: true;
      readonly shopIdId: true;
    readonly shopId: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `token` model. */
export interface CreateTokenActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `token` record this action is operating on.
  */
  record: GadgetRecord<Select<Token, DefaultTokenServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  params: {
    
    [key: string]: string | number | boolean | object | bigint | undefined;
  };
  /**
  * The context of this action
  */
  context: Omit<CreateTokenActionContext, "context">;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `token` model. */
export interface DeleteTokenActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `token` record this action is operating on.
  */
  record: GadgetRecord<Select<Token, DefaultTokenServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  params: {
    
    [key: string]: string | number | boolean | object | bigint | undefined;
  };
  /**
  * The context of this action
  */
  context: Omit<DeleteTokenActionContext, "context">;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `token` model. */
export interface UpdateTokenActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `token` record this action is operating on.
  */
  record: GadgetRecord<Select<Token, DefaultTokenServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  params: {
    
    [key: string]: string | number | boolean | object | bigint | undefined;
  };
  /**
  * The context of this action
  */
  context: Omit<UpdateTokenActionContext, "context">;
};


  