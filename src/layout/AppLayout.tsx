import React, { useState } from 'react';
import { 
  Navbar,
  Container,
  Form,
  Button,
  FormControl
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import logo from 'assets/images/logo.png';

const AppLayout: React.FC = ({ children }) => {
  const [search, setSearch] = useState('');
  const history = useHistory();

  return (
    <>
      <Navbar className="mb-4">
        <Container>
          <img 
            className="logo" 
            src={logo} 
            alt="pokelogo"
            onClick={() => history.push('/')} 
          />
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={({ target }) => setSearch(target.value)}
            />
            <Button
              disabled={!search}
              variant="outline-light"
              onClick={() => history.push(`/pokemons/${search}`)} 
            >
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
      <Container>
        {children}
      </Container>
    </>
  );
};

export default AppLayout;