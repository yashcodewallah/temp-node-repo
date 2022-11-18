//this is sync
// const {readFileSync, writeFileSync}=require('fs')

// const first=readFileSync('./first.txt','utf8')
// const second=readFileSync('./second.txt','utf8')

// writeFileSync(
//     './result-sync.txt',
//     `here is the result:${first} , ${second}`,
//     {flag: 'a'}    //this flag is used because to add the txt of first and second again and again...
// )

//now this is async..
const {readFile, writeFile}=require('fs');

readFile('./first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
    return
    }

const first=result;
readFile('./second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
    return
    }
   const second=result;
   writeFile('./result-async.txt',`here is the result:${first} , ${second}`,(err,result)=>{   //if the result-async.txt is not there then it will automatically make that.
if(err){
    console.log(err);
return
}
console.log(result)
   })
})
})
