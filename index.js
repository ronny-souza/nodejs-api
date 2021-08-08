const customExpress = require('./config/customExpress')
const connection = require('./infrastructure/connection')

connection.connect(error => {
    if(error) {
        console.log(error)
    } else {
        console.log('MySQL is sucessfully connected')
        const app = customExpress()
        app.listen(3000, () => {
            console.log("Server is sucessfully connected on port 3000")
        })
    }
})


