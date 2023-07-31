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
      Token,
      TokenSort,
      TokenFilter,
      AvailableTokenSelection,
      CreateTokenInput,
      BulkDeleteTokensResult,
      UpdateTokenInput,
  
} from "../types.js";

export const DefaultTokenSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "token": true
} as const;

/** 
* Produce a type that holds only the selected fields (and nested fields) of "token". The present fields in the result type of this are dynamic based on the options to each call that uses it. 
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above. 
*/
export type SelectedTokenOrDefault<Options extends Selectable<AvailableTokenSelection>> = DeepFilterNever<
  Select<
    Token, 
    DefaultSelection<
      AvailableTokenSelection,
      Options,
      typeof DefaultTokenSelection
    >
  >>;

/** Options that can be passed to the `TokenManager#findOne` method */
export interface FindOneTokenOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableTokenSelection;
};


/** Options that can be passed to the `TokenManager#maybeFindOne` method */
export interface MaybeFindOneTokenOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableTokenSelection;
};


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
};


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
};


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
};



export interface CreateTokenOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableTokenSelection;
};



export interface DeleteTokenOptions {
};



export interface UpdateTokenOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableTokenSelection;
};




    
  type createTokenVariables =
      CreateTokenInput



/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Default nested api identifier overload
async function createToken<Options extends CreateTokenOptions>(
  
      variables: {
          token?: CreateTokenInput,
        },
  
  options?: LimitToKnownKeys<Options, CreateTokenOptions>
): Promise<SelectedTokenOrDefault<Options> extends void ? void : GadgetRecord<SelectedTokenOrDefault<Options>>>;

// Ambiguous identifier overload that should not be used
/**
* @deprecated
* @see {@linkcode createToken} for the correct signature
* @description token contains a field or exported param that conflicts with the model API identifier. This function signature should not be used. 
*/
async function createToken<Options extends CreateTokenOptions>(
  
    variables: createTokenVariables,

  options?: LimitToKnownKeys<Options, CreateTokenOptions>
): Promise<ExplicitNestingRequired>;

// Function implementation
async function createToken<Options extends CreateTokenOptions>(
  this: TokenManager,
  
      variables: {
          token?: CreateTokenInput,
        }
    
      | createTokenVariables
    ,
  
  options?: LimitToKnownKeys<Options, CreateTokenOptions>
): Promise<SelectedTokenOrDefault<Options> extends void ? void : GadgetRecord<SelectedTokenOrDefault<Options>>>
 {
    let newVariables: {
      token?: CreateTokenInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "token";

    
    if (Object.keys(variables).some(key => !paramOnlyVariables.includes(key) && key !== modelApiIdentifier)) {
      throw Error(`Invalid arguments found in variables. Did you mean to use create({ ${modelApiIdentifier}: { ... } })?`)
    }
    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: CreateTokenInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof CreateTokenInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedTokenOrDefault<Options>>(
      this,
      "createToken",
      DefaultTokenSelection,
      "token",
      "token",
      false,
      {
        "token": {
          value: newVariables.token,
          required: false,
          type: "CreateTokenInput",
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
async function deleteToken<Options extends DeleteTokenOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteTokenOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedTokenOrDefault<Options>>>;

// Function implementation
async function deleteToken<Options extends DeleteTokenOptions>(
  this: TokenManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteTokenOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedTokenOrDefault<Options>>>
 {

    return (await actionRunner<void>(
      this,
      "deleteToken",
      null,
      "token",
      "token",
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
  
    
  type updateTokenVariables =
      UpdateTokenInput



/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Default nested api identifier overload
async function updateToken<Options extends UpdateTokenOptions>(
  id: string,
      variables: {
          token?: UpdateTokenInput,
        },
  
  options?: LimitToKnownKeys<Options, UpdateTokenOptions>
): Promise<SelectedTokenOrDefault<Options> extends void ? void : GadgetRecord<SelectedTokenOrDefault<Options>>>;

// Ambiguous identifier overload that should not be used
/**
* @deprecated
* @see {@linkcode updateToken} for the correct signature
* @description token contains a field or exported param that conflicts with the model API identifier. This function signature should not be used. 
*/
async function updateToken<Options extends UpdateTokenOptions>(
  id: string,
    variables: updateTokenVariables,

  options?: LimitToKnownKeys<Options, UpdateTokenOptions>
): Promise<ExplicitNestingRequired>;

// Function implementation
async function updateToken<Options extends UpdateTokenOptions>(
  this: TokenManager,
  id: string,
      variables: {
          token?: UpdateTokenInput,
        }
    
      | updateTokenVariables
    ,
  
  options?: LimitToKnownKeys<Options, UpdateTokenOptions>
): Promise<SelectedTokenOrDefault<Options> extends void ? void : GadgetRecord<SelectedTokenOrDefault<Options>>>
 {
    let newVariables: {
      token?: UpdateTokenInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "token";

    
    if (Object.keys(variables).some(key => !paramOnlyVariables.includes(key) && key !== modelApiIdentifier)) {
      throw Error(`Invalid arguments found in variables. Did you mean to use update({ ${modelApiIdentifier}: { ... } })?`)
    }
    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: UpdateTokenInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof UpdateTokenInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedTokenOrDefault<Options>>(
      this,
      "updateToken",
      DefaultTokenSelection,
      "token",
      "token",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
        "token": {
          value: newVariables.token,
          required: false,
          type: "UpdateTokenInput",
        },
      },
      options,
      null
    ));
  }
  

/** All the actions available at the collection level and record level for "token" */
export class TokenManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one token by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneTokenOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneTokenOptions>):
    Promise<
      GadgetRecord<
        SelectedTokenOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "token";
  modelApiIdentifier: "token";
  defaultSelection: typeof DefaultTokenSelection;
  selectionType: AvailableTokenSelection;
  optionsType: FindOneTokenOptions;
  schemaType: Query["token"];
} = Object.assign(
  async <Options extends FindOneTokenOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneTokenOptions>) => {
    return await findOneRunner<SelectedTokenOrDefault<Options>>(
      this,
      "token",
      id,
      DefaultTokenSelection,
      "token",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "token",
    modelApiIdentifier: "token",
    defaultSelection: DefaultTokenSelection,
    selectionType: {} as AvailableTokenSelection,
    optionsType: {} as FindOneTokenOptions,
    schemaType: null as Query["token"],
  } as const
)

  
    /**
 * Finds one token by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneTokenOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneTokenOptions>):
    Promise<
      GadgetRecord<
        SelectedTokenOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "token";
  modelApiIdentifier: "token";
  defaultSelection: typeof DefaultTokenSelection;
  selectionType: AvailableTokenSelection;
  optionsType: MaybeFindOneTokenOptions;
  schemaType: Query["token"];
} = Object.assign(
  async <Options extends MaybeFindOneTokenOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneTokenOptions>) => {
    const record = await findOneRunner<SelectedTokenOrDefault<Options>>(
      this,
      "token",
      id,
      DefaultTokenSelection,
      "token",
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "token",
    modelApiIdentifier: "token",
    defaultSelection: DefaultTokenSelection,
    selectionType: {} as AvailableTokenSelection,
    optionsType: {} as MaybeFindOneTokenOptions,
    schemaType: null as Query["token"],
  } as const
)

  
    /**
 * Finds many token. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyTokensOptions>(options?: LimitToKnownKeys<Options, FindManyTokensOptions>):
    Promise<
      GadgetRecordList<
        SelectedTokenOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "tokens";
  modelApiIdentifier: "token";
  defaultSelection: typeof DefaultTokenSelection;
  selectionType: AvailableTokenSelection;
  optionsType: FindManyTokensOptions;
  schemaType: Query["token"];
} = Object.assign(
  async <Options extends FindManyTokensOptions>(options?: LimitToKnownKeys<Options, FindManyTokensOptions>):
    Promise<
      GadgetRecordList<
        SelectedTokenOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedTokenOrDefault<Options>>(
      this,
      "tokens",
      DefaultTokenSelection,
      "token",
      options
    );
  },
  {
    type: "findMany",
    operationName: "tokens",
    modelApiIdentifier: "token",
    defaultSelection: DefaultTokenSelection,
    selectionType: {} as AvailableTokenSelection,
    optionsType: {} as FindManyTokensOptions,
    schemaType: null as Query["token"],
  } as const
);
  
    /**
 * Finds the first matching token. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstTokenOptions>(options?: LimitToKnownKeys<Options, FindFirstTokenOptions>):
    Promise<
      GadgetRecord<
        SelectedTokenOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "tokens";
  modelApiIdentifier: "token";
  defaultSelection: typeof DefaultTokenSelection;
  selectionType: AvailableTokenSelection;
  optionsType: FindFirstTokenOptions;
  schemaType: Query["token"];
} = Object.assign(
  async <Options extends FindFirstTokenOptions>(options?: LimitToKnownKeys<Options, FindFirstTokenOptions>):
    Promise<
      GadgetRecord<
        SelectedTokenOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedTokenOrDefault<Options>>(
      this,
      "tokens",
      DefaultTokenSelection,
      "token",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "tokens",
    modelApiIdentifier: "token",
    defaultSelection: DefaultTokenSelection,
    selectionType: {} as AvailableTokenSelection,
    optionsType: {} as FindFirstTokenOptions,
    schemaType: null as Query["token"],
  } as const
);
  
    /**
 * Finds the first matching token. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstTokenOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstTokenOptions>):
    Promise<
      GadgetRecord<
        SelectedTokenOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "tokens";
  modelApiIdentifier: "token";
  defaultSelection: typeof DefaultTokenSelection;
  selectionType: AvailableTokenSelection;
  optionsType: MaybeFindFirstTokenOptions;
  schemaType: Query["token"];
} = Object.assign(
  async <Options extends MaybeFindFirstTokenOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstTokenOptions>):
    Promise<
      GadgetRecord<
        SelectedTokenOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedTokenOrDefault<Options>>(
      this,
      "tokens",
      DefaultTokenSelection,
      "token",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "tokens",
    modelApiIdentifier: "token",
    defaultSelection: DefaultTokenSelection,
    selectionType: {} as AvailableTokenSelection,
    optionsType: {} as MaybeFindFirstTokenOptions,
    schemaType: null as Query["token"],
  } as const
);
  
    /**
  * Finds one token by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneTokenOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneTokenOptions>):
    Promise<
      GadgetRecord<
        SelectedTokenOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "tokens";
  modelApiIdentifier: "token";
  defaultSelection: typeof DefaultTokenSelection;
  selectionType: AvailableTokenSelection;
  optionsType: FindOneTokenOptions;
  schemaType: Query["token"];
} = Object.assign(
  async <Options extends FindOneTokenOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneTokenOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedTokenOrDefault<Options>
      > & SelectedTokenOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedTokenOrDefault<Options>>(
      this,
      "tokens",
      "id",
      value,
      DefaultTokenSelection,
      "token",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "tokens",
    modelApiIdentifier: "token",
    defaultSelection: DefaultTokenSelection,
    selectionType: {} as AvailableTokenSelection,
    optionsType: {} as FindOneTokenOptions,
    schemaType: null as Query["token"],
  } as const
)
  
    /**
  * Finds one token by its token. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findByToken: {
  <Options extends FindOneTokenOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneTokenOptions>):
    Promise<
      GadgetRecord<
        SelectedTokenOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "token";
  operationName: "tokens";
  modelApiIdentifier: "token";
  defaultSelection: typeof DefaultTokenSelection;
  selectionType: AvailableTokenSelection;
  optionsType: FindOneTokenOptions;
  schemaType: Query["token"];
} = Object.assign(
  async <Options extends FindOneTokenOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneTokenOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedTokenOrDefault<Options>
      > & SelectedTokenOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedTokenOrDefault<Options>>(
      this,
      "tokens",
      "token",
      value,
      DefaultTokenSelection,
      "token",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "token",
    operationName: "tokens",
    modelApiIdentifier: "token",
    defaultSelection: DefaultTokenSelection,
    selectionType: {} as AvailableTokenSelection,
    optionsType: {} as FindOneTokenOptions,
    schemaType: null as Query["token"],
  } as const
)
  
    create = Object.assign(createToken,
  {
    type: "action",
    operationName: "createToken",
    namespace: null,
    modelApiIdentifier: "token",
    modelSelectionField: "token",
    isBulk: false,
    defaultSelection: DefaultTokenSelection,
    selectionType: {} as AvailableTokenSelection,
    optionsType: {} as CreateTokenOptions,
    schemaType: null as Query["token"],

    variablesType: undefined as {
      
              token?: CreateTokenInput,
          } | undefined,

    variables: {
      "token": {
        required: false,
        type: "CreateTokenInput",
      },
    },
    hasAmbiguousIdentifier: true,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
    delete = Object.assign(deleteToken,
  {
    type: "action",
    operationName: "deleteToken",
    namespace: null,
    modelApiIdentifier: "token",
    modelSelectionField: "token",
    isBulk: false,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteTokenOptions,
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
    hasAmbiguousIdentifier: true,
    hasCreateOrUpdateEffect: false,
    isCreateOrUpdateAction: false,
    paramOnlyVariables: [],
  } as const
)
  
    /**
  * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
  */
bulkDelete: {
  <Options extends DeleteTokenOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteTokenOptions>
  ): Promise<void>;
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
} = Object.assign(
  async <Options extends DeleteTokenOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteTokenOptions>
  ) => {
    return (await actionRunner<void>(
      this,
      "bulkDeleteTokens",
      null,
      "token",
      "tokens",
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
    operationName: "bulkDeleteTokens",
    namespace: null,
    modelApiIdentifier: "token",
    modelSelectionField: "tokens",
    isBulk: true,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteTokenOptions,
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
  
    update = Object.assign(updateToken,
  {
    type: "action",
    operationName: "updateToken",
    namespace: null,
    modelApiIdentifier: "token",
    modelSelectionField: "token",
    isBulk: false,
    defaultSelection: DefaultTokenSelection,
    selectionType: {} as AvailableTokenSelection,
    optionsType: {} as UpdateTokenOptions,
    schemaType: null as Query["token"],

    variablesType: undefined as {
      id: string,
              token?: UpdateTokenInput,
          } | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "token": {
        required: false,
        type: "UpdateTokenInput",
      },
    },
    hasAmbiguousIdentifier: true,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
}
