import React, { Suspense, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Title from "./components/Title";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Pizza from "./pages/Pizza";
import Berger from "./pages/Berger";
import Sib from "./pages/Sib";
import Sandvich from "./pages/Sandvich";
import Pasta from "./pages/Pasta";
import Search from "./pages/Search";
import { berger, pasta, pizza, sandvich, sib } from "./config/data";

function App() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(false);
  const [searchArray, setSearchArray] = useState<any[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchmusic = e.target.value;
    if (searchmusic.length > 0) {
      setSearch(true);
    }
    let pizzaS = pizza.filter((item) => {
      if (item.name.toLowerCase().includes(searchmusic.toLowerCase())) {
        return item;
      }
    });
    let bergerS = berger.filter((item) => {
      if (item.name.toLowerCase().includes(searchmusic.toLowerCase())) {
        return item;
      }
    });
    let sandvichS = sandvich.filter((item) => {
      if (item.name.toLowerCase().includes(searchmusic.toLowerCase())) {
        return item;
      }
    });
    let sibS = sib.filter((item) => {
      if (item.name.toLowerCase().includes(searchmusic.toLowerCase())) {
        return item;
      }
    });
    let pastaS = pasta.filter((item) => {
      if (item.name.toLowerCase().includes(searchmusic.toLowerCase())) {
        return item;
      }
    });
    console.log({ bergerS });
    setSearchArray([...pizzaS, ...bergerS, ...sandvichS, ...sibS, ...pastaS]);
  };
  return (
    <div className="">
      <Router>
        <Header />
        <div>
          <Title />
        </div>
        <div className="sticky-div">
          <Routes>
            <Route
              path={"/"}
              element={<Navbar searchHandle={searchHandle} />}
            />
            <Route
              path={"/berger"}
              element={<Navbar searchHandle={searchHandle} />}
            />
            <Route
              path={"/pizza"}
              element={<Navbar searchHandle={searchHandle} />}
            />
            <Route
              path={"/sib"}
              element={<Navbar searchHandle={searchHandle} />}
            />
            <Route
              path={"/pasta"}
              element={<Navbar searchHandle={searchHandle} />}
            />
            <Route
              path={"/sandvich"}
              element={<Navbar searchHandle={searchHandle} />}
            />
            <Route path={"/about"} element={<About />} />
          </Routes>
        </div>
        <div>
          <Suspense fallback={<Loading />}>
            {search ? (
              <Search search={searchArray} />
            ) : (
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/pizza"} element={<Pizza />} />
                <Route path={"berger"} element={<Berger />} />
                <Route path={"sib"} element={<Sib />} />
                <Route path={"sandvich"} element={<Sandvich />} />
                <Route path={"pasta"} element={<Pasta />} />
              </Routes>
            )}
          </Suspense>
        </div>
        {loading && <Loading />}
      </Router>
    </div>
  );
}

export default App;
