/**
* This is the Gadget server side types library for:
*
*   _____    _ _                      
*  |  ___|__| (_)_      ____  ___ __  
*  | |_ / _ \ | \ \ /\ / /\ \/ / '_ \ 
*  |  _|  __/ | |\ V  V /  >  <| |_) |
*  |_|  \___|_|_| \_/\_/  /_/\_\ .__/ 
*                              |_|    
*
* Built for environment `"Development"` at version "130"
* Edit this app here: https://"feliwxp".gadget.dev/edit
*/
import { FastifyLoggerInstance } from "fastify";
import type { Client } from "@gadget-client/feliwxp";
export * from "./routes";
export * from "./types";
export * from "./AppConfiguration";
export * from "./AppConnections";
export * from "./global-actions";
export * from "./AmbientContext";
/**
 * @internal
 */
import { Globals, actionContextLocalStorage } from "./globals";
export * from "./models/Session";
export * from "./models/ShopifyGdprRequest";
export * from "./models/ShopifyProduct";
export * from "./models/ShopifyShop";
export * from "./models/ShopifySync";
export * from "./models/Token";
export * from "./models/Test";
export * from "./effects";

/**
 * An instance of the Gadget logger
 */
let logger: FastifyLoggerInstance;
/**
 * An instance of the Gadget API client that has admin permissions
 */
let api: Client;

/**
 * This is used internally to set the rootLogger.
 * @internal
 */
export const setLogger = (rootLogger: FastifyLoggerInstance) => {
  Globals.logger = rootLogger;
  logger = rootLogger;
};

/**
 * This is used internally to set the client Instance
 * @internal
 */
export const setApiClient = (client: Client) => {
  api = client;
}

export {
  logger,
  api
}

/**
 * @internal
 */
export {
  Globals,
  actionContextLocalStorage
};
