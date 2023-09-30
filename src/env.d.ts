/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly API_URI: string;
 
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}