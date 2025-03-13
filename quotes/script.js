// const apiKey = '4924c1dac13e9a62ade74773fa5883eb';
// const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR`;

async function getQuotes() {
    const url = 'https://dummyjson.com/quotes/random'
    const response = await fetch(url)
    const data = await response.json()

    displayQuote(data)
}

function displayQuote (quotes) {
    let quoteRamdom = getQuotes()
    console.log('koko');
    
    const quoteContainer = document.getElementById('quote-container')
    quoteContainer.innerHTML = ""

    console.log(quotes);
    
    for (let i = 0; i < quoteRamdom.length; i++){
        console.log('kokoooo');
        
        let divQuote = document.createElement('div')
        divQuote.classList.add('quote')

        quoteContainer.appendChild(divQuote)
        return quoteRamdom()
    }
}
displayQuote()




// function displayQuote(quotes) {

//     const quoteContainer = document.getElementById('quote-container')
//     quoteContainer.innerHTML = ""

//     // if (quotes.length === 0) {
//     //     quoteContainer.innerHTML = "<p>Aucune citation trouvée.</p>"
//     //     return
//     // }

//     quotes.forEach(quote => {

//         let divQuote = document.createElement('div')
//         divQuote.classList.add('quote')

//         divQuote.innerHTML = `
//             <h2>${quote.id}</h2>
//             <p>${quote.quote}</p>
//             <p>${quote.author}</p>
//         `
//         quoteContainer.appendChild(divQuote)
//     });
// }

// getQuotes()

const searchBar = document.getElementById("searchBar")
searchBar.addEventListener('input', () => {

    const query = searchBar.value.trim()
    getQuotes(query)
})

// const input = document.getElementById('quotes')

// input.addEventListener('input', () => {
//     let userInput = input.value
//     console.log(userInput);
//     const query = userInput
//     getQuotes(query)
// })

