import { Slide } from 'react-awesome-reveal';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  // TODO: create "Thank You" modal on submit of contact form

  return (
    <Slide direction="right">
      <section
        className="p-2 mb-1 lg:mb-4 xl:mb-10 max-w-[75%] md-max-w-[65%] mx-auto"
        id="contact"
      >
        <h2 className="section-title text-4xl md:text-5xl xl:text-6xl text-center mb-8 xl:mb-10">
          Get In Touch
        </h2>
        <p className="text-center mx-auto section-title text-xl md:text-2xl mb-5">
          Interested in working together? Let&rsquo;s connect!
        </p>

        <div className="w-full md:w-96 md:max-w-full mx-auto">
          <div className="p-6 border bg-zinc-400 border-zinc-500 sm:rounded-xl">
            <form
              ref={form}
              onSubmit={sendEmail}
              id="contact-form"
              name="contact"
              method="POST"
            >
              <label className="block mb-6">
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
              <label className="block mb-6">
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
              <label className="block mb-6">
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
            h-10
            px-5
            text-slate-100
            bg-slate-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-slate-800
          "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Slide>
  );
}
