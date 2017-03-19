module.exports = {
  get : function(campaign) {
    const campaignData = {
      'Affinity-Opt-In' : {
        thankYouPath : 'https://actionnetwork.org/forms/throw-some-sand-in-the-gears-of-the-right-wing-machine/thankyou'
      }
    }
    if(typeof campaignData[campaign] == 'undefined') return false
    return campaignData[campaign]
    }
}
