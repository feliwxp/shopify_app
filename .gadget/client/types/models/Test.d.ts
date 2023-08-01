import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, Test, TestSort, TestFilter, AvailableTestSelection, CreateTestInput, UpdateTestInput } from "../types.js";
export declare const DefaultTestSelection: {
    readonly id: true;
    readonly __typename: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly token: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "test". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedTestOrDefault<Options extends Selectable<AvailableTestSelection>> = DeepFilterNever<Select<Test, DefaultSelection<AvailableTestSelection, Options, typeof DefaultTestSelection>>>;
/** Options that can be passed to the `TestManager#findOne` method */
export interface FindOneTestOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableTestSelection;
}
/** Options that can be passed to the `TestManager#maybeFindOne` method */
export interface MaybeFindOneTestOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableTestSelection;
}
/** Options that can be passed to the `TestManager#findMany` method */
export interface FindManyTestsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableTestSelection;
    /** Return records sorted by these sorts */
    sort?: TestSort | TestSort[] | null;
    /** Only return records matching these filters. */
    filter?: TestFilter | TestFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `TestManager#findFirst` method */
export interface FindFirstTestOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableTestSelection;
    /** Return records sorted by these sorts */
    sort?: TestSort | TestSort[] | null;
    /** Only return records matching these filters. */
    filter?: TestFilter | TestFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `TestManager#maybeFindFirst` method */
export interface MaybeFindFirstTestOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableTestSelection;
    /** Return records sorted by these sorts */
    sort?: TestSort | TestSort[] | null;
    /** Only return records matching these filters. */
    filter?: TestFilter | TestFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateTestOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableTestSelection;
}
export interface DeleteTestOptions {
}
export interface UpdateTestOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableTestSelection;
}
type createTestVariables = CreateTestInput;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createTest<Options extends CreateTestOptions>(variables: createTestVariables, options?: LimitToKnownKeys<Options, CreateTestOptions>): Promise<SelectedTestOrDefault<Options> extends void ? void : GadgetRecord<SelectedTestOrDefault<Options>>>;
declare function createTest<Options extends CreateTestOptions>(variables: {
    test?: CreateTestInput;
}, options?: LimitToKnownKeys<Options, CreateTestOptions>): Promise<SelectedTestOrDefault<Options> extends void ? void : GadgetRecord<SelectedTestOrDefault<Options>>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteTest<Options extends DeleteTestOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteTestOptions>): Promise<void extends void ? void : GadgetRecord<SelectedTestOrDefault<Options>>>;
type updateTestVariables = UpdateTestInput;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateTest<Options extends UpdateTestOptions>(id: string, variables: updateTestVariables, options?: LimitToKnownKeys<Options, UpdateTestOptions>): Promise<SelectedTestOrDefault<Options> extends void ? void : GadgetRecord<SelectedTestOrDefault<Options>>>;
declare function updateTest<Options extends UpdateTestOptions>(id: string, variables: {
    test?: UpdateTestInput;
}, options?: LimitToKnownKeys<Options, UpdateTestOptions>): Promise<SelectedTestOrDefault<Options> extends void ? void : GadgetRecord<SelectedTestOrDefault<Options>>>;
/** All the actions available at the collection level and record level for "test" */
export declare class TestManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one test by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneTestOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneTestOptions>): Promise<GadgetRecord<SelectedTestOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "test";
        modelApiIdentifier: "test";
        defaultSelection: typeof DefaultTestSelection;
        selectionType: AvailableTestSelection;
        optionsType: FindOneTestOptions;
        schemaType: Query["test"];
    };
    /**
 * Finds one test by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneTestOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneTestOptions>): Promise<GadgetRecord<SelectedTestOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "test";
        modelApiIdentifier: "test";
        defaultSelection: typeof DefaultTestSelection;
        selectionType: AvailableTestSelection;
        optionsType: MaybeFindOneTestOptions;
        schemaType: Query["test"];
    };
    /**
 * Finds many test. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyTestsOptions>(options?: LimitToKnownKeys<Options, FindManyTestsOptions>): Promise<GadgetRecordList<SelectedTestOrDefault<Options>>>;
        type: "findMany";
        operationName: "tests";
        modelApiIdentifier: "test";
        defaultSelection: typeof DefaultTestSelection;
        selectionType: AvailableTestSelection;
        optionsType: FindManyTestsOptions;
        schemaType: Query["test"];
    };
    /**
 * Finds the first matching test. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstTestOptions>(options?: LimitToKnownKeys<Options, FindFirstTestOptions>): Promise<GadgetRecord<SelectedTestOrDefault<Options>>>;
        type: "findFirst";
        operationName: "tests";
        modelApiIdentifier: "test";
        defaultSelection: typeof DefaultTestSelection;
        selectionType: AvailableTestSelection;
        optionsType: FindFirstTestOptions;
        schemaType: Query["test"];
    };
    /**
 * Finds the first matching test. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstTestOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstTestOptions>): Promise<GadgetRecord<SelectedTestOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "tests";
        modelApiIdentifier: "test";
        defaultSelection: typeof DefaultTestSelection;
        selectionType: AvailableTestSelection;
        optionsType: MaybeFindFirstTestOptions;
        schemaType: Query["test"];
    };
    /**
  * Finds one test by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneTestOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneTestOptions>): Promise<GadgetRecord<SelectedTestOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "tests";
        modelApiIdentifier: "test";
        defaultSelection: typeof DefaultTestSelection;
        selectionType: AvailableTestSelection;
        optionsType: FindOneTestOptions;
        schemaType: Query["test"];
    };
    create: typeof createTest & {
        readonly type: "action";
        readonly operationName: "createTest";
        readonly namespace: null;
        readonly modelApiIdentifier: "test";
        readonly modelSelectionField: "test";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly token: true;
        };
        readonly selectionType: AvailableTestSelection;
        readonly optionsType: CreateTestOptions;
        readonly schemaType: Test | null;
        readonly variablesType: CreateTestInput | {
            test?: CreateTestInput | undefined;
        } | undefined;
        readonly variables: {
            readonly test: {
                readonly required: false;
                readonly type: "CreateTestInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
    delete: typeof deleteTest & {
        readonly type: "action";
        readonly operationName: "deleteTest";
        readonly namespace: null;
        readonly modelApiIdentifier: "test";
        readonly modelSelectionField: "test";
        readonly isBulk: false;
        readonly defaultSelection: null;
        readonly selectionType: Record<string, never>;
        readonly optionsType: DeleteTestOptions;
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
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: false;
        readonly isCreateOrUpdateAction: false;
        readonly paramOnlyVariables: readonly [];
    };
    /**
  * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
  */
    bulkDelete: {
        <Options extends DeleteTestOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteTestOptions>): Promise<void>;
        type: "action";
        operationName: "bulkDeleteTests";
        namespace: null;
        modelApiIdentifier: "test";
        modelSelectionField: "tests";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteTestOptions;
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
    update: typeof updateTest & {
        readonly type: "action";
        readonly operationName: "updateTest";
        readonly namespace: null;
        readonly modelApiIdentifier: "test";
        readonly modelSelectionField: "test";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly token: true;
        };
        readonly selectionType: AvailableTestSelection;
        readonly optionsType: UpdateTestOptions;
        readonly schemaType: Test | null;
        readonly variablesType: {
            id: string;
            test?: UpdateTestInput | undefined;
        } | (UpdateTestInput & {
            id: string;
        }) | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly test: {
                readonly required: false;
                readonly type: "UpdateTestInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
}
export {};
