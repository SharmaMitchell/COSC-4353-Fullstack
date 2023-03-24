import EstimatesDAO from "../dao/estimatesDAO.js"

export default class EstimatesController {
    static async apiUpdateEstimates(req, res, next) {
        try {
            const client_id = req.params.clientID || ""
            const estimateDate = req.body.estimate_date
            const gallonsRequested = req.body.gallons_requested
            const deliveryAddress = req.body.address
            const deliveryDate = req.body.delivery_date
            const suggestedPrice = req.body.suggested_price
            const quote = req.body.quote

            const EstimatesResponse = await EstimatesDAO.updateEstimates(
                client_id,
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


  static async apiCalculateEstimate(req, res) {
    try {
      // Get input data from the request
      const currentPrice = 1.50
      const gallonsRequested = req.body.gallons_requested
      const profitFactor = .10

      const inState = req.body.in_state

      let locationFactor
      
      let historyFactor
      let gallonsFactor

      if (gallonsRequested > 1000){
        gallonsFactor = .02
      } else{
        gallonsFactor = .03
      }

      
      
      // Calculate the estimate
      const margin = currentPrice + (currentPrice * (locationFactor - historyFactor + gallonsFactor + profitFactor))
      const suggested_price = margin.toFixed(2)
      const amount_unrounded = gallonsRequested * margin
      const Total_amount_due = amount_unrounded.toFixed(2)

      // Send the estimate as a response 
      res.json({ suggested_price, Total_amount_due });

    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  }
}
// calculation formula
// Margin =  Current Price * (Location Factor - Rate History Factor + Gallons Requested Factor + Company Profit Factor)
// Margin => (.02 - .01 + .02 + .1) * 1.50 = .195
// Suggested Price/gallon => 1.50 + .195 = $1.695
// Total Amount Due => 1500 * 1.695 = $2542.50