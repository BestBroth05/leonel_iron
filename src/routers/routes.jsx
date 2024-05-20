import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from '../Components/Home'
export function MyRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}