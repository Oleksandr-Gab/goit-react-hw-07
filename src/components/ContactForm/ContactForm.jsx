import { useId } from "react";
import { useDispatch } from "react-redux";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { addContact } from "../../redux/contactAPI";

import css from "./ContactForm.module.css";

export default function ContactForm() {
    const nameFieldId = useId();
    const numberFieldId = useId();
    const dispatch = useDispatch();

    const initialValues = {
        name: "",
        number: "",
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Too Short name")
            .max(50, "Too Long name!")
            .required("Name is required!"),
        number: Yup.string()
            .min(3, "Too Short number!")
            .max(50, "Too Long number!")
            .required("Number is required!"),
    });

    const handleSubmit = (values, actions) => {
        dispatch(
            addContact({
                name: values.name,
                number: values.number,
            })
        );
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <Form className={css.form}>
                <label htmlFor={nameFieldId}>Name</label>
                <Field type="text" name="name" id={nameFieldId} />
                <ErrorMessage name="name" component={"span"} />
                <label htmlFor={numberFieldId}>Number</label>
                <Field type="text" name="number" id={numberFieldId} />
                <ErrorMessage name="number" component={"span"} />
                <button className={css.btn} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    );
}
