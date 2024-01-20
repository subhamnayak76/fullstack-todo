const express = require("express")
const app = express()
const {todo} = require("./db")
const {createTodo , updateTodo } = require("./types.js")
const cors = require("cors");
app.use(cors())

app.use(express.json())

app.post("/todos",(req,res) => {
    const payload = req.body
    const checkpaylod = createTodo.safeParse(payload)
    if(!checkpaylod.success){
        res.status(411).json({
            msg : "you send the wrong entries"
        })
        return
    }
    todo.create({
        title : payload.title,
        description : payload.description,
        complete : false
    })
    .then(()=>{
        res.json({
            msg : "Todo database is created"
        })
    })
    .catch(() =>{
        res.json({
            msg:"Todo is not created"
        })
    })

});

    app.get('/view',(req,res) =>{
        todo.find({}).then((response)=>{
            res.json({
                response
            })
        })
    })
    app.put('/completed',(req,res) => {
        const updatepayload = req.body
        const checkpaylod = updateTodo.safeParse(updatepayload)
        if(!checkpaylod.success){
            res.status(411).json({
                msg : "you given the wrong input"
            })
            return;
        }
        todo.updateOne({
            _id : req.body.id
        },{
            complete  : true
        })
        .then(() =>{
            res.json({
                msg : "todo marked in completed"
            })
            
        })
    })

app.listen(3000,()=>{
    console.log("serving at port 3000")
})