module.exports = {
  get : function(campaign) {
    const campaignData = {
      'Affinity-Opt-In' : {
        OSDI_record_submissions_helper : 'https://actionnetwork.org/api/v2/forms/0a832fed-02cb-4fba-a0ce-e5ce2913588b/submissions',
        thank_you_path : 'https://actionnetwork.org/forms/throw-some-sand-in-the-gears-of-the-right-wing-machine/thankyou',
        HTML_form_path : 'https://actionnetwork.org/forms/throw-some-sand-in-the-gears-of-the-right-wing-machine'
      }
    }
    if(typeof campaignData[campaign] == 'undefined') return false
    return campaignData[campaign]
    }
}
