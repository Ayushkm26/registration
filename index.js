const express =require("express")
const zod=require("zod")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
const users=[];

const schema = zod.object({
    "fname":zod.string(),
    "lname":zod.string(),
    "age":zod.string(),
    "email":zod.string().email(),
    "phone":zod.string().min(10),
    "bloodgroup":zod.string(),
    "sublocality":zod.string(),
    "district":zod.string(),
    "state":zod.string(),
    "country":zod.string()

})

app.post("/form",(req ,res)=>{
   
    const response =schema.safeParse(req.body)
    
    if(!response.success){
      res.status(411 ).json({
           msg :"wrong input"
           
      })
      console.log(response.error)
      return
    }
 users.push(response.data)
 console.log(users)

})
app.get("/show",(req,res)=>{
    res.send(users);
})

app.listen(3000,()=>{
    console.log("server connected");
})