import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/home';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddShow from './components/addShow';
import ReadShow from './components/displayShows';
import EditShow from './components/editShows';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">MyShowList</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/createShow">Add Show</Nav.Link>
          <Nav.Link href="/displayShows">Display Shows</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/createShow' element={<AddShow></AddShow>}></Route>
        <Route path='/displayShows' element={<ReadShow></ReadShow>}></Route>
        <Route path='/editShow/:id' element={<EditShow></EditShow>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;