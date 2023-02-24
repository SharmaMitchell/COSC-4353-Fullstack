//create a variable the stores a reference to the database
let estimates

export default class EstimatesDAO{
    //define method to initially connect to database
        //called as soon as server starts
        //get reference to database
    static async injectDB(conn){
        //if already have a reference
        if (estimates){
            return
        }
        //if not, try to connect
        try {
            estimates = await conn.db(process.env.ESTIMATES_NS).collection("estimates")
        }
        catch(err) {
            console.error(`Unable to establish connection to database in estimatesDAO: ${err}`)
        }
    }
}