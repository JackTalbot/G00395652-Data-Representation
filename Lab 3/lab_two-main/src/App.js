import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';

function App() { {/* Main App Script */}
  return (
    <BrowserRouter> {/* Browser Router Script */}
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container> {/* Navbar Container */}
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto"> {/* Links to Web Pages */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes> {/* Routes for Links */}
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='/read' element={<Read></Read>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
      </Routes>
      {/* <Header></Header>
      <Content></Content>
      <Footer /> */}
     

    </div>
    </BrowserRouter>
  );
}

export default App;
