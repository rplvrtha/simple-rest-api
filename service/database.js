const dotenv = require("dotenv")
const mysql2 = require("mysql2")
dotenv.config()
const db = mysql2.createPool(
    {
        host: process.env.HOSTNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        user: process.env.USERNAME,
    }
)

const query = (sql, parameter) => {
    return new Promise((resolve, reject) => {
        db.query(sql, parameter, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

const create = async (tabel, data) => {
    const sql = `INSERT INTO ${tabel} SET ?`
    
    return await query(sql, [data])
}

const getAll = async (tabel) => {
    const sql = `SELECT * FROM ${tabel}`
    return await query(sql)
}

const getById = async (tabel, id) => {
    const sql = `SELECT * FROM ${tabel} where id = ?`
    return await query(sql, id)
}

const update = async (tabel, id, data) => {
    const sql = `UPDATE ${tabel} SET ? WHERE id = ?`
    return await query(sql, [data, id])
}

const remove = async (tabel, id) => {
    const sql = `DELETE FROM ${tabel} where id = ?`
    return await query(sql, [id])
}
module.exports = { create, getAll, getById, update, remove }