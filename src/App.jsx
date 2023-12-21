import { Route,Routes,BrowserRouter} from 'react-router-dom'
import Layout from './components/header/layout'
import Page404 from './components/page404'

function App() {

  return (
    <>
    
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Layout/>} >
    <Route path='page404'   element={<Page404/>}/>
  </Route>
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
