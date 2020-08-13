import React from 'react';
export const Book = ({title="No Title Provided", author="author does not exist", pages=0, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>By: {author}</p>
            <p>Pages: {pages}</p>
            <p>Free Bookmark Today: {freeBookmark ? "yes!": "no!"}</p>
        </section>
    )
}