console.log(__dirname);

const fs = require('fs');
const path = require('path');


const femalePath = path.join(__dirname,'1800');
const malePath = path.join(__dirname,'2000');
console.log(femalePath);
console.log(malePath);

fs.readdir(femalePath, (err, files) => {
if (err){
    console.log(err);
    return;
}
    files.forEach(file=>{
        console.log(file);
        const path1 = path.join(femalePath, file);
        const path2 = path.join(malePath, file);
        fs.readFile(path1, (err1, data) => {
            if(err1){
                console.log(err1);
                return;
            }
            const datafile = JSON.parse(data)
            console.log(datafile);
            if(datafile.gender === 'male'){
                fs.rename(path1, path2, err2 =>{
                    if(err2){
                        console.log(err2);
                        return;
                    }
                })
            }


        })
    })
});
