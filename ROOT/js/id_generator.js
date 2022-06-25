/* Script to randomly generate numeric IDs for Students */
const mysql = require('mysql');
/* Connect to local database */
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Your Own Special Password',
    database: 'stemdb'
  });


  /* Setting a "test" name to input*/

  const student = {first_name: 'Meghan', 
                    last_name: 'Harris'} 

 /* Pulling first and last name out of the student dictionary */ 
    let first_name = student["first_name"]
    let last_name = student["last_name"]
    
/* Custom function to convert letters from name into numbers, then randomize those numbers into a 9 digit string value */
    function letterConverter(first_name , last_name){

        const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                        "n","o","p","q","r","s","t","u","v","w","x","y","z"]
        i = 0;
        let fullnameupper = first_name + last_name;
        let fullname = fullnameupper.toLowerCase();
        let nameLength = fullname.length;
        let id = "";
        let nameArray = fullname.split("");
        
        for (nameLength > 0; i < nameLength; i++){
            id += alphabet.indexOf(nameArray[i]);
        }
            let idSplit = id.split("");
        j = 0
        let finalid = "";
            for (id.length > 0; j < id.length; j++){
        finalid += Math.floor(Math.random() * id[j] * 100);
            }
        return finalid.slice(0,8);
        }

/* Appending the student dictionary with the newly made ID number */
student["student_ID"] = letterConverter(first_name,last_name);

/* Adding the name and randomly created ID into the database */
con.query('INSERT INTO student_id_table SET ?', student, (err, res) => {
  if(err) throw err;

  console.log('Database Updated Successfully!');
}); 