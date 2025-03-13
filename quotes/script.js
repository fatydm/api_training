// const apiKey = '4924c1dac13e9a62ade74773fa5883eb';
// const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR`;

// Pour mes fleches 
const arrowLeft = document.querySelector('.arrow_left'); // Flèche gauche
const arrowRight = document.querySelector('.arrow_right'); // Flèche droite
let index = 0

// arrowLeft.addEventListener('click', () => {

//     if (index === -1) {
//         index = quote
//     }
// })

// arrowRight.addEventListener('click', () => {
//     if (index === quote) {
//         index = 0
//     }
// })



async function getQuotes() {
    const url = 'https://dummyjson.com/quotes/random'
    const response = await fetch(url)
    const data = await response.json() 

    return data
}

async function displayQuote() {
    let quoteRamdom = await getQuotes()
    // console.log(getQuotes());
    
    console.log('koko');
    console.log(quoteRamdom.id);

    const quoteContainer = document.getElementById('quote-container')
    const paraQuote = document.createElement('p')
    paraQuote.classList.add('paraQuote')
    paraQuote.innerHTML = `" ${quoteRamdom.quote} "`

    const paraAuthor = document.createElement('p')
    paraAuthor.classList.add('paraAuthor')
    paraAuthor.innerHTML = quoteRamdom.author 

    quoteContainer.appendChild(paraQuote)
    quoteContainer.appendChild(paraAuthor)


    return quoteRamdom
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

