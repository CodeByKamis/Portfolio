import {Routes, Route} from 'react-router-dom';
import { Home } from '../Paginas/Home'
export function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    )
}