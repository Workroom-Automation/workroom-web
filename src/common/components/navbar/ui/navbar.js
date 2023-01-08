import styles from "../styles/navbar.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { mainLogo } from "../../../../common/assets/images/mainLogo.js";

export default function CustomNavbar(props) {
  return (
    <Navbar id={styles.navbar}>
      <Container fluid={true} style={{ margin: "10px 20px 10px 10px" }}>
        <Navbar.Brand>
          <div style={{ display: "flex" }}>
            {mainLogo}
            <h3
              style={{
                fontWeight: "bold",
                marginTop: "5px",
              }}
            >
              Workroom
            </h3>
          </div>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div style={{ display: "flex" }}>
              <img
                id={styles.image}
                src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"
                alt="Five cats looking around a field."
              />
              <div style={{ marginLeft: "10px", marginTop: "3px" }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Kranti Kiran
                </div>
                <div style={{ fontSize: "14px" }}>Admin</div>
              </div>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
