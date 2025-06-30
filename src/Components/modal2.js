import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Nav } from 'react-bootstrap';

function setForm(formType) {
  if(formType === "logIn") {

  }
  else {

  }
}

export function Example2() {
  const [show, setShow] = useState(false);
  const [isLogIn, setIsLogIn] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} className="d-grid gap-2">
        <Modal.Header closeButton>
          <Modal.Title>{isLogIn ? "Авторизація" : "Реєстрація"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Nav variant="underline" className='d-flex justify-content-center mb-2' defaultActiveKey={isLogIn ? "login" : "register" } onSelect={(selectedKey) => setIsLogIn(selectedKey === "login")}>
            <Nav.Item className='d-flex flex-row gap-3' >
              <Nav.Link eventKey="login">Вхід</Nav.Link>
              <Nav.Link eventKey="register">Реєстрація</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Ім`я" className="rounded-pill border-black" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Електронна адреса" className="rounded-pill border-black"/>
            </Form.Group>

            {!isLogIn && (<Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Пароль" className="rounded-pill border-black"/>
            </Form.Group>)}

            <Button variant="primary" type="submit" className="w-100 mt-3 rounded-pill border-black">
              Увійти
            </Button>

            {isLogIn ? (
              <div className="text-center mt-3">
                <a href="#forgot-password" className='text-decoration-none'>Забули пароль?</a>
              </div>
            ) :
            (
              <div className="text-center mt-3">
                <p>Реєструючись - Ви автоматично погоджуєтесь з <a href="#" className='text-decoration-none'>політикою конфіденційності</a> та <a href="#" className='text-decoration-none'>умови використання</a></p>
              </div>
            )

            }

            <Button variant="outline-dark" className="w-100 mt-3 rounded-pill">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google icon" className="me-2" />
              Авторизоваться через Google
            </Button>
        </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
