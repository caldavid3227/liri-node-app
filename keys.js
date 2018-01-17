console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.uz1PHdkFmIJfVsMUWDGU9fcYR,
  consumer_secret: process.env.mHt29OeGwa5CKe9wFQSYq5czggnf2Id8TtSK7loH4JGq6P4gFS,
  access_token_key: process.env.953389148953432064-oWuZLtkHoXppjyEfmV9al76KtJd9wtU,
  access_token_secret: process.env.pRX1R05K0vbYuO2FsS1G4WP3mkBtjQstoVL0PK3Lc8gf0
};

exports.spotify = {
  id: process.env.1b77fe42a2ee412e97d5a323e53333d6,
  secret: process.env.56324f355eb044b0ad495ce86386d4b8
};

 var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);