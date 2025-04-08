import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "error" or "success"

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(""); // Reset message on every submission

    try {
      // Submit the form to the server
      const response = await fetch(
        "https://apexx-landing-backend.vercel.app/api/subscribe/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      // Parse the response to get the message from server
      const data = await response.json();

      if (response.ok) {
        setMessage(
          data.message ||
            "Thanks for subscribing! We'll notify you when we launch."
        );
        setMessageType("success");
        setEmail("");
        setTimeout(() => {
          setMessage("");
        }, 5000);
      } else {
        // Use the error message sent from the server
        setMessage(
          data.message || "Oops! Something went wrong. Please try again."
        );
        setMessageType("error");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    } catch (error) {
      // Handle fetch or other errors
      setMessage("Network error. Please check your connection and try again.");
      setMessageType("error");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }

    setIsSubmitting(false);
  };

  return (
    <section className="py-20" id="join-waitlist">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-yellow-600/15 to-black rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
            {/* Logo */}
            <img
              src="logo.png"
              alt="CrashX Logo"
              className="h-14 mx-auto mb-4 opacity-0 animate-fade-in"
            />

            {/* Mantra */}
            <h2 className="text-3xl md:text-4xl font-medium mb-2 opacity-0 animate-fade-in">
              Define your <span className="italic text-red-600 ">x</span>
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/80 mb-8 opacity-0 animate-fade-in [animation-delay:200ms]">
              The ultimate crash game experience is launching soon. Stay sharp.
            </p>

            {/* Email Collection Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
            >
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
                className="px-4 py-2 rounded-md text-black w-80"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-600 text-white px-6 py-2 rounded-md"
              >
                {isSubmitting ? "Submitting..." : "Join waitlist"}
              </Button>
            </form>

            {/* Message After Form Submission */}
            {message && (
              <p
                className={`mt-4 text-white transition-all duration-500 ${
                  messageType === "error"
                    ? "bg-red-500 border-red-700 text-white p-2 rounded-md opacity-100 animate-fade-in"
                    : "bg-green-500 border-green-700 text-white p-2 rounded-md opacity-100 animate-fade-in"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
