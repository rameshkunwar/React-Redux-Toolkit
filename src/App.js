import { Container } from "react-bootstrap";
import MyNavBar from "./app/navbar/navbar";
import "./App.css";
import ShowMovieSearchResults from "./app/movieSearch/showResults";

function App() {
  return (
    <div className='App'>
      <Container fluid className='p-0'>
        <div className='inner-container'>
          <div id='surface'>
            <MyNavBar />

            <div id='content'>
              <ShowMovieSearchResults />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
