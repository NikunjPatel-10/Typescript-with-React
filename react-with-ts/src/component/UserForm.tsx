import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import "./UserForm.css";
import { log } from "console";

interface FormValues {
  name: string;
  email: string;
  address: string;
  phone: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  address: Yup.string().required("Address is required"),
  phone: Yup.string().required("Phone number is required"),
});

const UserForm: React.FC = () => {
  let initialValues: FormValues = {
    name: "",
    email: "",
    address: "",
    phone: "",
  };
  const [patchValue, setPatchValue] = useState(initialValues);
  const [companyList, setCompanyList] = useState<FormValues[]>([]);
  const [editingIndex, setEditingIndex] = useState<number>(-1);
  var a: 5 = 5;
  console.log(a);

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    if (editingIndex === -1) {
      setCompanyList((prevList: FormValues[]) => [...prevList, values]);
    } else {
      const updatedList = [...companyList];
      updatedList[editingIndex] = values;
      setCompanyList(updatedList);
      setEditingIndex(-1);
      setPatchValue(initialValues); // Reset the patchValue state
    }
    resetForm();
  };

  const editUserData = (index: number) => {
    if (index === -1) {
      setPatchValue({ ...initialValues });
    } else {
      const selectedCompany = companyList[index];
      setPatchValue({ ...selectedCompany });
    }
    setEditingIndex(index);
  };

  const deleteUserData = (index: number) => {
    const updatedList = [...companyList];
    updatedList.splice(index, 1);
    setCompanyList(updatedList);
  };

  return (
    <div className="wrapper">
      <div className="form-size ">
        <Formik
          initialValues={patchValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="input-wrapper">
              <label htmlFor="name">Name:</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="form-Control"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="form-Control"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="address">Address:</label>
              <Field
                as="textarea"
                id="address"
                name="address"
                className="form-Control"
              />
              <ErrorMessage name="address" component="div" className="error" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="phone">Phone:</label>
              <Field
                type="text"
                id="phone"
                name="phone"
                className="form-Control"
              />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </thead>
          <tbody>
            {companyList.map((res: FormValues, index: any) => {
              return (
                <tr key={index}>
                  <td>{res.name}</td>
                  <td>{res.email}</td>
                  <td>{res.address}</td>
                  <td>{res.phone}</td>
                  <td>
                    <div className="actions">
                      <button
                        className="edit-btn"
                        onClick={() => editUserData(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => deleteUserData(index)}
                      >
                        {" "}
                        Delete{" "}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserForm;
