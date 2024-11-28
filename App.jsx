import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Createusers from "./Crud/Createusers"
import Editusers from './Crud/Editusers'
import Homepage from "./Crud/Homepage"
import Users from "./Crud/Users"
 const App=()=>{
    return(
        <div>
<BrowserRouter>
<Homepage/>
<Routes>
     <Route path='/' element={<Createusers/>}/>
     <Route path='/Users' element={<Users/>}/>
     <Route path='/edit/:index' element={<Editusers/>}/>
</Routes>
</BrowserRouter>
</div>
    )
}
export default App