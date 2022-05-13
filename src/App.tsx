import React from "react"
import "./App.css"
import Card from "./components/card"

function App () {
  const [isChecked, setIsChecked] = React.useState(false)

  const onClick = () => setIsChecked(!isChecked)

  return (
    <div className='App'>
      <Card isChecked={isChecked} label='Flood Zone 3' onClick={onClick} isHover={false} />
    </div>
  )
}

export default App
