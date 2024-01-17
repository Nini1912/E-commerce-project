import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/logo.svg";
import Cart from "../assets/icon-cart.svg";
import CartContainer from "./Cart-container";
import { loggedInUser, assetsBaseUrl } from "../data";

const NavBar = ({
  productsInCart,
  setCartIsClicked,
  cartIsClicked,
  setProductsInCart,
  setProductNumber,
}) => {
  const openCart = () => {
    setCartIsClicked(!cartIsClicked);
  };
  return (
    <Navbar expand="lg">
      <Container className="border-bottom pt-3 pb-4 w-75">
        <Navbar.Brand href="#home" className="me-5">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#collections" className="nav-link me-3">
              Collections
            </Nav.Link>
            <Nav.Link href="#men" className="nav-link me-3">
              Men
            </Nav.Link>
            <Nav.Link href="#women" className="nav-link me-3">
              Women
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link me-3">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link me-3">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="cart me-5">
          <img className="cart-icon" src={Cart} alt="" onClick={openCart} />
          <CartContainer
            productsInCart={productsInCart}
            cartIsClicked={cartIsClicked}
            setCartIsClicked={setCartIsClicked}
            setProductsInCart={setProductsInCart}
            setProductNumber={setProductNumber}
          />
        </div>
        <img
          className="profile-img"
          src={`https://${assetsBaseUrl}/${loggedInUser.profileImage}`}
          alt=""
        />
      </Container>
    </Navbar>
  );
};

export default NavBar;
