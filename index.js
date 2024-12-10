const express = require("express");
const app=express();
const users=[{
    name :"Ayush",
    kidneys:[{
        healty:false
    }]

}];
app.use(express.json());
app.get("/",function(req,res){
   const jhonkidney=users[0].kidneys ;
   const numberofKidneys=jhonkidney.length;
   let numberofhealtykidney=0;
   for(let i=0;i<numberofKidneys;i++){
    if(jhonkidney[i].healty){
        numberofhealtykidney ++;
    }
   }
   let numberofunhealtykidney=numberofKidneys-numberofhealtykidney;
   res.json({
    numberofKidneys,
    numberofhealtykidney,
    numberofunhealtykidney
   })
})
   app.post("/",function(req,res){
    const ishealty=req.body.ishealty;
    users[0].kidneys.push({
       healty:ishealty 
    })
    res.json({
        msg:"done"
    })
   })
   app.put("/",function(req,res){
     for(let i=0;i<users[0].kidneys.length;i++){
         users[0].kidneys[i].healty=true;
     }
   })
   app.delete("/",function(req,res){
      const newKidneys=[];
          
   })
  
app.listen(3001,()=>{
    console.log("port found");
})