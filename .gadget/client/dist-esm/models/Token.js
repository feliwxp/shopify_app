import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
const DefaultTokenSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "token": true
};
;
;
;
;
;
;
;
;
async function createToken(variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "token";
  if (Object.keys(variables).some((key) => !paramOnlyVariables.includes(key) && key !== modelApiIdentifier)) {
    throw Error(`Invalid arguments found in variables. Did you mean to use create({ ${modelApiIdentifier}: { ... } })?`);
  }
  if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
    newVariables = variables;
  } else {
    newVariables = {
      [modelApiIdentifier]: {}
    };
    for (const [key, value] of Object.entries(variables)) {
      if (paramOnlyVariables.includes(key)) {
        newVariables[key] = value;
      } else {
        newVariables[modelApiIdentifier][key] = value;
      }
    }
  }
  return await actionRunner(
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
        type: "CreateTokenInput"
      }
    },
    options,
    null
  );
}
async function deleteToken(id, options) {
  return await actionRunner(
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
        type: "GadgetID"
      }
    },
    options,
    null
  );
}
async function updateToken(id, variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "token";
  if (Object.keys(variables).some((key) => !paramOnlyVariables.includes(key) && key !== modelApiIdentifier)) {
    throw Error(`Invalid arguments found in variables. Did you mean to use update({ ${modelApiIdentifier}: { ... } })?`);
  }
  if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
    newVariables = variables;
  } else {
    newVariables = {
      [modelApiIdentifier]: {}
    };
    for (const [key, value] of Object.entries(variables)) {
      if (paramOnlyVariables.includes(key)) {
        newVariables[key] = value;
      } else {
        newVariables[modelApiIdentifier][key] = value;
      }
    }
  }
  return await actionRunner(
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
        type: "GadgetID"
      },
      "token": {
        value: newVariables.token,
        required: false,
        type: "UpdateTokenInput"
      }
    },
    options,
    null
  );
}
class TokenManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one token by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one token by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds many token. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching token. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "tokens",
          DefaultTokenSelection,
          "token",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "tokens",
        modelApiIdentifier: "token",
        defaultSelection: DefaultTokenSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching token. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "tokens",
          DefaultTokenSelection,
          "token",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "tokens",
        modelApiIdentifier: "token",
        defaultSelection: DefaultTokenSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one token by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one token by its token. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findByToken = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    this.create = Object.assign(
      createToken,
      {
        type: "action",
        operationName: "createToken",
        namespace: null,
        modelApiIdentifier: "token",
        modelSelectionField: "token",
        isBulk: false,
        defaultSelection: DefaultTokenSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          "token": {
            required: false,
            type: "CreateTokenInput"
          }
        },
        hasAmbiguousIdentifier: true,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
    this.delete = Object.assign(
      deleteToken,
      {
        type: "action",
        operationName: "deleteToken",
        namespace: null,
        modelApiIdentifier: "token",
        modelSelectionField: "token",
        isBulk: false,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: true,
        hasCreateOrUpdateEffect: false,
        isCreateOrUpdateAction: false,
        paramOnlyVariables: []
      }
    );
    /**
    * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
    */
    this.bulkDelete = Object.assign(
      async (ids, options) => {
        return await actionRunner(
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
              type: "[GadgetID!]"
            }
          },
          options,
          null
        );
      },
      {
        type: "action",
        operationName: "bulkDeleteTokens",
        namespace: null,
        modelApiIdentifier: "token",
        modelSelectionField: "tokens",
        isBulk: true,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          ids: {
            required: true,
            type: "[GadgetID!]"
          }
        }
      }
    );
    this.update = Object.assign(
      updateToken,
      {
        type: "action",
        operationName: "updateToken",
        namespace: null,
        modelApiIdentifier: "token",
        modelSelectionField: "token",
        isBulk: false,
        defaultSelection: DefaultTokenSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "token": {
            required: false,
            type: "UpdateTokenInput"
          }
        },
        hasAmbiguousIdentifier: true,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
  }
}
export {
  DefaultTokenSelection,
  TokenManager
};
//# sourceMappingURL=Token.js.map
