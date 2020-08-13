import React, { Component } from 'react';
import {render} from 'react-dom';
//left in old code as comments while following along in the
// tutorial as it was being refacted so I can look at the old code before refactor

const bookList = [
    {"title": "The Hitchhiker's Guide to the Galaxy", "author": "Douglas Adams", "pages": 42},
    {"title": "Dune", "author": "Frank Herbert", "pages": 489},
    {"title": "Neuromancer", "author": "William Gibson", "pages": 271}
]


const Book = ({title, author, pages, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>By: {author}</p>
            <p>Pages: {pages}</p>
            <p>Free Bookmark Today: {freeBookmark ? "yes!": "no!"}</p>
        </section>
    )
}

//conditional rendering
const Hiring = () =>
    <div>
        <p>The library is hiring. Goto www.library.com/42/jobs</p>
    </div>

const NotHiring = () =>
    <div>
        <p>The library is not hiring. Check back later for more info.</p>
    </div>


//const Library = ({books}) => {}


class Library extends React.Component{
    //state variables
   state = { 
       open: true,
       freeBookmark:true,
       hiring:true
}
   
   
   
   //binding this
   toggleOpenClosed = () => {
    this.setState (prevState => ({
         open: !prevState.open
     }))
}


    /* constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        //binding "this"
        this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
    }*/
    
    /*toggleOpenClosed() {
        //this.setState ({
        //     open: !this.state.open
        // })
        
        this.setState (prevState => ({
             open: !prevState.open
         }))
    }*/

    render(){

        const {books} = this.props
        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                <h1>The library is {this.state.open ? 'Open' : 'Closed'}</h1>
                <button onClick={this.toggleOpenClosed}>open/closed</button>
                {books.map(
                    (book, i) => 
                        <Book 
                            key={i} 
                            title={book.title} 
                            author={book.author} 
                            pages={book.pages}
                            freeBookmark={this.state.freeBookmark}/>
                )}
            </div>
            /* <div>
                <Book title="The Hitchhiker's Guide to the Galaxy" author="Douglas Adams" pages={42}/>
                <Book title="Dune" author="Frank Herbert" pages={489}/>
                <Book title="Neuromancer" author="William Gibson" pages={271}/>
            </div>*/
        )
    }  
}






render(
    <Library books={bookList}/>,
    document.getElementById('root')
  )