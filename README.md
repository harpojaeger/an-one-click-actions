# an-one-click-actions [![Build Status](https://travis-ci.org/harpojaeger/an-one-click-actions.svg?branch=master)](https://travis-ci.org/harpojaeger/an-one-click-actions)
Enable Action Network users to take actions with a single click from an email.
Use it by linking to /actions/:slug (configured in campaigns.js) with an 'email' URL parameter.  You can use AN's email 'clips' to embed each activist's email address in links in the email body.

##Rad features
* No local storage – all data lives in your AN instance, just as if activists had filled out the form by hand.
* Host as many one-click actions as you like at a time (configured in campaigns.js)
* No authorization required (uses AN's OSDI record submission helper for unauthenticated POST)
* Activists never see a page on your site – uses 302 redirects to send them either to the after-action "thank you" page or the regular old action page (if no or a malformed email was present)
