import mongodb from "mongodb"

let estimates

export default class estimatesDAO {
    static async injectDB(conn) {
        if(estimates){
            return
        }
        try {
            estimates = await conn.db(process.env.estimates_NS).collection("estimates")
        } catch (e) {
            console.error(`Unable to establish collection handles in estimatesDAO: ${e}`)
        }
    }
    // Add estimate to database
    static async addEstimate(user, estimateDate, gallons, address, deliveryDate, suggestedPrice, quote) {
        try {
            const estimateDoc = {
                user: user,
                estimateDate: estimateDate,
                gallonsRequested: gallons,
                deliveryAddress: address,
                deliveryDate: deliveryDate,
                suggestedPrice: suggestedPrice,
                quote: quote
            }
            return await estimates.insertOne(estimateDoc)
        } catch (e) {
            console.error(`Unable to post estimate: ${e}`)
            return { error: e }
        }
    }
    static async getEstimatesForClient(clientId) {
        try {
          // Find all estimates in the database for the specified client ID
          const cursor = await estimates.find({ client_id: ObjectId(clientId) })
          // Convert the cursor to an array of estimates
          const estimatesArray = await cursor.toArray()
          // Return the array of estimates
          return estimatesArray
        } catch (e) {
          console.error(`Unable to get estimates for client: ${e}`)
          return { error: e }
        }
      }
}

