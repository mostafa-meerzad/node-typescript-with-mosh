import express from "express"

const app: express.Application = express()

app.get("/", (req, res)=>{

    res.send("Hello")
})

app.listen(3000,() => console.log(`server listening on port: 3000`))