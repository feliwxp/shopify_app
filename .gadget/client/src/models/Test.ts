import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  DefaultSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,
  Select,
  DeepFilterNever,
      Test,
      TestSort,
      TestFilter,
      AvailableTestSelection,
      CreateTestInput,
      BulkDeleteTestsResult,
      UpdateTestInput,
  
} from "../types.js";

export const DefaultTestSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "token": true
} as const;

/** 
* Produce a type that holds only the selected fields (and nested fields) of "test". The present fields in the result type of this are dynamic based on the options to each call that uses it. 
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above. 
*/
export type SelectedTestOrDefault<Options extends Selectable<AvailableTestSelection>> = DeepFilterNever<
  Select<
    Test, 
    DefaultSelection<
      AvailableTestSelection,
      Options,
      typeof DefaultTestSelection
    >
  >>;

/** Options that can be passed to the `TestManager#findOne` method */
export interface FindOneTestOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableTestSelection;
};


/** Options that can be passed to the `TestManager#maybeFindOne` method */
export interface MaybeFindOneTestOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableTestSelection;
};


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
};


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
};


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
};



export interface CreateTestOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableTestSelection;
};



export interface DeleteTestOptions {
};



export interface UpdateTestOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableTestSelection;
};




    
  type createTestVariables =
      CreateTestInput



/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createTest<Options extends CreateTestOptions>(
  
    variables: createTestVariables,

  options?: LimitToKnownKeys<Options, CreateTestOptions>
): Promise<SelectedTestOrDefault<Options> extends void ? void : GadgetRecord<SelectedTestOrDefault<Options>>>

// Default nested api identifier overload
async function createTest<Options extends CreateTestOptions>(
  
      variables: {
          test?: CreateTestInput,
        },
  
  options?: LimitToKnownKeys<Options, CreateTestOptions>
): Promise<SelectedTestOrDefault<Options> extends void ? void : GadgetRecord<SelectedTestOrDefault<Options>>>;

// Function implementation
async function createTest<Options extends CreateTestOptions>(
  this: TestManager,
  
      variables: {
          test?: CreateTestInput,
        }
    
      | createTestVariables
    ,
  
  options?: LimitToKnownKeys<Options, CreateTestOptions>
): Promise<SelectedTestOrDefault<Options> extends void ? void : GadgetRecord<SelectedTestOrDefault<Options>>>
 {
    let newVariables: {
      test?: CreateTestInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "test";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: CreateTestInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof CreateTestInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedTestOrDefault<Options>>(
      this,
      "createTest",
      DefaultTestSelection,
      "test",
      "test",
      false,
      {
        "test": {
          value: newVariables.test,
          required: false,
          type: "CreateTestInput",
        },
      },
      options,
      null
    ));
  }
  
    

/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Default nested api identifier overload
async function deleteTest<Options extends DeleteTestOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteTestOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedTestOrDefault<Options>>>;

// Function implementation
async function deleteTest<Options extends DeleteTestOptions>(
  this: TestManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteTestOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedTestOrDefault<Options>>>
 {

    return (await actionRunner<void>(
      this,
      "deleteTest",
      null,
      "test",
      "test",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
      },
      options,
      null
    ));
  }
  
    
  type updateTestVariables =
      UpdateTestInput



/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateTest<Options extends UpdateTestOptions>(
  id: string,
    variables: updateTestVariables,

  options?: LimitToKnownKeys<Options, UpdateTestOptions>
): Promise<SelectedTestOrDefault<Options> extends void ? void : GadgetRecord<SelectedTestOrDefault<Options>>>

// Default nested api identifier overload
async function updateTest<Options extends UpdateTestOptions>(
  id: string,
      variables: {
          test?: UpdateTestInput,
        },
  
  options?: LimitToKnownKeys<Options, UpdateTestOptions>
): Promise<SelectedTestOrDefault<Options> extends void ? void : GadgetRecord<SelectedTestOrDefault<Options>>>;

// Function implementation
async function updateTest<Options extends UpdateTestOptions>(
  this: TestManager,
  id: string,
      variables: {
          test?: UpdateTestInput,
        }
    
      | updateTestVariables
    ,
  
  options?: LimitToKnownKeys<Options, UpdateTestOptions>
): Promise<SelectedTestOrDefault<Options> extends void ? void : GadgetRecord<SelectedTestOrDefault<Options>>>
 {
    let newVariables: {
      test?: UpdateTestInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "test";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: UpdateTestInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof UpdateTestInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedTestOrDefault<Options>>(
      this,
      "updateTest",
      DefaultTestSelection,
      "test",
      "test",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
        "test": {
          value: newVariables.test,
          required: false,
          type: "UpdateTestInput",
        },
      },
      options,
      null
    ));
  }
  

/** All the actions available at the collection level and record level for "test" */
export class TestManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one test by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneTestOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneTestOptions>):
    Promise<
      GadgetRecord<
        SelectedTestOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "test";
  modelApiIdentifier: "test";
  defaultSelection: typeof DefaultTestSelection;
  selectionType: AvailableTestSelection;
  optionsType: FindOneTestOptions;
  schemaType: Query["test"];
} = Object.assign(
  async <Options extends FindOneTestOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneTestOptions>) => {
    return await findOneRunner<SelectedTestOrDefault<Options>>(
      this,
      "test",
      id,
      DefaultTestSelection,
      "test",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "test",
    modelApiIdentifier: "test",
    defaultSelection: DefaultTestSelection,
    selectionType: {} as AvailableTestSelection,
    optionsType: {} as FindOneTestOptions,
    schemaType: null as Query["test"],
  } as const
)

  
    /**
 * Finds one test by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneTestOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneTestOptions>):
    Promise<
      GadgetRecord<
        SelectedTestOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "test";
  modelApiIdentifier: "test";
  defaultSelection: typeof DefaultTestSelection;
  selectionType: AvailableTestSelection;
  optionsType: MaybeFindOneTestOptions;
  schemaType: Query["test"];
} = Object.assign(
  async <Options extends MaybeFindOneTestOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneTestOptions>) => {
    const record = await findOneRunner<SelectedTestOrDefault<Options>>(
      this,
      "test",
      id,
      DefaultTestSelection,
      "test",
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "test",
    modelApiIdentifier: "test",
    defaultSelection: DefaultTestSelection,
    selectionType: {} as AvailableTestSelection,
    optionsType: {} as MaybeFindOneTestOptions,
    schemaType: null as Query["test"],
  } as const
)

  
    /**
 * Finds many test. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyTestsOptions>(options?: LimitToKnownKeys<Options, FindManyTestsOptions>):
    Promise<
      GadgetRecordList<
        SelectedTestOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "tests";
  modelApiIdentifier: "test";
  defaultSelection: typeof DefaultTestSelection;
  selectionType: AvailableTestSelection;
  optionsType: FindManyTestsOptions;
  schemaType: Query["test"];
} = Object.assign(
  async <Options extends FindManyTestsOptions>(options?: LimitToKnownKeys<Options, FindManyTestsOptions>):
    Promise<
      GadgetRecordList<
        SelectedTestOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedTestOrDefault<Options>>(
      this,
      "tests",
      DefaultTestSelection,
      "test",
      options
    );
  },
  {
    type: "findMany",
    operationName: "tests",
    modelApiIdentifier: "test",
    defaultSelection: DefaultTestSelection,
    selectionType: {} as AvailableTestSelection,
    optionsType: {} as FindManyTestsOptions,
    schemaType: null as Query["test"],
  } as const
);
  
    /**
 * Finds the first matching test. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstTestOptions>(options?: LimitToKnownKeys<Options, FindFirstTestOptions>):
    Promise<
      GadgetRecord<
        SelectedTestOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "tests";
  modelApiIdentifier: "test";
  defaultSelection: typeof DefaultTestSelection;
  selectionType: AvailableTestSelection;
  optionsType: FindFirstTestOptions;
  schemaType: Query["test"];
} = Object.assign(
  async <Options extends FindFirstTestOptions>(options?: LimitToKnownKeys<Options, FindFirstTestOptions>):
    Promise<
      GadgetRecord<
        SelectedTestOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedTestOrDefault<Options>>(
      this,
      "tests",
      DefaultTestSelection,
      "test",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "tests",
    modelApiIdentifier: "test",
    defaultSelection: DefaultTestSelection,
    selectionType: {} as AvailableTestSelection,
    optionsType: {} as FindFirstTestOptions,
    schemaType: null as Query["test"],
  } as const
);
  
    /**
 * Finds the first matching test. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstTestOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstTestOptions>):
    Promise<
      GadgetRecord<
        SelectedTestOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "tests";
  modelApiIdentifier: "test";
  defaultSelection: typeof DefaultTestSelection;
  selectionType: AvailableTestSelection;
  optionsType: MaybeFindFirstTestOptions;
  schemaType: Query["test"];
} = Object.assign(
  async <Options extends MaybeFindFirstTestOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstTestOptions>):
    Promise<
      GadgetRecord<
        SelectedTestOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedTestOrDefault<Options>>(
      this,
      "tests",
      DefaultTestSelection,
      "test",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "tests",
    modelApiIdentifier: "test",
    defaultSelection: DefaultTestSelection,
    selectionType: {} as AvailableTestSelection,
    optionsType: {} as MaybeFindFirstTestOptions,
    schemaType: null as Query["test"],
  } as const
);
  
    /**
  * Finds one test by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneTestOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneTestOptions>):
    Promise<
      GadgetRecord<
        SelectedTestOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "tests";
  modelApiIdentifier: "test";
  defaultSelection: typeof DefaultTestSelection;
  selectionType: AvailableTestSelection;
  optionsType: FindOneTestOptions;
  schemaType: Query["test"];
} = Object.assign(
  async <Options extends FindOneTestOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneTestOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedTestOrDefault<Options>
      > & SelectedTestOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedTestOrDefault<Options>>(
      this,
      "tests",
      "id",
      value,
      DefaultTestSelection,
      "test",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "tests",
    modelApiIdentifier: "test",
    defaultSelection: DefaultTestSelection,
    selectionType: {} as AvailableTestSelection,
    optionsType: {} as FindOneTestOptions,
    schemaType: null as Query["test"],
  } as const
)
  
    create = Object.assign(createTest,
  {
    type: "action",
    operationName: "createTest",
    namespace: null,
    modelApiIdentifier: "test",
    modelSelectionField: "test",
    isBulk: false,
    defaultSelection: DefaultTestSelection,
    selectionType: {} as AvailableTestSelection,
    optionsType: {} as CreateTestOptions,
    schemaType: null as Query["test"],

    variablesType: undefined as {
      
              test?: CreateTestInput,
          }  | createTestVariables
    
    | undefined,

    variables: {
      "test": {
        required: false,
        type: "CreateTestInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
    delete = Object.assign(deleteTest,
  {
    type: "action",
    operationName: "deleteTest",
    namespace: null,
    modelApiIdentifier: "test",
    modelSelectionField: "test",
    isBulk: false,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteTestOptions,
    schemaType: null,

    variablesType: undefined as {
      id: string,
          } | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: false,
    isCreateOrUpdateAction: false,
    paramOnlyVariables: [],
  } as const
)
  
    /**
  * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
  */
bulkDelete: {
  <Options extends DeleteTestOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteTestOptions>
  ): Promise<void>;
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
} = Object.assign(
  async <Options extends DeleteTestOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteTestOptions>
  ) => {
    return (await actionRunner<void>(
      this,
      "bulkDeleteTests",
      null,
      "test",
      "tests",
      true,
      {
        ids: {
          value: ids,
          required: true,
          type: "[GadgetID!]",
        },
      },
      options,
      null
    ));
  },
  {
    type: "action",
    operationName: "bulkDeleteTests",
    namespace: null,
    modelApiIdentifier: "test",
    modelSelectionField: "tests",
    isBulk: true,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteTestOptions,
    schemaType: null,

    variablesType: undefined as {
      ids: string[]
    } | undefined,

    variables: {
      ids: {
        required: true,
        type: "[GadgetID!]",
      },
    },
  } as const
)
  
    update = Object.assign(updateTest,
  {
    type: "action",
    operationName: "updateTest",
    namespace: null,
    modelApiIdentifier: "test",
    modelSelectionField: "test",
    isBulk: false,
    defaultSelection: DefaultTestSelection,
    selectionType: {} as AvailableTestSelection,
    optionsType: {} as UpdateTestOptions,
    schemaType: null as Query["test"],

    variablesType: undefined as {
      id: string,
              test?: UpdateTestInput,
          }  | updateTestVariables
    
    & { id: string; }
    
    | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "test": {
        required: false,
        type: "UpdateTestInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
}
