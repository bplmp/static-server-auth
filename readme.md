A auth protected static server using [Stormpath](https://stormpath.com/).

Clone this repo.

    heroku apps:create [YOUR APP NAME]
    heroku addons:create stormpath
    heroku config | grep STORMPATH
    npm install express express-stormpath --save

1. Check heroku page for stormpath.
1. (To test locally) From there, copy keys and export in terminal.
1. Place protected files in /private directory


    git add .
    git commit -m "initial commit"
    git push heroku master
