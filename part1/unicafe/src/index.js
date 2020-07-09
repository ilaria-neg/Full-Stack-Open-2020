import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistic = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
    )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
      )
  }

  return(
  <table>
  <tbody>
    <Statistic text="good" value={props.good} />
    <Statistic text="neutral" value={props.neutral}  />
    <Statistic text="bad" value={props.bad} />
    <Statistic text="all" value={props.all} />
    <Statistic text="average" value={props.average} />
    <Statistic text="positive" value={props.positive} />
  </tbody>
  </table>
  )
}


const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
  )

const App = () => {
  //save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad
  const average = (good-bad)/all //sbagliato risultato
  const positive = (good/all*100).toFixed(2) + "%"

  const setToGood = newValue => {
    setGood(good + 1)
  }

  const setToNeutral = newValue => {
    setNeutral(neutral+1)
  }

  const setToBad = newValue => {
    setBad(bad+1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good+1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral+1)} text="neutral" /> 
      <Button handleClick={() => setToBad(bad+1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)