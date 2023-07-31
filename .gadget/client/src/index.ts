/**
* This is the Gadget API client library for:
*
*   _____    _ _                      
*  |  ___|__| (_)_      ____  ___ __  
*  | |_ / _ \ | \ \ /\ / /\ \/ / '_ \ 
*  |  _|  __/ | |\ V  V /  >  <| |_) |
*  |_|  \___|_|_| \_/\_/  /_/\_\ .__/ 
*                              |_|    
*
* Built for environment "Development" at version 45
* API docs: https://docs.gadget.dev/api/feliwxp
* Edit this app here: https://feliwxp.gadget.dev/edit
*/
export {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordList,
  GadgetInternalError,
  GadgetClientError,
  GadgetOperationError,
  InvalidRecordError,
  GadgetValidationError,
  BrowserSessionStorageType
} from "@gadgetinc/api-client-core";

export type { ClientOptions, BrowserSessionAuthenticationModeOptions, InvalidFieldError, AuthenticationModeOptions, Select } from "@gadgetinc/api-client-core";

export * from "./Client.js";
export * from "./types.js";

declare global {
  interface Window {
    gadgetConfig: {
      apiKeys: {
        shopify: string;
      };
      environment: string;
      env: Record<string, any>;
    };
  }
}
