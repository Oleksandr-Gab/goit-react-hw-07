import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

import css from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);

    return (
        <>
            {contacts.length == 0 ? (
                <p>No contacts available!</p>
            ) : (
                <ul className={css.contactList}>
                    {contacts.map((contact) => (
                        <li key={contact.id}>
                            <Contact contact={contact} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
