import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function FormSearch() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <form className="row">
      <div className="col-8">
        <input type="text" className="form-control" placeholder="search ... " />
      </div>
      <div className="col-4">
        <button onClick={handleShow} type="button" className="btn btn-primary">
          Create
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              className="form-control"
              placeholder="Enter todo...."
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Create
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </form>
  );
}

export default FormSearch;