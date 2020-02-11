import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

/**
 * The NavBar component function
 */
const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Личный кабинет LMS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Главная</Link>
                    <Link to="/about" className="nav-link">О нас</Link>
                    <Link to="/staff" className="nav-link">Сотрудники</Link>
                    <Link to="/account" className="nav-link">Страница сотрудника - тест</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Поиск сотрудника..." className="mr-sm-2" />
                    <Button variant="outline-success">Найти</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
