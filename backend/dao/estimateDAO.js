import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let estimate

export default class EstimateDAO {
    static async injectDB(conn) {
        if(estimate){
            return
        }
        try {
            estimate = await conn.db(process.env.ESTIMATE_NS).collection("estimate")
        } catch (e) {
            console.error(`Unable to establish collection handles in estimateDAO: ${e}`)
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
            return await estimate.insertOne(estimateDoc)
        } catch (e) {
            console.error(`Unable to post estimate: ${e}`)
            return { error: e }
        }
    }
}

