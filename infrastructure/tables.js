class Tables {
    init(connection) {
        this.connection = connection
        this.createService()
    }

    createService() {
        const sql = 'CREATE TABLE IF NOT EXISTS services( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, client VARCHAR(100) NOT NULL, animal VARCHAR(20), service VARCHAR(40) NOT NULL, status VARCHAR(20) NOT NULL, observations TEXT)'
        
        this.connection.query(sql, (error) => {
            if(error) {
                console.log(error)
            } else {
                console.log('Services table are successfully created')
            }
        })
    }
}

module.exports = new Tables