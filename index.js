const puppeteer = require('puppeteer');
const twitter = require('./twitter');

(async () => {
  
  const USERNAME = '';
  const PASSWORD = '';
  
  await twitter.initialize();
  
  await twitter.getTweets('altumcode', 50);
  
  // await twitter.login(USERNAME, PASSWORD);
  
  // let details = await twitter.getUser('Udemy');

  // await twitter.postTweet('Hello world, this is just a test message.');

  debugger;

  // await browser.close();

})();