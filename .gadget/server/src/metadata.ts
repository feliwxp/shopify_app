import type { ModelMetadata } from "./types";

/**
 * Internal variable to store model blobs with GraphQL typename as the key, and use them in the action code functions.
 * @internal
 */
export const modelsMap: Record<string, ModelMetadata> = {"Session":{"key":"DataModel-ZFMVWgzFgv8j","name":"Session","apiIdentifier":"session","fields":{"ModelField-69_Qu7K_I3Nx-system-id":{"fieldType":"ID","key":"ModelField-69_Qu7K_I3Nx-system-id","name":"ID","apiIdentifier":"id","configuration":{"type":"IDConfig","key":"IDConfig-gdJyayty56sD","createdDate":1690796367606},"internalWritable":true},"ModelField-lGq28XUl70Rb-system-createdAt":{"fieldType":"DateTime","key":"ModelField-lGq28XUl70Rb-system-createdAt","name":"Created At","apiIdentifier":"createdAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-qdddHRvVeCxJ","createdDate":1690796367607,"includeTime":true,"default":null},"internalWritable":true},"ModelField-qVOt6Q8TduUL-system-updatedAt":{"fieldType":"DateTime","key":"ModelField-qVOt6Q8TduUL-system-updatedAt","name":"Updated At","apiIdentifier":"updatedAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-zZc17mUnuzRS","createdDate":1690796367607,"includeTime":true,"default":null},"internalWritable":true},"ModelField-xA1Nd6KNnByE":{"fieldType":"RoleAssignments","key":"ModelField-xA1Nd6KNnByE","name":"Roles","apiIdentifier":"roles","configuration":{"type":"RoleAssignmentsConfig","key":"RoleAssignmentsConfig-Je10Ml7VjYFs","createdDate":1690796367621,"default":["unauthenticated"]},"internalWritable":true},"Model-Field-Belongs-To-Shop":{"fieldType":"BelongsTo","key":"Model-Field-Belongs-To-Shop","name":"Shop","apiIdentifier":"shop","configuration":{"type":"BelongsToConfig","key":"BelongsToConfig-5GJPer5adLMk","createdDate":1690796492495,"relatedModelKey":"DataModel-Shopify-Shop"},"internalWritable":true},"Model-Field-Shopify-SID":{"fieldType":"String","key":"Model-Field-Shopify-SID","name":"Shopify SID","apiIdentifier":"shopifySID","configuration":{"type":"StringConfig","key":"StringConfig-bcpxkm8A-zGZ","createdDate":1690796492497,"default":null},"internalWritable":true}},"graphqlTypeName":"Session"},"ShopifyGdprRequest":{"key":"DataModel-Shopify-GdprRequest","name":"Shopify GDPR Request","apiIdentifier":"shopifyGdprRequest","fields":{"ModelField-DataModel-Shopify-GdprRequest-system-id":{"fieldType":"ID","key":"ModelField-DataModel-Shopify-GdprRequest-system-id","name":"ID","apiIdentifier":"id","configuration":{"type":"IDConfig","key":"IDConfig-k-pyOb67hoFZ","createdDate":1690796492380},"internalWritable":true},"ModelField-DataModel-Shopify-GdprRequest-system-createdAt":{"fieldType":"DateTime","key":"ModelField-DataModel-Shopify-GdprRequest-system-createdAt","name":"Created At","apiIdentifier":"createdAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-8lyTsWEuNVi8","createdDate":1690796492381,"includeTime":true,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-GdprRequest-system-updatedAt":{"fieldType":"DateTime","key":"ModelField-DataModel-Shopify-GdprRequest-system-updatedAt","name":"Updated At","apiIdentifier":"updatedAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-cbel39L2TTOC","createdDate":1690796492381,"includeTime":true,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-GdprRequest-Payload":{"fieldType":"JSON","key":"ModelField-DataModel-Shopify-GdprRequest-Payload","name":"Payload","apiIdentifier":"payload","configuration":{"type":"JSONConfig","key":"JSONConfig-J7anZB5wKnlf","createdDate":1690796492382,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-GdprRequest-Topic":{"fieldType":"Enum","key":"ModelField-DataModel-Shopify-GdprRequest-Topic","name":"Topic","apiIdentifier":"topic","configuration":{"type":"EnumConfig","key":"EnumConfig-pgDFWtVmJDfg","createdDate":1690796492382,"allowMultiple":false,"allowOther":false,"options":[{"type":"EnumOption","key":"EnumOption-jnw_vUeiOK9h","createdDate":1690796492382,"name":"customers/data_request","color":"#FCFCFC"},{"type":"EnumOption","key":"EnumOption-RaCO5TQKcNMl","createdDate":1690796492382,"name":"customers/redact","color":"#FCFCFC"},{"type":"EnumOption","key":"EnumOption-DBEHGpz_3Fya","createdDate":1690796492382,"name":"shop/redact","color":"#FCFCFC"}],"default":null},"internalWritable":true},"ModelField-Shopify-GdprRequest-Shop":{"fieldType":"BelongsTo","key":"ModelField-Shopify-GdprRequest-Shop","name":"Shop","apiIdentifier":"shop","configuration":{"type":"BelongsToConfig","key":"BelongsToConfig-x3ieCBpzx5gA","createdDate":1690796492381,"relatedModelKey":"DataModel-Shopify-Shop"},"internalWritable":true}},"graphqlTypeName":"ShopifyGdprRequest"},"ShopifyProduct":{"key":"DataModel-Shopify-Product","name":"Shopify Product","apiIdentifier":"shopifyProduct","fields":{"ModelField-DataModel-Shopify-Product-id":{"fieldType":"ID","key":"ModelField-DataModel-Shopify-Product-id","name":"ID","apiIdentifier":"id","configuration":{"type":"IDConfig","key":"IDConfig-CMUKiqi9zrAu","createdDate":1690796492416},"internalWritable":true},"ModelField-DataModel-Shopify-Product-system-createdAt":{"fieldType":"DateTime","key":"ModelField-DataModel-Shopify-Product-system-createdAt","name":"Created At","apiIdentifier":"createdAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-X3FyN5oCvCLv","createdDate":1690796492417,"includeTime":true,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Product-system-updatedAt":{"fieldType":"DateTime","key":"ModelField-DataModel-Shopify-Product-system-updatedAt","name":"Updated At","apiIdentifier":"updatedAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-8PCB5HTVtHZw","createdDate":1690796492417,"includeTime":true,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Product-__gadget_graphql_product_category":{"fieldType":"JSON","key":"ModelField-DataModel-Shopify-Product-__gadget_graphql_product_category","name":"Product Category","apiIdentifier":"productCategory","configuration":{"type":"JSONConfig","key":"JSONConfig-LhYqzF5HSgVP","createdDate":1690796492417,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Product-body_html":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Product-body_html","name":"Body","apiIdentifier":"body","configuration":{"type":"StringConfig","key":"StringConfig-49HCV-M4jhXs","createdDate":1690796492417,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Product-created_at":{"fieldType":"DateTime","key":"ModelField-DataModel-Shopify-Product-created_at","name":"Shopify Created At","apiIdentifier":"shopifyCreatedAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-rHIJBqu8_qLB","createdDate":1690796492418,"includeTime":true,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Product-handle":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Product-handle","name":"Handle","apiIdentifier":"handle","configuration":{"type":"StringConfig","key":"StringConfig-QxZ0cWo7EgF-","createdDate":1690796492418,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Product-product_type":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Product-product_type","name":"Product Type","apiIdentifier":"productType","configuration":{"type":"StringConfig","key":"StringConfig-XTk3xZ_a1dI9","createdDate":1690796492418,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Product-published_at":{"fieldType":"DateTime","key":"ModelField-DataModel-Shopify-Product-published_at","name":"Published At","apiIdentifier":"publishedAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-2VOvetSdpPbR","createdDate":1690796492418,"includeTime":true,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Product-published_scope":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Product-published_scope","name":"Published Scope","apiIdentifier":"publishedScope","configuration":{"type":"StringConfig","key":"StringConfig-aHJgCASw2cwU","createdDate":1690796492418,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Product-status":{"fieldType":"Enum","key":"ModelField-DataModel-Shopify-Product-status","name":"Status","apiIdentifier":"status","configuration":{"type":"EnumConfig","key":"EnumConfig-ybAXyjJDbnL2","createdDate":1690796492419,"allowMultiple":false,"allowOther":false,"options":[{"type":"EnumOption","key":"EnumOption-44kzDZ9c4_12","createdDate":1688576830662,"name":"active","color":"#FCFCFC"},{"type":"EnumOption","key":"EnumOption-w0-_SOUrtlE6","createdDate":1688576830662,"name":"archived","color":"#FCFCFC"},{"type":"EnumOption","key":"EnumOption-S7Va9LjqLqsB","createdDate":1688576830663,"name":"draft","color":"#FCFCFC"}],"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Product-tags":{"fieldType":"JSON","key":"ModelField-DataModel-Shopify-Product-tags","name":"Tags","apiIdentifier":"tags","configuration":{"type":"JSONConfig","key":"JSONConfig-Vl_72PBYPe5B","createdDate":1690796492419,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Product-template_suffix":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Product-template_suffix","name":"Template Suffix","apiIdentifier":"templateSuffix","configuration":{"type":"StringConfig","key":"StringConfig-zZu-_ONrD5PM","createdDate":1690796492419,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Product-title":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Product-title","name":"Title","apiIdentifier":"title","configuration":{"type":"StringConfig","key":"StringConfig-tNwsnjJB_opw","createdDate":1690796492419,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Product-updated_at":{"fieldType":"DateTime","key":"ModelField-DataModel-Shopify-Product-updated_at","name":"Shopify Updated At","apiIdentifier":"shopifyUpdatedAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-p3Dz_XE8MFQo","createdDate":1690796492418,"includeTime":true,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Product-vendor":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Product-vendor","name":"Vendor","apiIdentifier":"vendor","configuration":{"type":"StringConfig","key":"StringConfig-IqNoW2bFfuPa","createdDate":1690796492419,"default":null},"internalWritable":true},"ModelField-Shopify-Product-Shop":{"fieldType":"BelongsTo","key":"ModelField-Shopify-Product-Shop","name":"Shop","apiIdentifier":"shop","configuration":{"type":"BelongsToConfig","key":"BelongsToConfig-9clv3LXwemDo","createdDate":1690796492420,"relatedModelKey":"DataModel-Shopify-Shop"},"internalWritable":true}},"graphqlTypeName":"ShopifyProduct"},"ShopifyShop":{"key":"DataModel-Shopify-Shop","name":"Shopify Shop","apiIdentifier":"shopifyShop","fields":{"ModelField-DataModel-Shopify-Shop-id":{"fieldType":"ID","key":"ModelField-DataModel-Shopify-Shop-id","name":"ID","apiIdentifier":"id","configuration":{"type":"IDConfig","key":"IDConfig-93_kvRv1HN7y","createdDate":1690796492296},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-system-createdAt":{"fieldType":"DateTime","key":"ModelField-DataModel-Shopify-Shop-system-createdAt","name":"Created At","apiIdentifier":"createdAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-5gIv7jWbOkmJ","createdDate":1690796492296,"includeTime":true,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-system-updatedAt":{"fieldType":"DateTime","key":"ModelField-DataModel-Shopify-Shop-system-updatedAt","name":"Updated At","apiIdentifier":"updatedAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-WdlNp2pC8ehR","createdDate":1690796492296,"includeTime":true,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-system-state":{"fieldType":"RecordState","key":"ModelField-DataModel-Shopify-Shop-system-state","name":"State","apiIdentifier":"state","configuration":{"type":"RecordStateConfig","key":"RecordStateConfig-jl5NpB725CAD","createdDate":1690796492297},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-2oW_I8rChbpX":{"fieldType":"HasMany","key":"ModelField-DataModel-Shopify-Shop-2oW_I8rChbpX","name":"Syncs","apiIdentifier":"syncs","configuration":{"type":"HasManyConfig","key":"HasManyConfig-dcSFV67TOiUe","createdDate":1690796492305,"relatedModelKey":"DataModel-Shopify-Sync","inverseFieldKey":"ModelField-Shopify-Sync-Shop","dependent":"ignore"},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-5Ycmf8TJZ0xr":{"fieldType":"HasMany","key":"ModelField-DataModel-Shopify-Shop-5Ycmf8TJZ0xr","name":"Products","apiIdentifier":"products","configuration":{"type":"HasManyConfig","key":"HasManyConfig-opWi7pAgMQ18","createdDate":1690796492305,"relatedModelKey":"DataModel-Shopify-Product","inverseFieldKey":"ModelField-Shopify-Product-Shop","dependent":"ignore"},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-YnCXNA6dFxXK":{"fieldType":"HasMany","key":"ModelField-DataModel-Shopify-Shop-YnCXNA6dFxXK","name":"GDPR Requests","apiIdentifier":"gdprRequests","configuration":{"type":"HasManyConfig","key":"HasManyConfig-tsCY1jLpgmMF","createdDate":1690796492306,"relatedModelKey":"DataModel-Shopify-GdprRequest","inverseFieldKey":"ModelField-Shopify-GdprRequest-Shop","dependent":"ignore"},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-access_token":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-access_token","name":"Access Token","apiIdentifier":"accessToken","configuration":{"type":"StringConfig","key":"StringConfig-OljUEr8VJP_M","createdDate":1690796492306,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-address1":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-address1","name":"Address 1","apiIdentifier":"address1","configuration":{"type":"StringConfig","key":"StringConfig-YjQ9p9JlZrAn","createdDate":1690796492297,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-address2":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-address2","name":"Address 2","apiIdentifier":"address2","configuration":{"type":"StringConfig","key":"StringConfig-YLSFLJJpt74H","createdDate":1690796492297,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-checkout_api_supported":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-checkout_api_supported","name":"Checkout API Supported","apiIdentifier":"checkoutApiSupported","configuration":{"type":"BooleanConfig","key":"BooleanConfig-P16oymDLf11b","createdDate":1690796492298,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-city":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-city","name":"City","apiIdentifier":"city","configuration":{"type":"StringConfig","key":"StringConfig-l47eR2ZLHv-Z","createdDate":1690796492298,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-cookie_consent_level":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-cookie_consent_level","name":"Cookie Consent Level","apiIdentifier":"cookieConsentLevel","configuration":{"type":"StringConfig","key":"StringConfig-FnHOU-TYEU1_","createdDate":1690796492298,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-country":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-country","name":"Country","apiIdentifier":"country","configuration":{"type":"StringConfig","key":"StringConfig-Q2aGOdEdm9XX","createdDate":1690796492298,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-country_code":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-country_code","name":"Country Code","apiIdentifier":"countryCode","configuration":{"type":"StringConfig","key":"StringConfig-cI1hEF9V_Z0z","createdDate":1690796492298,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-country_name":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-country_name","name":"Country Name","apiIdentifier":"countryName","configuration":{"type":"StringConfig","key":"StringConfig-4z5w2VDSCW7M","createdDate":1690796492298,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-county_taxes":{"fieldType":"JSON","key":"ModelField-DataModel-Shopify-Shop-county_taxes","name":"County Taxes","apiIdentifier":"countyTaxes","configuration":{"type":"JSONConfig","key":"JSONConfig-ZK2-0OvnPx2G","createdDate":1690796492298,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-created_at":{"fieldType":"DateTime","key":"ModelField-DataModel-Shopify-Shop-created_at","name":"Shopify Created At","apiIdentifier":"shopifyCreatedAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-3GmcI9p4xeY2","createdDate":1690796492304,"includeTime":true,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-currency":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-currency","name":"Currency","apiIdentifier":"currency","configuration":{"type":"StringConfig","key":"StringConfig-ChZdWYj92FRA","createdDate":1690796492299,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-customer_email":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-customer_email","name":"Customer Email","apiIdentifier":"customerEmail","configuration":{"type":"StringConfig","key":"StringConfig-CteIyR62jCcb","createdDate":1690796492299,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-domain":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-domain","name":"Domain","apiIdentifier":"domain","configuration":{"type":"StringConfig","key":"StringConfig-6MSK2X8wL2O9","createdDate":1690796492299,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-eligible_for_card_reader_giveaway":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-eligible_for_card_reader_giveaway","name":"Eligible For Card Reader Giveaway","apiIdentifier":"eligibleForCardReaderGiveaway","configuration":{"type":"BooleanConfig","key":"BooleanConfig-kbdzULNKfyZ0","createdDate":1690796492299,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-eligible_for_payments":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-eligible_for_payments","name":"Eligible For Payments","apiIdentifier":"eligibleForPayments","configuration":{"type":"BooleanConfig","key":"BooleanConfig-htGXBnS0yTD0","createdDate":1690796492299,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-email":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-email","name":"Email","apiIdentifier":"email","configuration":{"type":"StringConfig","key":"StringConfig-kjl-QXvD8M5I","createdDate":1690796492299,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-enabled_presentment_currencies":{"fieldType":"JSON","key":"ModelField-DataModel-Shopify-Shop-enabled_presentment_currencies","name":"Enabled Presentment Currencies","apiIdentifier":"enabledPresentmentCurrencies","configuration":{"type":"JSONConfig","key":"JSONConfig-EQjt8gsLT5RB","createdDate":1690796492300,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-finances":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-finances","name":"Finances","apiIdentifier":"finances","configuration":{"type":"BooleanConfig","key":"BooleanConfig-A4CDzYH4sPIt","createdDate":1690796492300,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-force_ssl":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-force_ssl","name":"Force SSL","apiIdentifier":"forceSsl","configuration":{"type":"BooleanConfig","key":"BooleanConfig-CbW_x-RCSZAV","createdDate":1690796492300,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-google_apps_domain":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-google_apps_domain","name":"Google Apps Domain","apiIdentifier":"googleAppsDomain","configuration":{"type":"StringConfig","key":"StringConfig-Ozu0RPmSfnct","createdDate":1690796492300,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-google_apps_login_enabled":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-google_apps_login_enabled","name":"Google Apps Login Enabled","apiIdentifier":"googleAppsLoginEnabled","configuration":{"type":"BooleanConfig","key":"BooleanConfig-wUMAppQAKFC8","createdDate":1690796492300,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-granted_scopes":{"fieldType":"JSON","key":"ModelField-DataModel-Shopify-Shop-granted_scopes","name":"Granted Scopes","apiIdentifier":"grantedScopes","configuration":{"type":"JSONConfig","key":"JSONConfig-T6XMAJ9rL41i","createdDate":1690796492306,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-has_discounts":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-has_discounts","name":"Has Discounts","apiIdentifier":"hasDiscounts","configuration":{"type":"BooleanConfig","key":"BooleanConfig-RnVNBHBIOuAu","createdDate":1690796492300,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-has_gift_cards":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-has_gift_cards","name":"Has Gift Cards","apiIdentifier":"hasGiftCards","configuration":{"type":"BooleanConfig","key":"BooleanConfig-_EpO9XrJh1OA","createdDate":1690796492301,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-has_storefront":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-has_storefront","name":"Has Storefront","apiIdentifier":"hasStorefront","configuration":{"type":"BooleanConfig","key":"BooleanConfig-0fDYP9_lk_sq","createdDate":1690796492301,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-iana_timezone":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-iana_timezone","name":"Iana Timezone","apiIdentifier":"ianaTimezone","configuration":{"type":"StringConfig","key":"StringConfig-g4O-IdqLjxvr","createdDate":1690796492301,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-installed_via_api_key":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-installed_via_api_key","name":"Installed Via API Key","apiIdentifier":"installedViaApiKey","configuration":{"type":"StringConfig","key":"StringConfig-pvFe095ov7Vl","createdDate":1690796492312,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-latitude":{"fieldType":"Number","key":"ModelField-DataModel-Shopify-Shop-latitude","name":"Latitude","apiIdentifier":"latitude","configuration":{"type":"NumberConfig","key":"NumberConfig-KPt6bqECQIgH","createdDate":1690796492301,"decimals":null,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-longitude":{"fieldType":"Number","key":"ModelField-DataModel-Shopify-Shop-longitude","name":"Longitude","apiIdentifier":"longitude","configuration":{"type":"NumberConfig","key":"NumberConfig-bKGDRMUsBtzV","createdDate":1690796492301,"decimals":null,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-marketing_sms_consent_enabled_at_checkout":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-marketing_sms_consent_enabled_at_checkout","name":"Marketing SMS Content Enabled at Checkout","apiIdentifier":"marketingSmsContentEnabledAtCheckout","configuration":{"type":"BooleanConfig","key":"BooleanConfig-3pJXehxIhv_c","createdDate":1690796492297,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-money_format":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-money_format","name":"Money Format","apiIdentifier":"moneyFormat","configuration":{"type":"StringConfig","key":"StringConfig-kyj7KepWR5wP","createdDate":1690796492301,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-money_in_emails_format":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-money_in_emails_format","name":"Money In Emails Format","apiIdentifier":"moneyInEmailsFormat","configuration":{"type":"StringConfig","key":"StringConfig-5fVMn2bkv8DM","createdDate":1690796492301,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-money_with_currency_format":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-money_with_currency_format","name":"Money With Currency Format","apiIdentifier":"moneyWithCurrencyFormat","configuration":{"type":"StringConfig","key":"StringConfig-camjvP_vGFbw","createdDate":1690796492302,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-money_with_currency_in_emails_format":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-money_with_currency_in_emails_format","name":"Money With Currency In Emails Format","apiIdentifier":"moneyWithCurrencyInEmailsFormat","configuration":{"type":"StringConfig","key":"StringConfig-l5Ni-bxM0PuX","createdDate":1690796492302,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-multi_location_enabled":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-multi_location_enabled","name":"Multi Location Enabled","apiIdentifier":"multiLocationEnabled","configuration":{"type":"BooleanConfig","key":"BooleanConfig-EvVyU98NJy7u","createdDate":1690796492302,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-myshopify_domain":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-myshopify_domain","name":"myshopify Domain","apiIdentifier":"myshopifyDomain","configuration":{"type":"StringConfig","key":"StringConfig-40ovm5z4CIJ7","createdDate":1690796492302,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-name":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-name","name":"Name","apiIdentifier":"name","configuration":{"type":"StringConfig","key":"StringConfig-rl10HoK0nNiV","createdDate":1690796492302,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-password_enabled":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-password_enabled","name":"Password Enabled","apiIdentifier":"passwordEnabled","configuration":{"type":"BooleanConfig","key":"BooleanConfig-IXbV1LC7Tv3M","createdDate":1690796492302,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-phone":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-phone","name":"Phone","apiIdentifier":"phone","configuration":{"type":"StringConfig","key":"StringConfig-SBk1rX0vOk42","createdDate":1690796492303,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-plan_display_name":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-plan_display_name","name":"Plan Display Name","apiIdentifier":"planDisplayName","configuration":{"type":"StringConfig","key":"StringConfig-mUrZI4DnrBSO","createdDate":1690796492303,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-plan_name":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-plan_name","name":"Plan Name","apiIdentifier":"planName","configuration":{"type":"StringConfig","key":"StringConfig-cKPknOIEiu1g","createdDate":1690796492303,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-pre_launch_enabled":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-pre_launch_enabled","name":"Pre Launch Enabled","apiIdentifier":"preLaunchEnabled","configuration":{"type":"BooleanConfig","key":"BooleanConfig-saeZj8yM-9qh","createdDate":1690796492303,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-primary_locale":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-primary_locale","name":"Primary Locale","apiIdentifier":"primaryLocale","configuration":{"type":"StringConfig","key":"StringConfig-7tZ0NdRwcSru","createdDate":1690796492303,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-province":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-province","name":"Province","apiIdentifier":"province","configuration":{"type":"StringConfig","key":"StringConfig-hO9wBS5h_jrx","createdDate":1690796492303,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-province_code":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-province_code","name":"Province Code","apiIdentifier":"provinceCode","configuration":{"type":"StringConfig","key":"StringConfig-toIjlJ0Z73Zc","createdDate":1690796492303,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-registered_webhooks":{"fieldType":"JSON","key":"ModelField-DataModel-Shopify-Shop-registered_webhooks","name":"Registered Webhooks","apiIdentifier":"registeredWebhooks","configuration":{"type":"JSONConfig","key":"JSONConfig-y3sJ2JFqNfw6","createdDate":1690796492306,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-requires_extra_payments_agreement":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-requires_extra_payments_agreement","name":"Requires Extra Payments Agreement","apiIdentifier":"requiresExtraPaymentsAgreement","configuration":{"type":"BooleanConfig","key":"BooleanConfig-a-Toy7jLXBOO","createdDate":1690796492304,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-setup_required":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-setup_required","name":"Setup Required","apiIdentifier":"setupRequired","configuration":{"type":"BooleanConfig","key":"BooleanConfig-PM4RusMvN8Ln","createdDate":1690796492304,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-shop_owner":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-shop_owner","name":"Shop Owner","apiIdentifier":"shopOwner","configuration":{"type":"StringConfig","key":"StringConfig-SyX0LdWPXeJh","createdDate":1690796492304,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-source":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-source","name":"Source","apiIdentifier":"source","configuration":{"type":"StringConfig","key":"StringConfig-tN-L0hapOode","createdDate":1690796492304,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-tax_shipping":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-tax_shipping","name":"Tax Shipping","apiIdentifier":"taxShipping","configuration":{"type":"BooleanConfig","key":"BooleanConfig-DHB51-GXYGok","createdDate":1690796492305,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-taxes_included":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-taxes_included","name":"Taxes Included","apiIdentifier":"taxesIncluded","configuration":{"type":"BooleanConfig","key":"BooleanConfig-5EWzcYqpJG1o","createdDate":1690796492305,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-timezone":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-timezone","name":"Timezone","apiIdentifier":"timezone","configuration":{"type":"StringConfig","key":"StringConfig-3XQ6G9ICLqXj","createdDate":1690796492305,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-transactional_sms_disabled":{"fieldType":"Boolean","key":"ModelField-DataModel-Shopify-Shop-transactional_sms_disabled","name":"Transactional SMS Disabled","apiIdentifier":"transactionalSmsDisabled","configuration":{"type":"BooleanConfig","key":"BooleanConfig-WqlBsqVJv_LL","createdDate":1690796492297,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-updated_at":{"fieldType":"DateTime","key":"ModelField-DataModel-Shopify-Shop-updated_at","name":"Shopify Updated At","apiIdentifier":"shopifyUpdatedAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-wGOf9XvmcRQO","createdDate":1690796492304,"includeTime":true,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-weight_unit":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-weight_unit","name":"Weight Unit","apiIdentifier":"weightUnit","configuration":{"type":"StringConfig","key":"StringConfig-99oYUdM42Ha9","createdDate":1690796492305,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Shop-zip":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Shop-zip","name":"ZIP Code","apiIdentifier":"zipCode","configuration":{"type":"StringConfig","key":"StringConfig-axz9DXBaxGrO","createdDate":1690796492305,"default":null},"internalWritable":true},"ModelField-T5ZszHLW6end":{"fieldType":"HasMany","key":"ModelField-T5ZszHLW6end","name":"tokens","apiIdentifier":"tokens","configuration":{"type":"HasManyConfig","key":"HasManyConfig-LopRCOr8iDEh","createdDate":1690796671648,"relatedModelKey":"DataModel-Ua8ftfOJYeR9","inverseFieldKey":"ModelField-vGN28iGnwoFx","dependent":"ignore"},"internalWritable":true}},"graphqlTypeName":"ShopifyShop"},"ShopifySync":{"key":"DataModel-Shopify-Sync","name":"Shopify Sync","apiIdentifier":"shopifySync","fields":{"ModelField-DataModel-Shopify-Sync-system-id":{"fieldType":"ID","key":"ModelField-DataModel-Shopify-Sync-system-id","name":"ID","apiIdentifier":"id","configuration":{"type":"IDConfig","key":"IDConfig-dGq_LzlbSSSk","createdDate":1690796492465},"internalWritable":true},"ModelField-DataModel-Shopify-Sync-system-createdAt":{"fieldType":"DateTime","key":"ModelField-DataModel-Shopify-Sync-system-createdAt","name":"Created At","apiIdentifier":"createdAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-IQ0iXbcuAvUz","createdDate":1690796492466,"includeTime":true,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Sync-system-updatedAt":{"fieldType":"DateTime","key":"ModelField-DataModel-Shopify-Sync-system-updatedAt","name":"Updated At","apiIdentifier":"updatedAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-kDC7Mee6MVaa","createdDate":1690796492466,"includeTime":true,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Sync-system-state":{"fieldType":"RecordState","key":"ModelField-DataModel-Shopify-Sync-system-state","name":"State","apiIdentifier":"state","configuration":{"type":"RecordStateConfig","key":"RecordStateConfig-ktUjjdd-Oxqy","createdDate":1690796492466},"internalWritable":true},"ModelField-DataModel-Shopify-Sync-Po0qhnb35cb1":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Sync-Po0qhnb35cb1","name":"Domain","apiIdentifier":"domain","configuration":{"type":"StringConfig","key":"StringConfig-eeFegaiCYtPn","createdDate":1690796492467,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Sync-syncSince":{"fieldType":"DateTime","key":"ModelField-DataModel-Shopify-Sync-syncSince","name":"Sync Since","apiIdentifier":"syncSince","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-3NbAZi4larDv","createdDate":1690796492468,"includeTime":true,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Sync-urVwdNU7c_1X":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Sync-urVwdNU7c_1X","name":"Error Message","apiIdentifier":"errorMessage","configuration":{"type":"StringConfig","key":"StringConfig-Hq9ykxjc0I2s","createdDate":1690796492467,"default":null},"internalWritable":true},"ModelField-DataModel-Shopify-Sync-z0RvsqDttmF1":{"fieldType":"String","key":"ModelField-DataModel-Shopify-Sync-z0RvsqDttmF1","name":"Error Details","apiIdentifier":"errorDetails","configuration":{"type":"StringConfig","key":"StringConfig-9rgUe7Iu18n-","createdDate":1690796492467,"default":null},"internalWritable":true},"ModelField-Shopify-Sync-Force":{"fieldType":"Boolean","key":"ModelField-Shopify-Sync-Force","name":"Force","apiIdentifier":"force","configuration":{"type":"BooleanConfig","key":"BooleanConfig-VY7A4LJjSAB-","createdDate":1690796492468,"default":false},"internalWritable":true},"ModelField-Shopify-Sync-Models":{"fieldType":"JSON","key":"ModelField-Shopify-Sync-Models","name":"Models","apiIdentifier":"models","configuration":{"type":"JSONConfig","key":"JSONConfig-FU24L59eyeZm","createdDate":1690796492468,"default":null},"internalWritable":true},"ModelField-Shopify-Sync-Shop":{"fieldType":"BelongsTo","key":"ModelField-Shopify-Sync-Shop","name":"Shop","apiIdentifier":"shop","configuration":{"type":"BelongsToConfig","key":"BelongsToConfig-eFtfxH5DWJEO","createdDate":1690796492467,"relatedModelKey":"DataModel-Shopify-Shop"},"internalWritable":true}},"graphqlTypeName":"ShopifySync"},"Token":{"key":"DataModel-Ua8ftfOJYeR9","name":"token","apiIdentifier":"token","fields":{"ModelField-MI5OZ2xBSXdB-system-id":{"fieldType":"ID","key":"ModelField-MI5OZ2xBSXdB-system-id","name":"ID","apiIdentifier":"id","configuration":{"type":"IDConfig","key":"IDConfig-nFaYB0yu3f6N","createdDate":1690796656167},"internalWritable":true},"ModelField-7yBLmKj83uEO-system-createdAt":{"fieldType":"DateTime","key":"ModelField-7yBLmKj83uEO-system-createdAt","name":"Created At","apiIdentifier":"createdAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-et0nEiCU65aA","createdDate":1690796656167,"includeTime":true,"default":null},"internalWritable":true},"ModelField-c_7qr6VKCBhp-system-updatedAt":{"fieldType":"DateTime","key":"ModelField-c_7qr6VKCBhp-system-updatedAt","name":"Updated At","apiIdentifier":"updatedAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-itt0jCMO3CW4","createdDate":1690796656167,"includeTime":true,"default":null},"internalWritable":true},"ModelField--m7-ho7n807U":{"fieldType":"String","key":"ModelField--m7-ho7n807U","name":"token","apiIdentifier":"token","configuration":{"type":"StringConfig","key":"StringConfig-rciexfPBSrqC","createdDate":1690814969474,"default":null},"internalWritable":true},"ModelField-vGN28iGnwoFx":{"fieldType":"BelongsTo","key":"ModelField-vGN28iGnwoFx","name":"shopId","apiIdentifier":"shopId","configuration":{"type":"BelongsToConfig","key":"BelongsToConfig-3a-BTI5zvbYN","createdDate":1690815053575,"relatedModelKey":"DataModel-Shopify-Shop"},"internalWritable":true}},"graphqlTypeName":"Token"},"Test":{"key":"DataModel-9M4ttIs6cwlh","name":"test","apiIdentifier":"test","fields":{"ModelField-8XqsIPSGyMmz-system-id":{"fieldType":"ID","key":"ModelField-8XqsIPSGyMmz-system-id","name":"ID","apiIdentifier":"id","configuration":{"type":"IDConfig","key":"IDConfig-05BcUXSzvqbc","createdDate":1690865916466},"internalWritable":true},"ModelField-tFokVdNxkOd8-system-createdAt":{"fieldType":"DateTime","key":"ModelField-tFokVdNxkOd8-system-createdAt","name":"Created At","apiIdentifier":"createdAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-sLjp7BpzfRBE","createdDate":1690865916467,"includeTime":true,"default":null},"internalWritable":true},"ModelField-QErShoCr7pqD-system-updatedAt":{"fieldType":"DateTime","key":"ModelField-QErShoCr7pqD-system-updatedAt","name":"Updated At","apiIdentifier":"updatedAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-3L37U2kI3I29","createdDate":1690865916468,"includeTime":true,"default":null},"internalWritable":true},"ModelField-lwyjX0H1r0he":{"fieldType":"String","key":"ModelField-lwyjX0H1r0he","name":"token","apiIdentifier":"token","configuration":{"type":"StringConfig","key":"StringConfig-6MVP0i4jhcx1","createdDate":1690865922214,"default":null},"internalWritable":true}},"graphqlTypeName":"Test"}};

/**
 * Internal variable to map model apiIdentifier to GraphQL typename in modelsMap.
 * @internal
 */
export const modelListIndex: Record<string, string> = {"api:session":"Session","api:shopifyGdprRequest":"ShopifyGdprRequest","api:shopifyProduct":"ShopifyProduct","api:shopifyShop":"ShopifyShop","api:shopifySync":"ShopifySync","api:token":"Token","api:test":"Test"};
