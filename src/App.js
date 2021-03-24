import { Container } from 'react-bootstrap';
import MyNavBar from './app/navbar/navbar';


function App() {
  return (
    <div className="App">
    <Container fluid className="p-0">
      <div className="inner-container">
        <div id="surface">
          <MyNavBar />
        </div>
        </div>     
    </Container>
      
    </div>
  );
}

export default App;
