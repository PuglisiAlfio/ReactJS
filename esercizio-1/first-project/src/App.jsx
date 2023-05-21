import { Routes, Route, Link, Outlet } from "react-router-dom";
import GithubUserList from "./components/GithubUserList";
import ShowGithubUser from "./components/ShowGithubUser";

function App() {
  return <div>
          <Routes>
            <Route path="list" element={<GithubUserList/>}>
              <Route path=":username" element={<ShowGithubUser/>}/>
            </Route>
          </Routes>
          <p><Link to="list">Lista</Link></p>
          <p><Link to="list/PuglisiAlfio">Mio profilo Github</Link></p>
          <Outlet/>
        </div>
}


export default App;
