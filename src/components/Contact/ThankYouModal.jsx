export default function ThankYouModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 rounded-lg">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
        <p className="text-lg font-semibold mb-4">
          Thank you for reaching out!
        </p>
        <p className="text-lg font-semibold mb-4">
          I will be in touch as soon as possible
        </p>
        <button
          className="bg-amber-700 text-zinc-200 font-bold text-sm md:text-xl py-2 px-4 rounded-lg shadow-2xl inline-flex items-center transition ease-in-out hover:-translate-y-1 hover:scale-110"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
