import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'

function Header(props) {
    console.log(props)
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <p>Number of Series: {!props.series.isLoading ? props.series.series.length : 'Loading..'}</p>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

const mapStateToProps = state => ({
    number: state.numbers,
    series: state.series
})

export default connect(mapStateToProps)(Header)