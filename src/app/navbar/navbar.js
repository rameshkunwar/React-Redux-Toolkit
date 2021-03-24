import { useState } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { searchStringSlice } from '../../redux/searchStringSlice'

const MyNavBar = () => {
    const actions = searchStringSlice.actions
    const dispatch = useDispatch()

    const [searchValue, setSearchValue] = useState("")

    const handleInputValueChange = (event) =>{
        setSearchValue(event.target.value)
    }

    const handleSearch = (event) =>{
        if(searchValue === ""){
            dispatch(actions.clear())
        }else{
            dispatch(actions.add(searchValue))
        }
    }

    return (    
        <Navbar bg="primary" variant="dark" expand="lg" sticky="top" >
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl value={searchValue} onChange={handleInputValueChange} type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success" onClick={handleSearch}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        )
}
export default MyNavBar