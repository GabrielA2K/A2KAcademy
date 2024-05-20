import './ContactCard.css'

export default function ContactCard(contact) {

    return (
        <>
            <a href={contact.link} target="_blank" className={"contact_card "+contact.handler}>
              <div className="contact_card_header">
                <div className="icon">{contact.icon}</div>
                <p className="contact_holder font-heavy">A2K<br/><span className='font-bold'>Academy</span></p>
              </div>
              <p className="contact_main font-bold">{contact.details}</p>
              <p className="contact_handler font-bold">{contact.handler}</p>
            </a>
        </>
    )
}