const genereteOneJoke = require('./oneJokegenerator')
const jokesGenerator = (numberOfJokes = 1) =>{
    let jokesResults = []
    if (numberOfJokes <1 || numberOfJokes > 10 || typeof numberOfJokes !== 'number' )
        throw new Error('Wrong params, please ask for a number 1 to 10.')
    do {
        const oneJoke = genereteOneJoke()
        if(!jokesResults.includes(oneJoke))
        jokesResults.push(oneJoke)
    } while (jokesResults.length < numberOfJokes);
    return jokesResults;
}
module.exports = jokesGenerator