import {createPool} from 'mysql2/promise';

const example= createPool({
    host:'localhost',
    user: 'root',
    password:'',
    port:'you port',
    database: 'your db',
});    
export{example};