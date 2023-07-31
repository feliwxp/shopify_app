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
* Built for environment `"Development"` at version "45"
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
export * from "./models/Session";
export * from "./models/ShopifyGdprRequest";
export * from "./models/ShopifyProduct";
export * from "./models/ShopifyShop";
export * from "./models/ShopifySync";
export * from "./models/Token";
export * from "./effects";
/**
 * An instance of the Gadget logger
 */
declare let logger: FastifyLoggerInstance;
/**
 * An instance of the Gadget API client that has admin permissions
 */
declare let api: Client;
export { logger, api };
