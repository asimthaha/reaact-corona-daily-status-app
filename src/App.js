import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoronaStatusAdd from "./components/CoronaStatusAdd";
import CoronaStatusView from "./components/CoronaStatusView";
import CoronaStatusSearch from "./components/CoronaStatusSearch";
import CoronaStatusDelete from "./components/CoronaStatusDelete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<CoronaStatusAdd />}></Route>
        <Route path="search" element={<CoronaStatusSearch />}></Route>
        <Route path="view" element={<CoronaStatusView />}></Route>
        <Route path="delete" element={<CoronaStatusDelete />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
