// @ts-check
import tseslint from 'typescript-eslint';

export default tseslint.config({
    rules: {
        'consistent-return': 'error',
        'no-var': 'error',
        'no-confusing-arrow': 'error',
        'no-duplicate-imports': 'error',
        'no-extra-label': 'error',
        'no-empty-function': 'error',
        'no-empty-static-block': 'error',
        'no-invalid-this': 'error',
        'no-lone-blocks': 'error',
        'no-nested-ternary': 'error',
        'no-return-await': 'error',
        'no-use-before-define': 'error',
        'no-useless-rename': 'error',
        'no-unused-private-class-members': 'error',
        'prefer-template': 'error',
        'no-useless-return': 'error',
        'no-console': [
            'error',
            {
                allow: ['warn', 'error', 'debug', 'trace']
            }
        ]
    }
});
