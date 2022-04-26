import "NavBar,scss";

function NavBar() {
	return (
		<div className="NavBar">
			<Navbar bg="light" expand={false}>
				<Container fluid>
					<Navbar.Brand href="#">LevelX VideoGames</Navbar.Brand>
					<Navbar.Toggle aria-controls="offcanvasNavbar" />
					<Navbar.Offcanvas
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel"
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id="offcanvasNavbarLabel">
								LevelX
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<Nav.Link href="#action1">Home</Nav.Link>
								<Nav.Link href="#action2">News</Nav.Link>
								<NavDropdown title="Categories" id="offcanvasNavbarDropdown">
									<NavDropdown.Item href="#action3">Shooter</NavDropdown.Item>
									<NavDropdown.Item href="#action4">
										Hack and Slash
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action5">
										Random Category
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							<Form className="d-flex">
								<FormControl
									type="Search"
									placeholder="Search"
									className="me-2"
									aria-label="Search"
								/>
								<Button variant="outline-success">Search</Button>
							</Form>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBar;
