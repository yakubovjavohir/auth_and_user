const express = require("express")
const cors = require("cors")
const {config} = require("./config/config")
const {authSchema} = require("./config/schema")
const {validate} = require("./lib/validate")
validate(authSchema, config)
const {router} = require("./modules/module.routes")
const {mongoConnect} = require("./lib/mongo")




const app = express()
app.use(cors())
app.use(express.json())
app.use("/api", router)


app.use((err, req, res, next) => {
    console.log("error");
    
    res.status(err.statusCode || 500).json({ message: err.message });
});




app.listen(config.PORT, ()=>{
    console.log("http://localhost:" + config.PORT);
})