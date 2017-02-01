git init
npm init
heroku apps:create spauthtest
heroku addons:create stormpath
heroku config | grep STORMPATH
npm install express express-stormpath --save
# check heroku page for stormpath
