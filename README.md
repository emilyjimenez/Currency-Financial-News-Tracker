# _Currency Financial News Tracker_

## _Independent Project - Epicodus JS Week 4_

#### By _Emily Wells Jiménez

###### _12.15.2017_

## Write Up/Final Thoughts

_For this project I had my own free reign and decided to focus on API call backs since I missed a lot of class that week and plan on using an API for my final group project. Also, since I am on the back end track, I wanted to play with as much design as I could. I spent 6 hours on Friday building the main components of the app, and getting the APIs to work. I spent the most time on the exchange rate ticker and making the API calls work. I was happy I got the ticker to work, look pretty, display results, and was happy I got the API callback to retrieve the information I needed._

_Unfortunately, I bit off WAY MORE than I could chew. There was no way I could include 3 separate APIs in my app with only 8 hours of work, so I stopped once I got curencylayer to work._

Things I should work on/be thinking about in coming weeks:
1. Being able to scope work and know how long it will take
2. Knowing the proper lingo for terms, methods etc
3. Write a stack overflow question
4. Learn another coding language
5. Find more internship opportunities

Priorities for end of course/after Epicodus:
1. Stay on top of .NET course, no more absent days, be on time everyday
2. Try to get adequate sleep
3. Freshen up on terminology and whiteboarding
4. Clean up GitHub page and projects
5. Take the PHP for Wordpress course offered by Treehouse

## Description

_Web app that makes calls to currencylayer API and News API to display currency exchange rates for 168 worldwide currencies including cryptocurrency. Easily find news articles related to currency exchange markets, stock market info, and other financial topics._



## Specs

| Behavior  |  Input | Output  |
|---|---|---|
| It will display live financial ticker information | displays foreign exchange information for 1 USD  | ex: USD/JPY 112.6689  |
| It will display live cryptocurrency info | displays cyrptocurrency rates for 1 USD  | ex: USD/BTC 0.00005  |
| It will allow user to search for an exchange rate | user selects foreign currency from form, results displayed  | ex: USD/CAD 1.28577  |
| It will allow user to search for a cryptocurrency rate | displays foreign exchange information for 1 USD  | ex: USD/JPY 112.6689  |
| It will show news info related to the user selected currency | displays foreign exchange/cryptocurrency news related articles after user submits form  | NA |







## Setup/Installation Requirements

1. _Clone [Currency-Financial-News-Tracker](https://github.com/emilyjimenez/Currency-Financial-News-Tracker) from Github in the terminal of your choice._

2. _Install [node.js](https://nodejs.org/en/) if you do not have it installed._

3. _To run the application and view in your preferred browser of choice, run the following commands once you're in the project directory in the terminal. 'npm install', 'bower install', 'gulp build', and 'gulp serve'._

## Known Bugs

_Cannot load free stock chart ticker... When the script for the ticker was active, I received this error: `API call error: Request header field X-Requested-With is not allowed by Access-Control-Allow-Headers in preflight response.` Still looking for work around..._

## Technologies Used

* Atom
* NPM
* Gulp
* Bower
* Babel
* JavaScript
* JQuery
* Google Chrome
* [currencylayer API](https://currencylayer.com)
* [Coin Market Cap API](https://coinmarketcap.com)
* [newsAPI](https://newsapi.org/)
* [Free Stock Chart - Ticker](http://widgets.freestockcharts.com/)
* Postman

### License

This software is licensed under the MIT license.

Copyright (c) 2017 Emily Wells Jimenez, [EWJ Consulting](http://emilyjimenez.com/)
