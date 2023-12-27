import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { NewsBoard } from './Components/NewsBoard'

const App = () => {
  const [category,setCategory] = useState("general");
  const darkBackground = {
    backgroundColor: '#333'
  };
  return (
    <div style={darkBackground}>
    <Navbar setCategory={setCategory}/>
    <NewsBoard category={category}/>
    </div>
  )
}

export default App