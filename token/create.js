import { applyParams, save, ActionOptions, CreateTokenActionContext } from "gadget-server";
import crypto from 'crypto';

/** 
 * @param { CreateTokenActionContext } context 
 */
export async function run({ params, record, logger, api }) {
  // Generate a random token using crypto
  const token = crypto.randomBytes(20).toString('hex');
  console.log(params.token.shopId._link)
  // Apply the generated token and the shopId from params to the record
  record.token = token;
  record.shopId = params.token.shopId;


  await save(record);
};

/** 
 * @param { CreateTokenActionContext } context 
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};
