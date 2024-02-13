import logo from "./logo.svg";
import "./App.css";
import { Field, Form, Formik, useFormik } from "formik";
import { ValidationSchema } from "./Validation";
import swal from "sweetalert";

function App() {
  const initialvalues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  return (
    <div
      className=""
      style={{
        borderRadius: "4%",
        backgroundColor: "pink",
        width: "40%",
        margin: "auto",
        marginTop: "7%",
        height: "80%",
      }}
    >
      <Formik
        initialValues={initialvalues}
        validationSchema={ValidationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values, "values");
          resetForm({ values: "" });
          swal("Done", "Your data has been submitted successfully", "success");
        }}
      >
        {({ errors, touched }) => (
          <Form style={{ margin: "auto", width: "10%" }}>
            <div class="mb-3">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name"></Field>
            </div>
            {errors.name && touched.name && (
              <strong style={{ color: "red" }}>{errors.name}</strong>
            )}
            <br />
            <div class="mb-3">
              <label htmlFor="email">E-mail</label>
              <Field type="email" name="email"></Field>
            </div>
            {errors.email && touched.email && (
              <strong style={{ color: "red" }}>{errors.email}</strong>
            )}

            <br />
            <div class="mb-3">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password"></Field>
            </div>
            {errors.password && touched.password && (
              <strong style={{ color: "red" }}>{errors.password}</strong>
            )}
            <br />
            <div class="mb-3">
              <label htmlFor="confirmpassword"> Confirm Password</label>
              <Field type="password" name="confirmpassword"></Field>
            </div>
            {errors.confirmpassword && touched.confirmpassword && (
              <strong style={{ color: "red" }}>{errors.confirmpassword}</strong>
            )}
            <br />
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            <br />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
