module.exports = {
    extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint', 'prettier', 'import'],
    parser: '@typescript-eslint/parser',
    rules: {
        indent: ['error', 4],
        'max-len': [
            2,
            {
                code: 150,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreComments: true,
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts'],
            },
        },
    },
};
