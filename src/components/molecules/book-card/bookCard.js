import React from 'react'
import { Link } from 'react-router-dom';
import './book-card.css'

export default function BookCard({ data, index }) {
    const {
        name,
        isbn,
        authors, //[]
        numberOfPages,
        publisher,
        country,
        mediaType,
        // released = '1996-08-01T00:00:00',
        url // used this for book details
    } = data || {};


    return (
        <div className="book-card">
            <h3 className="serial-no"><i className="fas fa-book"></i>  {index + 1}</h3>
            <h3 className="book-name">{name}</h3>
            <h4 className="by">by</h4>
            {/* <h3>{`ISBN` + isbn}</h3> */}
            <h3 className="author-name">{authors.join(", ")}</h3>
            {/* <h3>{"Page No. "+ numberOfPages}</h3>
            <h3>{"publisher "+ publisher}</h3>
            <h3>{"country: "+ country}</h3>
            <h3>{"mediaType:" + mediaType}</h3> */}
            <Link to={{ pathname: `/book-details:${isbn}`, query: url }}>
                <button className="book_details_btn" >See Details <i class="fas fa-arrow-right"></i></button>
            </Link>
        </div>
    )
}

