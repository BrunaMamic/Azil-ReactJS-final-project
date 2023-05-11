/* eslint-disable @typescript-eslint/no-explicit-any */
import ListContactsData from "../listContactsData"

const ListContacts = (props:any) => {
    return(<div className="listContacts">
        {props.contactInfo.map((contacts:any) => (
            <ListContactsData
            key = {contacts.id}
            firstName = {contacts.firstName}
            lastName = {contacts.lastName}
            email = {contacts.email}
            message = {contacts.message}
            />
        )
        )}
    </div>
    )
}
export default ListContacts