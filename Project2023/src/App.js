import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import CreateShow from './components/createShow';
import ReadShow from './components/displayShows';
import editShow from './components/editShows';
import HPage from './components/HPage';
import shows from './components/shows';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">HomePage</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/createShow">Add Show</Nav.Link>
          <Nav.Link href="/displayShows">Display Shows</Nav.Link>
          <Nav.Link href="/editShow">Edit Shows</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<HPage></HPage>}></Route>
        <Route path='/createShow' element={<createShow></createShow>}></Route>
        <Route path='/displayShows' element={<displayShows></displayShows>}></Route>
        <Route path='/editShow/:id' element={<editShow></editShow>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;