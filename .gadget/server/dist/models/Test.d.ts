import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, Test } from "@gadget-client/feliwxp";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultTestServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly token: true;
};
/** All the data passed to an effect or precondition within the `create` action on the `test` model. */
export interface CreateTestActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `test` record this action is operating on.
    */
    record: GadgetRecord<Select<Test, DefaultTestServerSelection>>;
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
    context: Omit<CreateTestActionContext, "context">;
}
/** All the data passed to an effect or precondition within the `delete` action on the `test` model. */
export interface DeleteTestActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `test` record this action is operating on.
    */
    record: GadgetRecord<Select<Test, DefaultTestServerSelection>>;
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
    context: Omit<DeleteTestActionContext, "context">;
}
/** All the data passed to an effect or precondition within the `update` action on the `test` model. */
export interface UpdateTestActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `test` record this action is operating on.
    */
    record: GadgetRecord<Select<Test, DefaultTestServerSelection>>;
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
    context: Omit<UpdateTestActionContext, "context">;
}
