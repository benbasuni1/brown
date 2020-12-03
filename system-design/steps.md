Step 1: Requirements
  * Users POST tweet
  * Users FOLLOW other users
  * Users SEARCH tweets
  * Users PUSH notifications

  * User Timeline
  * Trending Topics
  * Tweet: Photos/Videos
  * Backend? Frontend?

Step 2: Numbers
  * Scale ? (# of tweets, tweet views, timeline generations)
  * Storage ?
  * Network bandwidth ?

Step 3: API Design (interface)
  * postTweet(userid, tweetdata, location, timestamp)
  * generateTimeline(userid, time, location)
  * markTweetFavorite(userid, tweetid, timestamp)

Step 4: Data Schema
  * User : { userid, name, email, dob, creationData, login }
  * Tweet: { tweetid, content, location, likes }
  * UserFollow : { userid1, userid2}
  * FavTweets: { userid, tweetid, timestamp}

  * SQL or no SQL?

Step 5: Draw Detailed Design + Refactor
  * Focus on specific topic
  * Monitoring? 
