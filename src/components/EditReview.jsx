import { Container, Row, Col } from "react-bootstrap";
import { product } from "../data";
import Star from "./star";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { formSchema } from "../validation";

const EditReview = ({
  newReview,
  setNewReview,
  setReviewsVisible,
  reviewsVisible,
}) => {
  const submitForm = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log("Submiting", values);
      product.reviews[3] = values;
      setNewReview(values);
      setSubmitting(false);
      resetForm();
      setReviewsVisible(!reviewsVisible);
    }, 1500);
  };
  return (
    <Container className="ms-md-5 ps-md-5 mb-md-5 mt-3">
      <Row className="ms-md-5 ps-md-5">
        <h2 className="ms-md-5 ps-md-4 fs-4 fw-bold mb-0">Edit your review</h2>
      </Row>
      <Formik
        initialValues={newReview}
        onSubmit={submitForm}
        validationSchema={formSchema}
      >
        {(formik) => {
          return (
            <Form>
              <Row className="ms-md-5 ps-md-5 mt-3">
                <Col className="ms-md-5 ps-md-4 d-flex flex-column">
                  <label
                    htmlFor="starRating"
                    className="fs-md-5 fs-6 fw-semibold mb-2"
                  >
                    Overall Rating
                  </label>
                  <div>
                    <button
                      type="button"
                      className="border-0 bg-transparent ps-0"
                      onClick={() => formik.setFieldValue("starRating", 1)}
                    >
                      <Star
                        fill={
                          formik.values.starRating >= 1 ? "#FAD409" : "none"
                        }
                        stroke={
                          formik.values.starRating >= 1
                            ? "#FAD409"
                            : "currentColor"
                        }
                        width={44}
                        height={44}
                        strokeWidth={0.7}
                      />
                    </button>
                    <button
                      type="button"
                      className="border-0 bg-transparent ps-0"
                      onClick={() => formik.setFieldValue("starRating", 2)}
                    >
                      <Star
                        fill={
                          formik.values.starRating >= 2 ? "#FAD409" : "none"
                        }
                        stroke={
                          formik.values.starRating >= 2
                            ? "#FAD409"
                            : "currentColor"
                        }
                        width={44}
                        height={44}
                        strokeWidth={0.7}
                      />
                    </button>
                    <button
                      type="button"
                      className="border-0 bg-transparent ps-0"
                      onClick={() => formik.setFieldValue("starRating", 3)}
                    >
                      <Star
                        fill={
                          formik.values.starRating >= 3 ? "#FAD409" : "none"
                        }
                        stroke={
                          formik.values.starRating >= 3
                            ? "#FAD409"
                            : "currentColor"
                        }
                        width={44}
                        height={44}
                        strokeWidth={0.7}
                      />
                    </button>
                    <button
                      type="button"
                      className="border-0 bg-transparent ps-0"
                      onClick={() => formik.setFieldValue("starRating", 4)}
                    >
                      <Star
                        fill={
                          formik.values.starRating >= 4 ? "#FAD409" : "none"
                        }
                        stroke={
                          formik.values.starRating >= 4
                            ? "#FAD409"
                            : "currentColor"
                        }
                        width={44}
                        height={44}
                        strokeWidth={0.7}
                      />
                    </button>
                    <button
                      type="button"
                      className="border-0 bg-transparent ps-0"
                      onClick={() => formik.setFieldValue("starRating", 5)}
                    >
                      <Star
                        fill={
                          formik.values.starRating === 5 ? "#FAD409" : "none"
                        }
                        stroke={
                          formik.values.starRating === 5
                            ? "#FAD409"
                            : "currentColor"
                        }
                        width={44}
                        height={44}
                        strokeWidth={0.7}
                      />
                    </button>
                  </div>
                  <ErrorMessage
                    className="text-danger mt-2"
                    component="p"
                    name="starRating"
                  />
                </Col>
              </Row>
              <Row className="ms-md-5 ps-md-5">
                <Col className="ms-md-5 ps-md-4 d-flex flex-column">
                  <label
                    htmlFor="headline"
                    className="fs-md-5 fs-6 fw-semibold mt-2 mb-3"
                  >
                    Headline
                  </label>
                  <Field
                    name="headline"
                    type="text"
                    id="headline"
                    className="input border border-secondary-subtle border-2 rounded-3 p-2"
                    style={{ fontFamily: "Kumbh Sans" }}
                    placeholder="What’s most important to know?"
                  />
                  <ErrorMessage
                    className="text-danger mt-2"
                    component="p"
                    name="headline"
                  />
                </Col>
              </Row>
              <Row className="ms-md-5 ps-md-5">
                <Col className="ms-md-5 ps-md-4 d-flex flex-column">
                  <label
                    htmlFor="writtenReview"
                    className="fs-md-5 fs-6 fw-semibold mt-md-3 mb-3"
                  >
                    Written review
                  </label>
                  <Field
                    name="writtenReview"
                    as="textarea"
                    rows={5}
                    cols={10}
                    id="writtenReview"
                    className="input border border-secondary-subtle border-2 rounded-3 p-2"
                    style={{ fontFamily: "Kumbh Sans" }}
                    placeholder="What did you like or dislike? What did you use this product for?"
                  />
                  <ErrorMessage
                    className="text-danger mt-2"
                    component="p"
                    name="writtenReview"
                  />
                </Col>
              </Row>
              <Row className="ms-5 ps-3">
                <Col>
                  <div className="d-flex justify-content-end w-md-50 ms-5">
                    <button
                      type="button"
                      className="cancel-btn border-0 py-3 px-4 rounded-4 me-4 mt-3"
                      onClick={() => {
                        setReviewsVisible(!reviewsVisible);
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="button submit-btn border-0 py-3 px-4 rounded-4 mt-3"
                      disabled={formik.isSubmitting}
                    >
                      Save
                    </button>
                  </div>
                </Col>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default EditReview;
