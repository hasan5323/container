const { Pool } = require("pg")

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'songLabel',
    port: 5432,
    idleTimeoutMillis: 500
})

module.exports = pool