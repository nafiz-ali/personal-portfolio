
import React, { useState, useRef } from 'react';
import Section from './Section';
import { SECTION_IDS } from '../constants';

// This tells TypeScript that 'emailjs' is a global variable from the script in index.html
declare const emailjs: any;

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const GithubIcon: React.FC<{className?: string}> = ({className = "h-8 w-8"}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
         <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
    </svg>
);

const CONTACT_EMAIL = "syednafizali123@gmail.com";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
        setStatus('An error occurred. Please try again.');
        return;
    }

    setStatus('Sending...');

    // --- IMPORTANT: EMAILJS SETUP (STEP 2 of 2) ---
    // To make this form work, you need to provide your Service ID and Template ID.
    // 1. In your EmailJS account, go to "Email Services", add a service (e.g., Gmail), and copy its "Service ID".
    // 2. Go to "Email Templates", create a new template, and copy its "Template ID".
    // 3. Make sure your template uses these exact variables: {{name}}, {{email}}, and {{message}}.
    // 4. Paste your IDs below to activate the form.
    const serviceID = 'service_nafizali'; // <-- PASTE YOUR SERVICE ID HERE
    const templateID = 'template_7lrbf1f'; // <-- PASTE YOUR TEMPLATE ID HERE

    emailjs.sendForm(serviceID, templateID, form.current)
      .then(() => {
        setStatus('Message sent successfully!');
        form.current?.reset();
        setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
      }, (error: any) => {
        console.error('EMAILJS FAILED...', error);
        setStatus('Failed to send message. Please try again later.');
        setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
      });
  };

  return (
    <Section id={SECTION_IDS.contact} title="Get In Touch">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-400 mb-10">
          Have a project in mind or just want to say hello? My inbox is always open.
          Feel free to reach out via my socials or the form below.
        </p>

        <div className="flex justify-center items-center gap-10 mb-12">
            <a href="https://github.com/nafiz-ali" target="_blank" rel="noopener noreferrer" aria-label="Github Profile" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
                <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/sd-nafiz-ali/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
                <LinkedinIcon />
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} aria-label={`Send an email to ${CONTACT_EMAIL}`} className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
                <MailIcon />
            </a>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              className="w-full bg-gray-900/50 border border-purple-500/30 rounded-md p-3 text-white transition-all duration-300 input-glow"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              className="w-full bg-gray-900/50 border border-purple-500/30 rounded-md p-3 text-white transition-all duration-300 input-glow"
            />
          </div>
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows={6} 
            required
            className="w-full bg-gray-900/50 border border-purple-500/30 rounded-md p-3 text-white transition-all duration-300 input-glow"
          ></textarea>
          <button 
            type="submit"
            className="bg-cyan-600 text-white font-bold py-3 px-10 rounded-full text-lg transition-all duration-300 button-glow w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status === 'Sending...'}
          >
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {status && status !== 'Sending...' && (
          <p className={`mt-6 text-glow ${status.startsWith('Failed') ? 'text-red-400' : 'text-green-400'}`}>{status}</p>
        )}
      </div>
    </Section>
  );
};

export default Contact;
