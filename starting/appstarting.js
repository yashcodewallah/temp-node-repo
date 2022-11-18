const names=require('./starting/modules.js');
// const sayhi=require('./2-sayhi');

const fromsayhi  = require("./starting/2-sayhi");


const {john,peter}=names;
fromsayhi.sayhi(john);
fromsayhi.sayhi(peter)
fromsayhi.age(12)


// const data=require('./3-alternateFlavors');
// const dataArray=data.items;
// console.log(dataArray)

// require('./4-mindGrenade')   //when we export a file... it gets automatically called... we dont have to give it a name! or a reference variable