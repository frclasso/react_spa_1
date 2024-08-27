import { Header } from "./components/header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { MovieDetail } from "./views/MovieDetail";
import { MoviesContainer } from "./styles/MoviesContainer";
import { MovieList } from "./components/MoviesList";

function App() {

    return (
        <div className="App">
            <Router>
                <Header />

                <Routes>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/movie/:id">
                        <MovieDetail />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Routes>

                <MoviesContainer>
                    <MovieList movies={movies}/>
                </MoviesContainer>
            </Router>
        </div>
  
    );
}

export default App;