import { Header } from "./components/header";
import { MovieList } from "./components/MoviesList";

function App() {
    return (
        <div className="App">
           <Header />
            <MoviesContainer>
                <MovieList movies={[]}/>
            </MoviesContainer>
        </div>
  
    );
}

export default App;