"use client"


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useState } from 'react'


export default function Nev({data,setTemp}) {
  const [value,setValue]=useState([]);
  const handleClick=()=>{
    var filterData = data.filter(item => item.name.includes(value));
   setTemp(filterData);
  }
  

  return (
  
          <div>
      

<Navbar expand="lg" className="bg-body-tertiary">
<Container fluid>
  <Navbar.Brand href="#">TABLE</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">

      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
          value={value} onChange={(e) => {setValue(e.target.value);} }
      />
      <Button variant="outline-success" onClick={handleClick}>Search</Button>

  </Navbar.Collapse>
</Container>
</Navbar>
</div>
  );
}
