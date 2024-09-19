const allJokesArray = require('./data')
const genereteOneJoke = () => {
    const rand = Math.floor(Math.random() *allJokesArray.length)
    return allJokesArray[rand]
}
module.exports = genereteOneJoke

