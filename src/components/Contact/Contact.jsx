export default function Contact() {
  return (
    <>
      <section className="mb-4 contact-container" id="contact">
        <h2 className="h1-responsive font-weight-bold text-center my-4 contact-header">
          GET IN TOUCH
        </h2>
        <p className="text-center w-responsive mx-auto contact-p">
          Interested in working together? Let&rsquo;s connect!
        </p>

        <div className="w-full md:w-96 md:max-w-full mx-auto">
          <div className="p-6 border border-gray-300 sm:rounded-md">
            <form
              id="contact-form"
              name="contact-form"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              method="POST"
              action="https://herotofu.com/start"
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <label className="block mb-6">
                <span className="text-gray-700">Your Name</span>
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
          "
                  placeholder="Full Name"
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Email Address</span>
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
          "
                  placeholder="example@domain.com"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Subject</span>
                <input
                  name="subject"
                  type="text"
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
          "
                  placeholder="Enter your Subject"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Message</span>
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
          "
                  rows="5"
                  placeholder="Tell me what you're thinking about..."
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
