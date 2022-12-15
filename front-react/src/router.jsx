import {Route, Routes} from 'react-router-dom'
import DefaultLayout from './layout/defaultLayout'
import HomePage from './Pages/home/home'
import Login from './Pages/login/login'

function Router () {
    return(
    <Routes>
        <Route path='/' element={<DefaultLayout/>}>
            <Route path='/' element={<HomePage/>}/> 
            <Route path='/login' element={<Login/>}/>
        </Route>
    </Routes>
)}

export default Router