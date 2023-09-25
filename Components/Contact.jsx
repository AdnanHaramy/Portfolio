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
