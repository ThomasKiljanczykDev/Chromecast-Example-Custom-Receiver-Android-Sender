/*
 * Created by Thomas Kiljanczyk on 15/01/2025, 17:30
 * Copyright (c) 2025 . All rights reserved.
 * Last modified 15/01/2025, 17:30
 */

/* eslint-disable spaced-comment */

/// <reference types="vite/client" />

// TODO: remove suppression after adding fields to the interface
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImportMetaEnv {
    // Put your env variables here
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
