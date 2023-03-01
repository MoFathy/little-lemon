import React from "react";
import Button from "./button";
import { Formik, Form, Field,ErrorMessage } from "formik";
import * as Yup from "yup";
import '../assets/css/form.css'
function BookingForm(props) {
  const ReservationSchema = Yup.object().shape({
    date: Yup.date().default(() => new Date()).required("Required"),
    time: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    guests: Yup.number().required("Required").positive("must be at least one").integer(),
    occasion: Yup.string().required("Required"),
  });

  return (
    <section className="form-section container">
      <h1>Book Now</h1>
      <Formik
        initialValues={props.data}
        validationSchema={ReservationSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          props.onFormSubmit();
        }}
      >
        {({ errors, touched }) => (
          <Form style={{ display: "grid", gap: "20px", padding: "20px", border: "1px solid #ddd" }}>
            <label htmlFor="res-date">Choose date</label>
            <Field
              name="date"
              type="date"
              id="res-date"
              value={props.data?.date}
              onChange={(e) => {
                props.onUpdateDate(e.target.value);
              }}
            />
            {errors.date && touched.date ? <div className="error">{errors.date}</div> : null}
            <label htmlFor="res-time">Choose time</label>
            <Field
              as="select"
              id="res-time "
              value={props.data?.resTime}
              onChange={(e) => {
                props.onValueChanged({
                  resTime: e.target.value,
                  ...props.data,
                });
              }}
            >
              {props.availableTimes?.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Field>
            {errors.time && touched.time ? <div className="error">{errors.time}</div> : null}
            <label htmlFor="guests">Number of guests</label>
            <Field
              name="guests"
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              onChange={(e) => {
                props.onValueChanged({ guests: e.target.value, ...props.data });
              }}
            />
            {errors.guests && touched.guests ? (
              <div className="error">{errors.guests}</div>
            ) : null}
            <label htmlFor="occasion">Occasion</label>
            <Field
              as="select"
              id="occasion"
              name="occasion"
              value={props.data?.occasion}
              onChange={(e) => {
                props.onValueChanged({
                  occasion: e.target.value,
                  ...props.data,
                });
              }}
            >
              <option value={"birthday"}>Birthday</option>
              <option value={"anniversary"}>Anniversary</option>
            </Field>
            {errors.occasion && touched.occasion ? (
              <div className="error">{errors.occasion}</div>
            ) : null}
            <ErrorMessage name="email" />
            <Button>Make Your reservation</Button>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default BookingForm;
