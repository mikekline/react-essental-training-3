import React from 'react';
import PropTypes from 'prop-types';
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

//lifecycle componants can only be used with class components and not function comonents
class Library extends React.Component{
    //state variables
   
    static defaultProps ={
        books: [
            {"title": "On Cooking", "author": "Sicoli", "pages": 1077}
        ]
   }
   
    state = { 
       open: true,
       freeBookmark:true,
       hiring:true,
       data: [],
       loading: false
    }

    componentDidMount() {
        console.log("component is now mounted!")
        this.setState({loading: true})
        fetch('https://hplussport.com/api/products/orfer/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
    }

    componentDidUpdate() {
        console.log("component just updated!")
    }


    

    //binding this
    toggleOpenClosed = () => {
        this.setState (prevState => ({
            open: !prevState.open
        }))
    }

    render(){
        const {books} = this.props
            return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading
                    ? "loading..."
                    : <div>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}>
                                    <h3>Library Product of the week!</h3>
                                    <h4>{product.name}</h4>
                                    <img src={product.image} height={100} alt={product.name} />
                                </div>
                            )
                        })}
                    </div>
                }
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
            )
        }  
    }

//good for debugging
Library.propTypes = {
    books: PropTypes.array
}
//good for debugging
Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool,
}

export default Library