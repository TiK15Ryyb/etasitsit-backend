module.exports = {
    'env': {
        'browser': false,
        'node': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'ignore'
        }],
        'no-console': [
            'warn'
        ],
        'no-trailing-spaces': [
            'error'
        ],
        'eol-last': [
            'error'
        ],
        'prefer-const': [
            'error'
        ],
        'no-param-reassign': [
            'error',
            {
                'props': true
            }
        ],
        'no-lonely-if': [
            'error'
        ],
        'no-throw-literal': [
            'error'
        ],
    }
};