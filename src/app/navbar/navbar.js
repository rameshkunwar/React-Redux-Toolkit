import { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { update } from "../../redux/movieResultsSlice";
import { searchStringSlice } from "../../redux/searchStringSlice";

const MyNavBar = () => {
  const actions = searchStringSlice.actions;

  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  const handleInputValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = (event) => {
    const evt = event || window.Event;
    evt.preventDefault();
    if (searchValue === "") {
      dispatch(actions.clear());
    } else {
      dispatch(actions.add(searchValue));
    }
  };

  const handleClearSearch = (event) => {
    const evt = event || window.Event;
    evt.preventDefault();
    dispatch(actions.clear());
    dispatch(update([]));
    setSearchValue("");
  };

  return (
    <Navbar bg='primary' variant='dark' expand='lg' sticky='top'>
      <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#link'>Link</Nav.Link>
          <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline onSubmit={handleSearch}>
          <FormControl
            value={searchValue}
            onChange={handleInputValueChange}
            type='text'
            placeholder='Search'
            className='mr-sm-2'
          />
          <Button variant='outline-success' onClick={handleSearch}>
            Search
          </Button>
          <Button variant='outline-secondary' onClick={handleClearSearch}>
            Clear
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MyNavBar;
