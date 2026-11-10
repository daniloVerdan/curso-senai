import mysql from 'mysql2/promise'

export const db = await mysql.createConnection({
    host: 'localhost',
    port: 3309,
    user: 'root',
    password: '123',
    database: 'my-data-base',
    waitForConnection: true,
    connectionLimit: 10,
    queueLimit: 0
})

console.log("conectado ao mysql!")