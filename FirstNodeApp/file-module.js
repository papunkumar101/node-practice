// read, write,open, delete 

const fs = require('fs');

let content = "Here is our content for new file..."
fs.writeFile('text.txt',content,(err)=>{
    let error = err ?? 'saved';
    console.log(error);
});


fs.appendFile('text.txt','\n This is Append Text...',(err)=>{
    let error = err ?? 'Append Saved';
    console.log(error);
});

fs.readFile('text.txt',(error,data)=>{
    if(error){
      console.log(error);
    }else{
        console.log(data.toString());
    }
});

fs.unlink('text.txt',(err)=>{
    let error = err ?? 'Deleted';
    console.log(error);
});

console.log('End of line');