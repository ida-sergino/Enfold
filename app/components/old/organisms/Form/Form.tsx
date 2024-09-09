import { useState } from "react";

export default function Form() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/api/submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ name: name, email: email, message: message })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (submitted) {
    return (
      <p className="text-enfold_blue">
        We've received your message, thank you for contacting us!
      </p>
    );
  }

  return (
    <section className="w-full h-auto min-h-72 mx-auto md:py-20 bg-gray">
      <form
        onSubmit={submit}
        className="max-w-3xl h-auto min-h-64 mx-10 md:mx-auto p-8 md:p-20 bg-white shadow-lg rounded"
      >
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Have something in mind?</h2>
            <p className="mb-4">Please enter your project idea with us below:</p>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full px-3 py-2 border rounded placeholder-gray-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-3 py-2 border rounded placeholder-gray-500"
                required
              />
            </div>
            <button type="button" onClick={() => setStep(2)} className="w-full mt-10 bg-enfold_blue text-white py-2 px-4 rounded hover:bg-enfold_blue-dark">
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <div className="mb-4">
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="w-full min-h-40 px-3 py-2 border rounded placeholder-gray-500"
                required
              />
            </div>
            <div className="flex justify-between mt-10">
              <button type="button" onClick={() => setStep(1)} className="bg-enfold_blue text-white py-2 px-4 rounded hover:bg-enfold_blue-dark">
                Back
              </button>
              <button type="button" onClick={() => setStep(3)} className="bg-enfold_blue text-white py-2 px-4 rounded hover:bg-enfold_blue-dark">
                Next
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Review Your Information</h2>
            <p className="mb-2"><strong>Name:</strong> {name}</p>
            <p className="mb-2"><strong>Email:</strong> {email}</p>
            <p className="mb-4"><strong>Message:</strong> {message}</p>
            <div className="flex justify-between">
              <button type="button" onClick={() => setStep(2)} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700">
                Back
              </button>
              <button type="submit" className="bg-enfold_blue text-white py-2 px-4 rounded hover:bg-enfold_blue-dark">
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </section>
  );
}