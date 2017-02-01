An auth protected static server using [Stormpath](https://stormpath.com/) and Heroku.


    heroku apps:create [YOUR APP NAME]
    heroku addons:create stormpath
    heroku config | grep STORMPATH
    npm install

1. Check heroku page for stormpath.
1. (To test locally) From there, copy keys and export in terminal.
1. Place protected files in `/private` directory
1. Commit and push to Heroku.
