import { Link, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./components/ShowGithubUser";


function App() {
  return <div>
          <Routes>
            <Route path="user/:username" element={<ShowGithubUser/>}/>
          </Routes>
          <Link to='/user/PuglisiAlfio'>Go to User PuglisiAlfio</Link>
          <br />
          <Link to='/user/yangus98'>Go to User Giuseppe Bianconi</Link>
          <br />
          <Link to='/user/PuglisiAlfio'>Go to User PuglisiAlfio</Link>
        </div>
}

export default App;
