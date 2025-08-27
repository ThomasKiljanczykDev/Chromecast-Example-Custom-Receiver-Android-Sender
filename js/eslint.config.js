import tseslint from 'typescript-eslint';

import { tsEslintConfig } from '@thomas-kiljanczyk-dev/eslint-config';

export default tseslint.config(...tsEslintConfig, {
    ignores: [
        '**/.yarn/',
        '**/dist*/',
        '**/build/',
        '**/.vscode/',
        '**/.cache/',
        '**/cdk.out/',
        '**/prettier.config.js',
        '**/eslint.config.js'
    ]
});
