/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  PROD: boolean;
  DEV: boolean;

  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_VERSION: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
