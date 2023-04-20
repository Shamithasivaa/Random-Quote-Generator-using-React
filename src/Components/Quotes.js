
import React, { useEffect, useState } from 'react';
import Share from './Share';

function Quotes() {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    // re-rendering the component everytime when QUOTE generate
    useEffect(() => {
        // calling getQuote() for fetch QUOTE
        getQuote();
    }, [])

    function getQuote() {
        let url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

        fetch(url)
            .then(response => response.json())

            .then(data => {
                // created Quotes ARRAY variable
                let dataQuotes = data.quotes;

                // selecting random number on the basis of length of the array
                let randomNumber = Math.floor(Math.random() * dataQuotes.length);

                // creating varaibale to fetch quote and storing it
                let randomQuotes = dataQuotes[randomNumber]

                // accessing QUOTE from array
                setQuote(randomQuotes.quote);
                // accessing AUTHOR NAME from array
                setAuthor(randomQuotes.author);
            })
            .catch(error => document.write("Invalid Link..."));
    }

    function nextQuote() {
        getQuote();
    }

    return (
        
          
        <div id="quote-box" align="center">
            <p id='font'>Today's Quote:</p>
            <hr></hr>
                    <p id="font1">"{quote}"</p>
                
                <div id="font2">- {author}</div>
                <hr></hr>
            <br></br>
            <div>
            <button id="button" onClick={nextQuote}>New Quote</button>
            <Share/>
            <br></br>
            </div>
            </div>
                   
    );
}

export default Quotes;