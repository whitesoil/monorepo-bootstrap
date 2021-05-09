module.exports = {
    extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint', 'prettier', 'import'],
    parser: '@typescript-eslint/parser',
    rules: {
        indent: ['error', 4],
        'import/extensions': 0,
        'max-len': [
            2,
            {
                code: 150,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreComments: true,
            },
        ],
        'object-curly-newline': 0,
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
        "@typescript-eslint/explicit-module-boundary-types": 0,
        'no-console': ['error', { allow: ['warn', 'error'] }],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-var-requires': 0,
        'operator-linebreak': ['error', 'after'],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
            },
        },
    },
};
