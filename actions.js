var express = require('express')
   ,router = express.Router()
   ,campaigns = require('./campaigns')
router.get('/', function(req, res){
  res.status(400).send('No campaign slug provided.')
})
router.get('/:slug', function(req, res) {
  // Search for the campaign
  var campaign = campaigns.get(req.params.slug)
  if(campaign) {
    // If no email address was provided, just send the user straight to the HTML form submission page.
    if(!req.query.email) res.redirect(campaign.HTML_form_path)

    // Do an OSDI
  } else {
    // If no campaign was found
    res.status(404).send('Action not found.')
  }

})

module.exports = router
