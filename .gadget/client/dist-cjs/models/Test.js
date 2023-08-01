"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Test_exports = {};
__export(Test_exports, {
  DefaultTestSelection: () => DefaultTestSelection,
  TestManager: () => TestManager
});
module.exports = __toCommonJS(Test_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
const DefaultTestSelection = {
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
async function createTest(variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "test";
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
  return await (0, import_api_client_core.actionRunner)(
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
        type: "CreateTestInput"
      }
    },
    options,
    null
  );
}
async function deleteTest(id, options) {
  return await (0, import_api_client_core.actionRunner)(
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
        type: "GadgetID"
      }
    },
    options,
    null
  );
}
async function updateTest(id, variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "test";
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
  return await (0, import_api_client_core.actionRunner)(
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
        type: "GadgetID"
      },
      "test": {
        value: newVariables.test,
        required: false,
        type: "UpdateTestInput"
      }
    },
    options,
    null
  );
}
class TestManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one test by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one test by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds many test. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching test. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "tests",
          DefaultTestSelection,
          "test",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "tests",
        modelApiIdentifier: "test",
        defaultSelection: DefaultTestSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching test. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "tests",
          DefaultTestSelection,
          "test",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "tests",
        modelApiIdentifier: "test",
        defaultSelection: DefaultTestSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one test by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    this.create = Object.assign(
      createTest,
      {
        type: "action",
        operationName: "createTest",
        namespace: null,
        modelApiIdentifier: "test",
        modelSelectionField: "test",
        isBulk: false,
        defaultSelection: DefaultTestSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          "test": {
            required: false,
            type: "CreateTestInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
    this.delete = Object.assign(
      deleteTest,
      {
        type: "action",
        operationName: "deleteTest",
        namespace: null,
        modelApiIdentifier: "test",
        modelSelectionField: "test",
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
        hasAmbiguousIdentifier: false,
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
        return await (0, import_api_client_core.actionRunner)(
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
              type: "[GadgetID!]"
            }
          },
          options,
          null
        );
      },
      {
        type: "action",
        operationName: "bulkDeleteTests",
        namespace: null,
        modelApiIdentifier: "test",
        modelSelectionField: "tests",
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
      updateTest,
      {
        type: "action",
        operationName: "updateTest",
        namespace: null,
        modelApiIdentifier: "test",
        modelSelectionField: "test",
        isBulk: false,
        defaultSelection: DefaultTestSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "test": {
            required: false,
            type: "UpdateTestInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultTestSelection,
  TestManager
});
//# sourceMappingURL=Test.js.map
