import './App.css'
import {fetchData} from './api/FetchData'

function App() {

  const data = fetchData()
  console.log(data)
  return (
    <>
       <h1>Yatara</h1>
    </>
  )
}

export default App
