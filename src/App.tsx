
import { Route, BrowserRouter, Routes } from "react-router-dom"
//import Namelist from "./components/rone"
import Sbrn from "./components/about"
//import Real from "./components/dynamicqueue"
//import Poke from "./components/paginationquery"
//import Pagi from "./components/pagi2"
//import Poke from "./components/paginationquery"
//import Sr from "./components/start"
//import Bgr from "./components/bgr"
import Homepae from "./components/Homepage"
import  Myprofile from "./pages/myprofile"



function App() {
return(
    <div>
    
        <BrowserRouter>
<Routes>
<Route path="/about" element={<Sbrn/>}>About</Route>
        <Route path="/myprofile" element={<Myprofile/>}>Myprofile</Route>
<Route path="/" element={<Homepae/>}>About</Route>


</Routes>


</BrowserRouter>
</div>
)
}
 export default App