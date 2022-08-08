import mysql from 'mysql'
import config from '@/config'


const db=mysql.createPool({
    host:config.host,
    user:config.user,
    password:config.password,
    database:config.database 
})
export default db