import React, { Component } from 'react';
import {render} from 'react-dom';
import Library from './Library'

//left in old code as comments while following along in the
// tutorial as it was being refacted so I can look at the old code before refactor

const bookList = [
    {"title": "The Hitchhiker's Guide to the Galaxy", "author": "Douglas Adams", "pages": 42},
    {"title": "Dune", "author": "Frank Herbert", "pages": 489},
    {"title": "Neuromancer", "author": "William Gibson", "pages": 271}
]


class FavoriteColorform extends React.Component {
    state = {value: ''}
        newColor = e =>
            this.setState({value: e.target.value})
        submit = e => {
            console.log(`New Color: ${this.state.value}`)
            e.preventDefault()
        }

        render() {
            return (
                <form onSubmit={this.submit}>
                    <label> Favorite color:
                        <input type="color" 
                            onChange={this.newColor}
                        />
                    </label>
                    <button>submit</button>
                </form>
            )
        }
}


render(
    <>
        <Library books={bookList}/>
        <FavoriteColorform />
    </>,
    document.getElementById('root')
  )