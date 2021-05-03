module.exports = {
    apps: [{
        name: "app",
        script: "./server.js",
        watch: true,
        env: {
            NODE_ENV: "development"
        },
        env_test: {
            NODE_ENV: "test",
        },
        env_staging: {
            NODE_ENV: "staging",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}
