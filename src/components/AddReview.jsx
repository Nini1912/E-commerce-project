import { Container, Row, Col } from "react-bootstrap";
import Star from "./star";

const AddReview = () => {
  return (
    <Container className="ms-5 ps-5 mb-5">
      <Row className="ms-5 ps-5">
        <h2 className="ms-5 ps-4">Add a review</h2>
      </Row>
      <form>
        <Row className="ms-5 ps-5 mt-3">
          <Col className="ms-5 ps-4">
            <label htmlFor="" className="fs-5 fw-semibold mb-2">
              Overall Rating
            </label>
            <div>
              <Star fill="#FAD409" stroke="#FAD409" />
              <Star fill="#FAD409" stroke="#FAD409" />
              <Star fill="#FAD409" stroke="#FAD409" />
              <Star fill="#FAD409" stroke="#FAD409" />
              <Star fill="#FAD409" stroke="#FAD409" />
            </div>
            <p className="text-danger mt-2">Please select a star rating</p>
          </Col>
        </Row>
        <Row className="ms-5 ps-5">
          <Col className="ms-5 ps-4">
            <label htmlFor="" className="fs-5 fw-semibold mb-2">
              Headline
            </label>{" "}
            <br />
            <input
              type="text"
              className="border border-secondary-subtle border-2 rounded-3 w-50 p-2"
              style={{ fontFamily: "Kumbh Sans" }}
              placeholder="What’s most important to know?"
            />
            <p className="text-danger mt-2">Please enter your headline</p>
          </Col>
        </Row>
        <Row className="ms-5 ps-5">
          <Col className="ms-5 ps-4">
            <label htmlFor="" className="fs-5 fw-semibold mb-2">
              Written review
            </label>{" "}
            <br />
            <textarea
              name=""
              id=""
              cols="58"
              rows="5"
              className="border border-secondary-subtle border-2 rounded-3 p-2"
              style={{ fontFamily: "Kumbh Sans" }}
              placeholder="What did you like or dislike? What did you use this product for?"
            ></textarea>
            <p className="text-danger mt-2">Please enter your written review</p>
          </Col>
        </Row>
        <Row className="ms-5 ps-3">
          <Col>
            <div className="d-flex justify-content-end w-50 ms-5">
              <button className="cancel-btn border-0 py-3 px-4 rounded-4 me-4">
                Cancel
              </button>
              <button className="button border-0 py-3 px-4 rounded-4">
                Submit
              </button>
            </div>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default AddReview;
