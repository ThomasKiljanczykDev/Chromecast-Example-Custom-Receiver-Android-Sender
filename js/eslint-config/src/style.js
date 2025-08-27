// @ts-check
import tseslint from 'typescript-eslint';

export default tseslint.config({
    rules: {
        camelcase: ['warn', { properties: 'always' }],
        curly: 'warn',
        'func-style': ['warn', 'declaration'],
        'new-cap': ['warn', { newIsCap: true }],
        'spaced-comment': ['warn', 'always']
    }
});
