import './App.css'
import Countries from "./components/Countries/Countries";
function App() {

  return (
    <>
      <div style={{textAlign:'center'}}>
        <h1>MY <span style={{color:'red'}}>WORLD</span> MY TOUR</h1>
        <h1 style={{color:'blue'}}>With React</h1>
        <Countries></Countries>
      </div>
    </>
  )
}

export default App
