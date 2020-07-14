const presets = [
    [
        '@babel/preset-env',
        {
            bugfixes: true,
            loose: true,
            targets: {
                esmodules: true,
            },
        },
    ],
    '@babel/preset-react',
    [
        '@babel/typescript',
        {
            isTSX: true,
            allExtensions: true,
        },
    ],
];

module.exports = {
    presets,
    plugins: [
        [
            'babel-plugin-module-resolver',
            {
                root: ['./src/Components'],
                extensions: ['.ts', '.tsx', '.js'],
            },
        ],
        [
            '@babel/plugin-transform-runtime',
            {
                helpers: false,
                regenerator: true,
                useESModules: true,
            },
        ],
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        ['@babel/proposal-class-properties', { loose: true }],
    ],
};
