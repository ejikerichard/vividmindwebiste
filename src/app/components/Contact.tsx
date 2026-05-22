'use client';

import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import { FaMapMarker } from 'react-icons/fa';
import { useActionState, useEffect } from 'react';
import { FormState, submitContactForm } from '@/actions/sendEmail';
import Link from 'next/link';
import { toast } from 'sonner';

const initialState: FormState = {};

const Contact = () => {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message, {
        description: "We'll get back to you within 24 hours",
        duration: 4000,
      });
    } else if (state?.message) {
      toast.error(state.message, {
        description: 'Please resend your message',
        duration: 4000,
      });
    }
  }, [state?.success, state?.message]);

  return (
    <section className="bg-secondary text-white! md:px-10" id="contact">
      <div className="section grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col">
          <h2 className="text-white! text-subheader-small lg:text-header-small font-bold">
            Let’s discuss on something{' '}
            <span className="text-primary">cool</span> together
          </h2>

          <div className="grid gap-6 my-auto py-12 *:flex *:items-center *:gap-3 font-medium text-md lg:text-xl">
            <div className="bg-primary/20 border-2 border-primary px-8 py-3 rounded-lg max-w-max">
              <FaEnvelope />
              <Link href="mailto:info@vividmindgames.com">
                info@vividmindgames.com
              </Link>
            </div>
            <div className="px-8">
              <FaMapMarker />
              <div>Lagos, Nigeria</div>
            </div>
          </div>
          <div className="flex items-center gap-5 text-xl lg:text-2xl">
            <div>
              <Link
                href="https://www.instagram.com/vividmindgames/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </Link>
            </div>
            <div className="bg-primary p-3 lg:p-4 shadow-2xl rounded-full text-xl lg:text-3xl">
              <Link
                href="https://www.facebook.com/vividmindgames/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </Link>
            </div>
            <div>
              <Link
                href="https://www.x.com/vividmindgames/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </Link>
            </div>
            <div className="bg-primary p-3 lg:p-4 shadow-2xl rounded-full text-xl lg:text-3xl">
              <Link
                href="https://www.youtube.com/@VividMindGames"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
        <form
          action={formAction}
          className="bg-white text-accent px-6 py-8 rounded-3xl w-full"
        >
          <div className="grid gap-7 [&_label_span]:pb-1 [&_label_span]:block">
            <div className="grid grid-cols-2 gap-4">
              <label htmlFor="name">
                <span aria-label="name">Name*</span>
                <input
                  type="text"
                  placeholder="Your Name"
                  id="name"
                  name="name"
                  aria-label="name"
                  className={`${state?.errors?.name && 'outline outline-primary'} w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                />
                {state?.errors?.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.errors.name}
                  </p>
                )}
              </label>
              <label htmlFor="email">
                <span aria-label="email">Email*</span>
                <input
                  type="email"
                  placeholder="Your Email"
                  id="email"
                  name="email"
                  aria-label="email"
                  className={`${state?.errors?.email && 'outline outline-primary'} w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                />
                {state?.errors?.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.errors.email}
                  </p>
                )}
              </label>
            </div>
            <label htmlFor="company">
              <span aria-label="company name">Company Name*</span>
              <input
                type="text"
                placeholder="Your Company Name"
                id="company"
                name="companyName"
                aria-label="company name"
                className={`${state?.errors?.companyName && 'outline outline-primary'} w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
              />
              {state?.errors?.companyName && (
                <p className="text-red-500 text-sm mt-1">
                  {state.errors.companyName}
                </p>
              )}
            </label>
            <label htmlFor="subject">
              <span aria-label="subject">Subject*</span>
              <input
                type="text"
                placeholder="Your Subject"
                id="subject"
                name="subject"
                aria-label="subject"
                className={`${state?.errors?.subject && 'outline outline-primary'} w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
              />
              {state?.errors?.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {state.errors.subject}
                </p>
              )}
            </label>
            <label htmlFor="message">
              <span aria-label="message">Message*</span>
              <textarea
                placeholder="Your Message"
                id="message"
                name="message"
                aria-label="message"
                className={`${state?.errors?.message && 'outline outline-primary'} w-full rounded-md border border-gray-300 px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
              ></textarea>
              {state?.errors?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {state.errors.message}
                </p>
              )}
            </label>
            <button
              type="submit"
              disabled={isPending}
              className="cursor-pointer self-start bg-primary text-white font-medium px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              {isPending ? 'Sending Message...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
