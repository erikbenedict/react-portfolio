import { Slide } from 'react-awesome-reveal';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ThankYouModal from './ThankYouModal';

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section
      className="p-2 mb-1 lg:mb-4 xl:mb-10 max-w-[75%] md-max-w-[65%] mx-auto"
      id="contact"
    >
      <Slide direction="right" triggerOnce>
        <h2 className="section-title text-4xl md:text-5xl xl:text-6xl text-center mb-8 xl:mb-10">
          Get In Touch
        </h2>
        <p className="text-center mx-auto section-title text-xl md:text-2xl mb-8">
          Interested in working together? Let&rsquo;s connect!
        </p>

        <div className="w-full md:w-96 md:max-w-full mx-auto">
          <div className="p-6 border bg-zinc-400 border-zinc-500 rounded-xl shadow-xl contact-border">
            <form
              ref={form}
              onSubmit={sendEmail}
              id="contact-form"
              name="contact"
              method="POST"
            >
              <label className="block mb-4">
                <span className="text-zinc-800">Your Name</span>
                <input
                  type="text"
                  name="name"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            pl-2
          "
                  placeholder="Full Name"
                  required
                />
              </label>
              <label className="block mb-4">
                <span className="text-zinc-800">Email Address</span>
                <input
                  name="email"
                  type="email"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            pl-2
          "
                  placeholder="example@domain.com"
                  required
                />
              </label>
              <label className="block mb-4">
                <span className="text-zinc-800">Message</span>
                <textarea
                  name="message"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            pl-2
          "
                  rows="5"
                  placeholder="Tell me what you're thinking about..."
                  required
                ></textarea>
              </label>
              <div className="mb-6">
                <button
                  type="submit"
                  className="
                  bg-amber-700 text-zinc-200 font-bold text-sm md:text-xl py-2 px-4 rounded-lg shadow-2xl inline-flex items-center transition ease-in-out hover:-translate-y-1 hover:scale-110
          "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Slide>
      {showModal && <ThankYouModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
