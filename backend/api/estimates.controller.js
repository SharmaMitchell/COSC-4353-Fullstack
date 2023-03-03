import EstimatesDAO from "../dao/estimatesDAO.js"

export default class EstimatesController {
    static async apiUpdateEstimates(req, res, next) {
        try {
            const user = req.body.client_ID
            const estimateDate = req.body.estimate_date
            const gallonsRequested = req.body.gallons_requested
            const deliveryAddress = req.body.address
            const deliveryDate = req.body.delivery_date
            const suggestedPrice = req.body.suggested_price
            const quote = req.body.quote

            const EstimatesResponse = await EstimatesDAO.updateEstimates(
                user,
                estimateDate,
                gallonsRequested,
                deliveryAddress,
                deliveryDate,
                suggestedPrice,
                quote
            )
            res.json({ status: "success" })
        } 
        catch (err) {
            res.status(500).json({ error: err.message })    
        }
  }
  static async apiGetEstimates(req, res) {

    let clientId = req.params.clientID || ""

    const estimatesList = await EstimatesDAO.getEstimates(clientId)
    console.log(estimatesList)

    let response = {
      estimates: estimatesList,
      client_id: clientId,
    }
    res.json(response)
  }
}