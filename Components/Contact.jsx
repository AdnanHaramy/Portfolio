"use client"
import React from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('key', 'key', form.current, 'key')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    }
  return (
        <section className="contact">
            <div className="contact-container">
                <div className="contact-left">
                    <h2>Contact Me</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group" >
                            <label>Name</label>
                            <input type="text" name="user_name" placeholder="Your Name" />
                        </div>
                        <div className="form-group" >
                            <label>Email</label>
                            <input type="email" name="user_email" placeholder="Your Email" />
                        </div>
                        <div className="form-group" >
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" name="user_email" placeholder="Your Message" />
                        </div>
                    </form>
                </div>
                     <div className="contact-right">
                    <h2>Get in Touch</h2>
                    <div className="contact-logos">
                        <Link href="https://www.upwork.com/freelancers/~014df3fe6f20c06dbd" passHref target="_blank"  >
                            <Image src="/upwork.svg" alt="Logo 1" width={50} height={50} className="logo" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/maher-haramy-38b101160/" passHref target="_blank" >
                            <Image src="/linkedin.svg" alt="Logo 4" width={50} height={50} className="logo" />
                        </Link>
                        <Link href="https://www.facebook.com/maher.haramy.2020" passHref target="_blank" >
                            <Image src="/facebook.svg" alt="Logo 2" width={50} height={50} className="logo" />
                        </Link>
                        <Image src="/whatsapp.svg" alt="Logo 3" width={50} height={50} className="logo" />
                        <Image src="/twitter.svg" alt="Logo 5" width={50} height={50} className="logo" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;
