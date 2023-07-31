import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, ExplicitNestingRequired, Select, DeepFilterNever, Token, TokenSort, TokenFilter, AvailableTokenSelection, CreateTokenInput, UpdateTokenInput } from "../types.js";
export declare const DefaultTokenSelection: {
    readonly id: true;
    readonly __typename: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly token: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "token". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedTokenOrDefault<Options extends Selectable<AvailableTokenSelection>> = DeepFilterNever<Select<Token, DefaultSelection<AvailableTokenSelection, Options, typeof DefaultTokenSelection>>>;
/** Options that can be passed to the `TokenManager#findOne` method */
export interface FindOneTokenOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableTokenSelection;
}
/** Options that can be passed to the `TokenManager#maybeFindOne` method */
export interface MaybeFindOneTokenOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableTokenSelection;
}
/** Options that can be passed to the `TokenManager#findMany` method */
export interface FindManyTokensOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableTokenSelection;
    /** Return records sorted by these sorts */
    sort?: TokenSort | TokenSort[] | null;
    /** Only return records matching these filters. */
    filter?: TokenFilter | TokenFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `TokenManager#findFirst` method */
export interface FindFirstTokenOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableTokenSelection;
    /** Return records sorted by these sorts */
    sort?: TokenSort | TokenSort[] | null;
    /** Only return records matching these filters. */
    filter?: TokenFilter | TokenFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `TokenManager#maybeFindFirst` method */
export interface MaybeFindFirstTokenOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableTokenSelection;
    /** Return records sorted by these sorts */
    sort?: TokenSort | TokenSort[] | null;
    /** Only return records matching these filters. */
    filter?: TokenFilter | TokenFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateTokenOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableTokenSelection;
}
export interface DeleteTokenOptions {
}
export interface UpdateTokenOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableTokenSelection;
}
type createTokenVariables = CreateTokenInput;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createToken<Options extends CreateTokenOptions>(variables: {
    token?: CreateTokenInput;
}, options?: LimitToKnownKeys<Options, CreateTokenOptions>): Promise<SelectedTokenOrDefault<Options> extends void ? void : GadgetRecord<SelectedTokenOrDefault<Options>>>;
/**
* @deprecated
* @see {@linkcode createToken} for the correct signature
* @description token contains a field or exported param that conflicts with the model API identifier. This function signature should not be used.
*/
declare function createToken<Options extends CreateTokenOptions>(variables: createTokenVariables, options?: LimitToKnownKeys<Options, CreateTokenOptions>): Promise<ExplicitNestingRequired>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteToken<Options extends DeleteTokenOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteTokenOptions>): Promise<void extends void ? void : GadgetRecord<SelectedTokenOrDefault<Options>>>;
type updateTokenVariables = UpdateTokenInput;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateToken<Options extends UpdateTokenOptions>(id: string, variables: {
    token?: UpdateTokenInput;
}, options?: LimitToKnownKeys<Options, UpdateTokenOptions>): Promise<SelectedTokenOrDefault<Options> extends void ? void : GadgetRecord<SelectedTokenOrDefault<Options>>>;
/**
* @deprecated
* @see {@linkcode updateToken} for the correct signature
* @description token contains a field or exported param that conflicts with the model API identifier. This function signature should not be used.
*/
declare function updateToken<Options extends UpdateTokenOptions>(id: string, variables: updateTokenVariables, options?: LimitToKnownKeys<Options, UpdateTokenOptions>): Promise<ExplicitNestingRequired>;
/** All the actions available at the collection level and record level for "token" */
export declare class TokenManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one token by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneTokenOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneTokenOptions>): Promise<GadgetRecord<SelectedTokenOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "token";
        modelApiIdentifier: "token";
        defaultSelection: typeof DefaultTokenSelection;
        selectionType: AvailableTokenSelection;
        optionsType: FindOneTokenOptions;
        schemaType: Query["token"];
    };
    /**
 * Finds one token by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneTokenOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneTokenOptions>): Promise<GadgetRecord<SelectedTokenOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "token";
        modelApiIdentifier: "token";
        defaultSelection: typeof DefaultTokenSelection;
        selectionType: AvailableTokenSelection;
        optionsType: MaybeFindOneTokenOptions;
        schemaType: Query["token"];
    };
    /**
 * Finds many token. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyTokensOptions>(options?: LimitToKnownKeys<Options, FindManyTokensOptions>): Promise<GadgetRecordList<SelectedTokenOrDefault<Options>>>;
        type: "findMany";
        operationName: "tokens";
        modelApiIdentifier: "token";
        defaultSelection: typeof DefaultTokenSelection;
        selectionType: AvailableTokenSelection;
        optionsType: FindManyTokensOptions;
        schemaType: Query["token"];
    };
    /**
 * Finds the first matching token. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstTokenOptions>(options?: LimitToKnownKeys<Options, FindFirstTokenOptions>): Promise<GadgetRecord<SelectedTokenOrDefault<Options>>>;
        type: "findFirst";
        operationName: "tokens";
        modelApiIdentifier: "token";
        defaultSelection: typeof DefaultTokenSelection;
        selectionType: AvailableTokenSelection;
        optionsType: FindFirstTokenOptions;
        schemaType: Query["token"];
    };
    /**
 * Finds the first matching token. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstTokenOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstTokenOptions>): Promise<GadgetRecord<SelectedTokenOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "tokens";
        modelApiIdentifier: "token";
        defaultSelection: typeof DefaultTokenSelection;
        selectionType: AvailableTokenSelection;
        optionsType: MaybeFindFirstTokenOptions;
        schemaType: Query["token"];
    };
    /**
  * Finds one token by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneTokenOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneTokenOptions>): Promise<GadgetRecord<SelectedTokenOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "tokens";
        modelApiIdentifier: "token";
        defaultSelection: typeof DefaultTokenSelection;
        selectionType: AvailableTokenSelection;
        optionsType: FindOneTokenOptions;
        schemaType: Query["token"];
    };
    /**
  * Finds one token by its token. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findByToken: {
        <Options extends FindOneTokenOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneTokenOptions>): Promise<GadgetRecord<SelectedTokenOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "token";
        operationName: "tokens";
        modelApiIdentifier: "token";
        defaultSelection: typeof DefaultTokenSelection;
        selectionType: AvailableTokenSelection;
        optionsType: FindOneTokenOptions;
        schemaType: Query["token"];
    };
    create: typeof createToken & {
        readonly type: "action";
        readonly operationName: "createToken";
        readonly namespace: null;
        readonly modelApiIdentifier: "token";
        readonly modelSelectionField: "token";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly token: true;
        };
        readonly selectionType: AvailableTokenSelection;
        readonly optionsType: CreateTokenOptions;
        readonly schemaType: Token | null;
        readonly variablesType: {
            token?: CreateTokenInput | undefined;
        } | undefined;
        readonly variables: {
            readonly token: {
                readonly required: false;
                readonly type: "CreateTokenInput";
            };
        };
        readonly hasAmbiguousIdentifier: true;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
    delete: typeof deleteToken & {
        readonly type: "action";
        readonly operationName: "deleteToken";
        readonly namespace: null;
        readonly modelApiIdentifier: "token";
        readonly modelSelectionField: "token";
        readonly isBulk: false;
        readonly defaultSelection: null;
        readonly selectionType: Record<string, never>;
        readonly optionsType: DeleteTokenOptions;
        readonly schemaType: null;
        readonly variablesType: {
            id: string;
        } | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
        };
        readonly hasAmbiguousIdentifier: true;
        readonly hasCreateOrUpdateEffect: false;
        readonly isCreateOrUpdateAction: false;
        readonly paramOnlyVariables: readonly [];
    };
    /**
  * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
  */
    bulkDelete: {
        <Options extends DeleteTokenOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteTokenOptions>): Promise<void>;
        type: "action";
        operationName: "bulkDeleteTokens";
        namespace: null;
        modelApiIdentifier: "token";
        modelSelectionField: "tokens";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteTokenOptions;
        schemaType: null;
        variablesType: {
            ids: string[];
        } | undefined;
        variables: {
            ids: {
                required: true;
                type: "[GadgetID!]";
            };
        };
    };
    update: typeof updateToken & {
        readonly type: "action";
        readonly operationName: "updateToken";
        readonly namespace: null;
        readonly modelApiIdentifier: "token";
        readonly modelSelectionField: "token";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly token: true;
        };
        readonly selectionType: AvailableTokenSelection;
        readonly optionsType: UpdateTokenOptions;
        readonly schemaType: Token | null;
        readonly variablesType: {
            id: string;
            token?: UpdateTokenInput | undefined;
        } | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly token: {
                readonly required: false;
                readonly type: "UpdateTokenInput";
            };
        };
        readonly hasAmbiguousIdentifier: true;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
}
export {};
