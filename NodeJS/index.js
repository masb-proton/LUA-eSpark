console.log("Hello World! START")

const express = require('express')
const app = express()
const port = process.env.PORT || 1122;
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

var bodyParser = require('body-parser')
const mongoose = require('mongoose')

const swaggerOptions = {
    swaggerDefinition:{
        info:{
            version: "1.0.0",
            title: 'Student API',
            description: "Student API Information System",
            constact:{
                name: "Amazing Developer"
            },
            servers: ["http://localhost:1122"]
        }
    },
    apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);



mongoose.set("strictQuery", false);
// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/my_database";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}


app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerDocs),bodyParser.urlencoded({ extended: false }),bodyParser.json())

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())

const studentsList = [{name:"student1", deparment:"Operations"},
                      {name:"student2", deparment:"HumanResources"},
                      {name:"student3", deparment:"Administration"}]

                                          

app.post("/pages",(req,res) => {
    console.log(req.body)

    res.json({ message: "Posting successfully ok!" })

})

app.put("/pages:id",(req,res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.json({ message: `Updating page identiy ${req.params.id}` })
})

app.delete("/pages:id",(req,res) => {
    console.log(req.params.id)
    res.json({ message: `deleting page identiy ${req.params.id}` })
})

// Routes
/**
*  @swagger
*   /pages:
*    get:
*       description: Use to request all students
*       responses:
*           '200':
*           description: A successful response 
*/
app.get("/pages",(req,res) => {
//console.log(req)
//res.send("Get response!")
//res.json(studentsList)
res.status(200).send("studentsList");
//res.send("studentsList response");
})

/**
 * @swagger
 * /pages:
 *    put:
 *      description: Use to return all students
 *    parameters:
 *      - name: students
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */
 app.put("/pages", (req, res) => {
    res.status(200).send("Successfully updated pagezz");
  });
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

  
app.get("/pages/:idzz",(req,res) => {console.log(req)
    //res.send(`Get response! to specific id at ${req.params.idzz}`)
    res.json(studentsList[parseInt(req.params.idzz)-1])
    })
    
console.log("Hello World! END")

