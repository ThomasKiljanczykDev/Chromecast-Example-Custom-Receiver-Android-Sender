/*
 * Created by Thomas Kiljanczyk on 24/11/2024, 14:33
 * Copyright (c) 2024 . All rights reserved.
 * Last modified 24/11/2024, 14:30
 */
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    mode: 'production',
    plugins: [],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: false,
        rollupOptions: {
            output: {
                entryFileNames: 'js/script.[hash].js',
                chunkFileNames: 'js/bundle.[hash].js',
                assetFileNames: 'assets/[hash].[ext]'
            }
        }
    }
});
