import { React, useState } from "react";
import "./Contact.css";
import { Schema } from "../common/Schema/Schema";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  let initialState = {
    floatingName: "",
    floatingEmail: "",
    floatingPhone: "",
    query: "",
  };
  let [form_data, setForm_data] = useState(initialState);

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: Schema,

    onSubmit: async (values, action) => {
      console.log("values");

      setForm_data(initialState);
    },
    enableReinitialize: true,
  });

  return (
    <div>
      <div className="center_container">
        <h2 className="my-4 text-white text-center">Contact Form</h2>
        <form action="" className="contact_form">
          <div class="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${
                formik.errors.floatingName && formik.touched.floatingName
                  ? "border border-danger "
                  : ""
              }`}
              style={{
                borderColor:
                  formik.errors.floatingName && formik.touched.floatingName ? "red" : "",
              }}
              id="floatingName"
              placeholder="ex. Jasvinder Khera"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.floatingName}
            />
            <label for="floatingName">Full Name</label>
            {formik.errors.floatingName && formik.touched.floatingName ? (
              <p className="form_error text-danger">{formik.errors.floatingName}</p>
            ) : null}
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              className={`form-control ${
                formik.errors.floatingEmail && formik.touched.floatingEmail
                  ? "border border-danger "
                  : ""
              }`}
              style={{
                borderColor:
                  formik.errors.floatingEmail && formik.touched.floatingEmail ? "red" : "",
              }}
              id="floatingEmail"
              placeholder="name@example.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.floatingEmail}
            />
            <label for="floatingEmail">Email address</label>
            {formik.errors.floatingEmail && formik.touched.floatingEmail ? (
              <p className="form_error text-danger">{formik.errors.floatingEmail}</p>
            ) : null}
          </div>
          <div class="form-floating mb-3">
            <input
              type="tel"
              className={`form-control ${
                formik.errors.floatingPhone && formik.touched.floatingPhone
                  ? "border border-danger "
                  : ""
              }`}
              style={{
                borderColor:
                  formik.errors.floatingPhone && formik.touched.floatingPhone ? "red" : "",
              }}
              id="floatingPhone"
              placeholder="ex. 72XXXXX"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.floatingPhone}
            />
            <label for="floatingPhone">Phone Number</label>
            {formik.errors.floatingPhone && formik.touched.floatingPhone ? (
              <p className="form_error text-danger">{formik.errors.floatingPhone}</p>
            ) : null}
          </div>
          <div class="form-floating mb-3">
            <textarea
              type="text"
              name="query"
              className={`form-control ${
                formik.errors.query && formik.touched.query
                  ? "border border-danger "
                  : ""
              }`}
              style={{
                borderColor:
                  formik.errors.query && formik.touched.query ? "red" : "",
              }}
              id="floatingtextArea"
              placeholder="Your Query"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.query}
            />
            <label for="floatingtextArea">Your Query</label>
            {formik.errors.query && formik.touched.query ? (
              <p className="form_error text-danger">{formik.errors.query}</p>
            ) : null}
          </div>
          <div className="button">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
