import React, { Component } from 'react';
import {render} from 'react-dom';
//left in old code as comments while following along in the
// tutorial as it was being refacted so I can look at the old code before refactor


/*const style = {
  backgroundColor: 'black',
  color: 'red',
  fontFamily: 'Arial'
}
const title = React.createElement(
 // 'h1',
 'ul',
  {id: 'title', className: 'header', style: style},
  //'Hello World'
  React.createElement(
    'li',
    {},
    'bread'
  )
)*/

let skiData = {
  total: 50,
  powder: 30,
  backcountry: 20,
  goal:100
}

const getPercent = decimal => {
  return decimal * 100 + "%"
}
const calcGoalProgress = (total, goal) => {
  return getPercent(total/goal)
}

//for render
/*class SkiDayCounter extends Component{
  getPercent = decimal => {
    return decimal * 100 + "%"
  }
  calcGoalProgress = (total, goal) => {
    return this.getPercent(total/goal)
  }*/

  const SkiDayCounter = ({total, powder, backcountry, goal}) => {
    return (
      <section>
      <div>
        <p>total Days: {total}</p>
      </div>
      <div>
        <p>Powder Days: {powder}</p>
      </div>
      <div>
        <p>Backcountry Days: {backcountry}</p>
      </div>
      <div>
        <p>Goal: {goal}, {calcGoalProgress(total, goal)} </p>
      </div>
    </section>
    )
  }

  /*render(){
    // use below to destructure this.props
    const {total, powder, backcountry, goal} = this.props;
    return (
      <section>
        <div>
          <p>total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {backcountry}</p>
        </div>
        <div>
          <p>Goal: {goal}, {this.calcGoalProgress(total, goal)} </p>
        </div>
      </section>
    )
  }
}*/

render(
  //title,
  /*<div style={style}>
    <h1>Hello World!</h1>
    <p>Learning react!</p>
  </div>,*/
  <SkiDayCounter  
  total={skiData.total}
  powder={skiData.powder}
  backcountry={skiData.backcountry}
  goal={skiData.goal}  />,
  document.getElementById('root')
)