// FSJS - Random Quote Generator
// Create the array of quote objects and name it quotes

var quotes = [{
  Quote: 'With a new day comes new strength and new thoughts.',
  Author: 'Eleanor Roosevelt',
  Date: 'N/A'
},{
  //Second Object
  Quote: 'Three things in human life are important. The first is to be kind.\
  The second is to be kind. And the third is to be kind.',
  Author: 'Henry James',
  Date: ' - 1978'
},{
  //Third object
  Quote: 'Movies have lost a lot by this new trend towards documentary realism \
  at the sacrifice of fantasy. After all, drama is life with the dull bits cut\
   out.',
  Author: 'Alfred Hitchcock',
  Date: '- 1956 March 2nd'
},{
  //Fourth object
  Quote: 'Doctor, years ago I had a foreman who taught me a great deal. \
  He was quite a philosopher. One day he said, “William, you must learn from \
  the mistakes of others—you will never live long enough to make them all \
  yourself.',
  Author: 'Unknown. First seen in book(Human Engineering) by Harry Meyers and\
   Mason M. Meyers',
  Date: '- 1932'
},{
  //Fifth object
  Quote: 'You have enemies? Why, it is the story of every man who has done a \
  great deed or created a new idea. It is the cloud which thunders around \
  everything which shines. Fame must have enemies, as light must have gnats.\
  Do not bother yourself about it; disdain. Keep your mind serene as you keep \
  your life clear. Do not give your enemies the satisfaction of thinking that \
  they cause you grief or pain. Be happy, be cheerful, be disdainful, be firm.',
  Author: 'Victor Hugo',
  Date: '- 1887 December 7th'
}
];

// getRandomQuuote function

function getRandomQuote(array) {
  var RandomQuote = quotes[Math.floor(Math.random()*quotes.length)]; /* Selects random quote from the quotes array.*/
  return (RandomQuote); /* Returns the randomly selected quote object. */
}

// printQuote funtion

function printQuote() {
  console.log("clicked")
  var actualQuote = getRandomQuote(quotes); /* printQuote function calls getRandomQuote */
  var stringOfQuoteProperties = "";
    stringOfQuoteProperties += "<p class='quote'>" + actualQuote.Quote +"</p> <p class='source'>" + actualQuote.Author+ " " + actualQuote.Date + "</p>"
  if (actualQuote.Date.hasOwnProperty()) {
    stringOfQuoteProperties += "<span class='year'>" + actualQuote.Date + "</span>";
  } else {} /* adds year property of quote, if there is one */

  document.getElementById("quote-box").innerHTML = stringOfQuoteProperties; /* printQuote function should display the completed HTML */

}



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById("loadQuote").addEventListener("click", printQuote, false);
