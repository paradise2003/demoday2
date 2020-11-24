var quotes = [
  '“The purpose of our lives is to be happy.” — Dalai Lama',
  '“Life is what happens when you’re busy making other plans.” — John Lennon',
  '“Get busy living or get busy dying.” — Stephen King',
  '“You only live once, but if you do it right, once is enough.” — Mae West',
  '“If you want to live a happy life, tie it to a goal, not to people or things.”– Albert Einstein'
]

function newQuote() {
var randomNumber= Math.floor(Math.random() *(quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
