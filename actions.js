var express = require('express')
   ,router = express.Router()
   ,campaigns = require('./campaigns')
router.get('/', function(req, res){
  res.status(400).send('No campaign slug provided.')
})
router.get('/:slug', function(req, res) {
  var campaign = campaigns.get(req.params.slug)
  if(campaign) {
    if(!req.query.email) res.redirect(campaign.thankYouPath)
  } else {
    res.status(404).send('Action not found.')
  }

})

module.exports = router
