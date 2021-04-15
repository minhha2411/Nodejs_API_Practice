const pool = require("../../config/database");

module.exports ={
    create: (data,callBack) => {
      
        pool.query(
            `insert into user(firstname, lastname, email, password)
                    values(?,?,?,?)`,
        [
            data.first_name,
            data.last_name,
            data.email,
            data.password
        ],
        (error, results, fields) => {
            if(error){
                return callBack(error);
            }
            return callBack(null, results);
        }

        )
    },
    getUserByUserEmail: (email,callBack) => {
        pool.query(
            `select * from user where email = ?`,
            [email],
            (error, results, fields) => {
                if(error){
                    callBack(error);
                }
                
                return callBack(null,results[0]);
            }
        )
    },
    getUserByUserId: (id, callBack) => {
        pool.query(
          `select id,firstname,lastname,email from user where id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      getUsers: callBack => {
        pool.query(
          `select id,firstname,lastname,email from user`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      updateUser: (data, callBack) => {
        pool.query(
          `update user set firstname=?, lastname=?, email=?, password=? where id = ?`,
          [
            data.firstname,
            data.lastname,
            data.email,
            data.password,
            data.id
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      deleteUser: (data, callBack) => {
        pool.query(
          `delete from user where id = ?`,
          [data.id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      }
}



