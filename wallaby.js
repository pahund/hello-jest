module.exports = wallaby => ({
    files: [
        '**/*.js',
        '!**/*.test.js',
        '!node_modules/**',
        '!wallaby.js'
    ],

    tests: [
        '**/*.test.js',
        '!node_modules/**'
    ],

    env: {
        type: 'node',
        runner: 'node'
    },

    compilers: {
        '**/*.js': wallaby.compilers.babel()
    },

    testFramework: 'jest'
});
