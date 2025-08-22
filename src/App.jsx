import './App.css'
import Header from './components/Header'
import icon from './assets/imgs/apple-icon.png'
import Library from './components/movie/Library'


function App() {


  return (
    <>
      <Header icon={icon}></Header>
      <Library/>
    </>
  )
}

export default App
