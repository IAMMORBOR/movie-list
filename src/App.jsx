import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Category from "./component/MovieCategory";
import MoviePage from "./component/MoviePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/:category" element={<Category />}/>
      <Route exact path="/movie" element={<MoviePage />}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
