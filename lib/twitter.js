import Twitter from 'twitter'

var client = new Twitter({
    consumer_key: process.env.TWITTER_API_TOKEN,
    consumer_secret: '',
    bearer_token: ''
})

export const getRecentPosts = (count = 3) => client.get('statuses/user_timeline',{screen_name:'johndchisholm', count, include_rts: false})

