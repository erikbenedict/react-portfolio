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
          className="bg-slate-700 text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
