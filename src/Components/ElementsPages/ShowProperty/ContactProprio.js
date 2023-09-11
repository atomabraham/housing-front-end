import { Form } from 'react-bootstrap'
import '../../../Styles/ShowProperty.css'

function ContactProprio(){
    

    return(
        <>
            <form action='' method=''>
                <Form.Group className="mt-3"  >
                    <Form.Control name="inputContactPhoneShowProp" type="phone"  className="inputFormPost inputContactPhoneShowProp" id="inputContactPhoneShowProp" placeholder="Téléphone" />
                </Form.Group>
                <Form.Group className="mt-3"  >
                    <Form.Control name="inputContactEmailShowProp" type="email"  className="inputFormPost inputContactPhoneShowProp" id="inputContactEmailShowProp" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mt-3"  >
                    <textarea name="inputContactMessageShowProp" type="email"  className="inputFormPost inputContactPhoneShowProp inputContactMessageShowProp" id="inputContactMessageShowProp" placeholder="Message" />
                </Form.Group>
                <button type='button' className='pt-3 pb-3 submitSendMessageShowProp' id='submitSignIn'>Contacter le propriétaire</button>
            </form>
        </>
    )
}

export default ContactProprio