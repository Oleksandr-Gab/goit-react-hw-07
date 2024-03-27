import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
    const dispatch = useDispatch();
    return (
        <div className={css.container}>
            <div>
                <h4>
                    <IoPerson /> {contact.name}
                </h4>
                <p>
                    <FaPhoneAlt /> {contact.number}
                </p>
            </div>
            <button
                onClick={() => dispatch(deleteContact(contact.id))}
                type="button"
            >
                Delete
            </button>
        </div>
    );
}
