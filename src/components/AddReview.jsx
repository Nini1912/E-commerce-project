import { Container, Row, Col } from "react-bootstrap";
import Star from "./star";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { string, object, number } from "yup";

const formInitialValues = {
  user: "",
  starRating: 0,
  writtenReview: "",
  headline: "",
};

const submitForm = (values, { setSubmitting, resetForm }) => {
  setTimeout(() => {
    console.log("Submiting", values);
    setSubmitting(false);
    resetForm();
  }, 1500);
};

const formSchema = object({
  starRating: number().min(1, "Please select a star rating").required(),
  writtenReview: string()
    .min(15, "Written review must be at least 15 characters")
    .required("Please enter your written review"),
  headline: string()
    .min(4, "Headline must be at least 4 characters")
    .required("Please enter your headline"),
});

const AddReview = ({ setWriteReviwBtnIsClicked }) => {
  return (
    <Container className="ms-5 ps-5 mb-5">
      <Row className="ms-5 ps-5">
        <h2 className="ms-5 ps-4">Add a review</h2>
      </Row>
      <Formik
        initialValues={formInitialValues}
        onSubmit={submitForm}
        validationSchema={formSchema}
      >
        {(formik) => {
          return (
            <Form>
              <Row className="ms-5 ps-5 mt-3">
                <Col className="ms-5 ps-4 d-flex flex-column">
                  <label htmlFor="starRating" className="fs-5 fw-semibold mb-2">
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
              <Row className="ms-5 ps-5">
                <Col className="ms-5 ps-4 d-flex flex-column">
                  <label
                    htmlFor="headline"
                    className="fs-5 fw-semibold mt-2 mb-3"
                  >
                    Headline
                  </label>
                  <Field
                    name="headline"
                    type="text"
                    id="headline"
                    className="border border-secondary-subtle border-2 rounded-3 w-50 p-2"
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
              <Row className="ms-5 ps-5">
                <Col className="ms-5 ps-4 d-flex flex-column">
                  <label
                    htmlFor="writtenReview"
                    className="fs-5 fw-semibold mt-3 mb-3"
                  >
                    Written review
                  </label>
                  <Field
                    name="writtenReview"
                    as="textarea"
                    rows={5}
                    cols={10}
                    id="writtenReview"
                    className="border border-secondary-subtle border-2 rounded-3 p-2"
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
                  <div className="d-flex justify-content-end w-50 ms-5">
                    <button
                      className="cancel-btn border-0 py-3 px-4 rounded-4 me-4 mt-3"
                      onClick={() => {
                        setWriteReviwBtnIsClicked(false);
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="button submit-btn border-0 py-3 px-4 rounded-4 mt-3"
                      disabled={formik.isSubmitting}
                    >
                      Submit
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

export default AddReview;
