import { defineConfig } from 'vite';

import productionConfig from './vite.config';

// https://vitejs.dev/config/
export default defineConfig({
    ...productionConfig,
    mode: 'development',
    build: {
        ...productionConfig.build,
        sourcemap: 'inline',
        rollupOptions: {
            ...productionConfig.build?.rollupOptions,
            output: {
                ...productionConfig.build?.rollupOptions?.output,
                entryFileNames: 'js/[name].[hash].js',
                chunkFileNames: 'js/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash].[ext]'
            }
        }
    }
});
