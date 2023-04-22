import EstimatesDAO from "../dao/estimatesDAO.js";

export default class EstimatesController {
  static async apiUpdateEstimates(req, res, next) {
    try {
      const client_id = req.params.clientID || "";
      const estimateDate = req.body.estimate_date;
      const gallonsRequested = req.body.gallons_requested;
      const deliveryAddress = req.body.address;
      const deliveryDate = req.body.delivery_date;
      const suggestedPrice = req.body.suggested_price;
      const quote = req.body.quote;

      const EstimatesResponse = await EstimatesDAO.addEstimate(
        client_id,
        estimateDate,
        gallonsRequested,
        deliveryAddress,
        deliveryDate,
        suggestedPrice,
        quote
      );
      res.json({ status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  static async apiGetEstimates(req, res) {
    let clientId = req.params.clientID || "";

    const estimatesList = await EstimatesDAO.getEstimates(clientId);
    console.log(estimatesList);

    let response = {
      estimates: estimatesList,
      client_id: clientId,
    };
    res.json(response);
  }

  static async apiCalculateEstimate(req, res) {
    try {
      // Get input data from the request
      const currentPrice = 1.5;
      const gallonsRequested = req.body.gallons;
      const profitFactor = 0.1;
      if (gallonsRequested.length > 50) {
        res.status(500).json({ error: "Invalid gallons value" });
      }

      const inState = req.body.in_state;
      const locationFactor = inState ? 0.02 : 0.04;
      const historyFactor = req.body.rate_history ? 0.01 : 0;
      const gallonsFactor = gallonsRequested > 1000 ? 0.02 : 0.03;

      if (gallonsRequested == "" || isNaN(gallonsRequested)) {
        res.status(500).json({ error: "Invalid gallons requested value" });
      } else {
        // Calculate the estimate
        const margin =
          currentPrice +
          currentPrice *
            (locationFactor - historyFactor + gallonsFactor + profitFactor);
        const suggested_price = margin.toFixed(2);
        const amount_unrounded = gallonsRequested * margin;
        const total_amount_due = amount_unrounded.toFixed(2);

        // Send the estimate as a response
        console.log(`Suggested Price: ${suggested_price}`);
        console.log(`Total Amount Due: ${total_amount_due}`);
        console.log(`History Factor: ${historyFactor}`);
        res.json({ suggested_price, total_amount_due });
      }
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
