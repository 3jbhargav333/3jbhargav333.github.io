import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TopHeroSection from "./components/TopHeroSection";
import "./App.css";
function App() {
  const [showModal, setshowModal] = useState(false);
  return (
    <div>
      <Navbar
        onLogin={function () {
          setshowModal(true);
        }}
      />
      <TopHeroSection />
      <HeroSection />
      <Modal
        show={showModal}
        onHide={function () {
          setshowModal(false);
        }}
        size="s"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Pizza World</h4>
          <div>
            <input placeholder="username" className="inputbox"></input>
            <br></br>
            <input
              placeholder="password"
              type="password"
              className="inputbox"
            ></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={function () {
              setshowModal(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
