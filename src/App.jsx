import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  let [watchlist, setWatchLite] = useState([]);
  let handleAddWatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    setWatchLite(newWatchList);
    console.log(newWatchList);
  };
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies handleAddWatchlist={handleAddWatchlist} />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
