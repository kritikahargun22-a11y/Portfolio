import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

function Contact() {
    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true);

        emailjs
            .sendForm(
                "service_ka11trr",
                "template_6m3x1sr",
                form.current,
                "ZiiLTtes-5rg18Z1Y"
            )
            .then(() => {
                setStatus("success");
                setLoading(false);
                form.current.reset();

                setTimeout(() => {
                    setStatus("");
                }, 3000);
            })
            .catch((error) => {
                console.error(error);

                setStatus("error");
                setLoading(false);

                setTimeout(() => {
                    setStatus("");
                }, 3000);
            });
    };

    return (
        <section
            id="contact"
            className="bg-slate-950 text-white py-24 px-8"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Contact <span className="text-cyan-400">Me</span>
                    </h2>

                    <p className="text-gray-400 mt-4 text-lg">
                        Have a project in mind or want to connect? Feel free to reach out.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Left Side */}
                    <div className="space-y-8">

                        <div className="flex items-center gap-5">
                            <FaEnvelope className="text-3xl text-cyan-400" />
                            <div>
                                <h3 className="font-semibold text-xl">Email</h3>
                                <p className="text-gray-400">
                                    kritikahargun22@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <FaPhone className="text-3xl text-cyan-400" />
                            <div>
                                <h3 className="font-semibold text-xl">Phone</h3>
                                <p className="text-gray-400">
                                    +91 XXXXX XXXXX
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <FaMapMarkerAlt className="text-3xl text-cyan-400" />
                            <div>
                                <h3 className="font-semibold text-xl">Location</h3>
                                <p className="text-gray-400">
                                    Punjab, India
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 pt-4 text-3xl">
                            <a
                                href="https://github.com/kritikahargun22-a11y"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-400 transition"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-400 transition"
                            >
                                <FaLinkedin />
                            </a>
                        </div>

                    </div>

                    {/* Right Side */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-6"
                    >

                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            required
                            className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
                        />

                        <input
                            type="email"
                            name="from_email"
                            placeholder="Your Email"
                            required
                            className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
                        />

                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Your Message"
                            required
                            className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-cyan-500 hover:bg-cyan-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                        {status === "success" && (
                            <p className="text-green-400 font-medium">
                                ✅ Message sent successfully!
                            </p>
                        )}

                        {status === "error" && (
                            <p className="text-red-400 font-medium">
                                ❌ Failed to send message. Please try again.
                            </p>
                        )}

                    </form>

                </div>
            </div>
        </section>
    );
}

export default Contact;