var express = require('express')
   ,router = express.Router()
   ,campaigns = require('./campaigns')
   ,request = require('superagent')
   ,validator = require ('validator')
router.get('/', function(req, res){
  res.status(400).send('No campaign slug provided.')
})
router.get('/:slug', function(req, res) {
  // Search for the campaign
  var campaign = campaigns.get(req.params.slug)
  if(campaign) {
    // If email is missing or malformed, just send the user straight to the HTML form submission page.
    debugger
    if(req.query.email && validator.isEmail(req.query.email)) {
      // POST to the OSDI record submission helper endpoint
      request.post(campaign.OSDI_record_submissions_helper)
      .send(
        {
          'person' : {
            'email_addresses':[
              {
                'address' : req.query.email
              }
            ]
          },
          'triggers' : {
            'autoresponse' : {
              'enabled' : true
            }
          }
        }
      )
      .end(
        function(err, result) {
          debugger
          var redirect_path = campaign.thank_you_path
          if (err || !result.ok) {
            console.error('OSDI POST failed: ', err)
            redirect_path = campaign.HTML_form_path
          }
          res.redirect(redirect_path)
        }
      )
    } else {
      res.redirect(campaign.HTML_form_path)
    }
  } else {
    // If no campaign was found
    res.status(404).send('Action not found.')
    console.error(res)
  }

})

module.exports = router
