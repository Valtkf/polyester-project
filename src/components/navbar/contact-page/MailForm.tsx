import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar";
import { toast, Toaster } from "react-hot-toast";

export default function MailForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formElements = form.current
        .elements as HTMLFormControlsCollection & {
        user_email: HTMLInputElement;
        subject: HTMLInputElement;
        message: HTMLTextAreaElement;
      };

      const email = formElements.user_email.value;
      const subject = formElements.subject.value;
      const message = formElements.message.value;

      // Validation des champs
      if (!email || !subject || !message) {
        toast.error("Veuillez remplir tous les champs !");
        return;
      }

      emailjs
        .sendForm(
          "service_qg462ko",
          "template_llv17o9",
          form.current,
          "2GSQw18ILAthkag4P"
        )
        .then(
          () => {
            toast.success("Mail envoyé!");
          },
          (error) => {
            toast.error("Échec de l'envoi du mail...");
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.error("Form reference is null");
    }
  };

  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md pt-[150px]">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="user_email" // ajout du nom pour EmailJS
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject" // ajout du nom pour EmailJS
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message" // ajout du nom pour EmailJS
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="bg-indigo-500 border-2 border-indigo-600 hover:bg-indigo-600 text-white active:bg-indigo-500 active:border-indigo-400 font-medium text-center py-2 px-4 w-1/4 transition-all duration-300 rounded"
              >
                Send message
              </button>
              <Toaster position="bottom-right" reverseOrder={false} />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
