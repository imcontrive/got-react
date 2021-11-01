import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function BookDetails({ history }) {
    const [ bookDetails, setBookDetails ] = useState([])

    const { location: { query } } = history || {};
    // localStorage.setItem("query", query)

    useEffect(async () => {
        try {
            if (!query) {
                // var query =   localStorage.getItem("query")
                alert("Something went wrong! Please try later")
                return;
            }

            const responseData = await axios.get(`${query}`)
            const { data, status } = responseData || {};


            if (!status === 200) {
                alert("something went wrong! Please try again")
            }
            setBookDetails(data);

        } catch (error) {
            console.log(error, "error")
        }



    }, [])

    const {
        authors = [], //[]
        characters = [],  //[]
        country,
        isbn,
        mediaType,
        name,
        numberOfPages,
        povCharacters, //[]
        publisher,
        released
    } = bookDetails || {};

    return (
        <div>
            <div class="section-heading">
                <span class="section-title">
                    Book Details
                </span>
            </div>
            <div className='book-details text-center'>
                <h3 className="book-name">{name}</h3>
                <h4 className="by">by</h4>
                <h3 className="author-name">{authors.join(", ")}</h3>
                <h3 className="book-name">{`ISBN` + isbn}</h3>
                <h3 className="book-name">{"Pages" + numberOfPages}</h3>
                <h3 className="book-name">{"publisher " + publisher}</h3>
                <h3 className="book-name">{"country: " + country}</h3>
                <h3 className="book-name">{"mediaType:" + mediaType}</h3>
                <h3 className="book-name">{"All Characters of this book:"}</h3>
                {
                    characters && characters.map((char, index) =>
                        <div>
                            <a href={char} key={index} target={"_blank"} className="author-name" styles={{margin:"1rem 0"}}>{char}</a>
                        </div>
                    )
                }


            </div>

        </div>
    )
}
