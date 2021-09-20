
import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";


const MainLayout = ({children}) => {
    const history = useHistory();

    const onSignIn = () => {
        history.replace("/login");
    }
    return (
        <>
        <Navbar bg="light" variant="light" className="b-4">
            <Navbar.Brand>QR Menu</Navbar.Brand>
            <Nav className="flex-grow-1 justify-content-end">
              <Nav.Link onClick={onSignIn}>Login</Nav.Link>
            </Nav>
            </Navbar>
            <Container>
                {children}
            </Container>
        </>
    )
}


export default MainLayout