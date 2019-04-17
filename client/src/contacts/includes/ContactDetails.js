import React from 'react';

const ContactsDatalist = () => {
    return (
       
        <section id="contact-details">
              <section>
                  <span><i className="flaticon-placeholder"></i> <a href="https://www.google.com/maps?ll=40.185985,44.521215&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=4187637981239840510" target="_blank"  rel="noopener noreferrer">ք. Երևան, Իսահակյան 18</a></span>
                  <span><i className="flaticon-paper-plane"></i> <a href="mailto:basic@it-center.am">basic@it-center.am</a></span>
                  <span className="digit"><i className="flaticon-phone"></i> <a href="tel:+37411659988">(011) 65-99-88</a></span>
                  <span className="digit"><i className="flaticon-smartphone"></i> <a href="tel:+37444659988">(044) 65-99-88</a></span>
              </section>
            <section id="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.038529541256!2d44.5213193152176!3d40.18595597939264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abce7321b00db%3A0x3a1d7a8e8fbc0efe!2sBasic+IT+Center!5e0!3m2!1sen!2s!4v1543176861791"
                    frameBorder="0" allowFullScreen title={'Map'}></iframe>
            </section>
          </section>
       
    )
}
export default ContactsDatalist