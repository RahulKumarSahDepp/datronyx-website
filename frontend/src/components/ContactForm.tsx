// components/ContactForm.tsx (REDESIGNED TO DARK THEME)
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    // Placeholder function for form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would send data to an API here
        setIsSubmitted(true);
        console.log("Form submitted!");
    };

    // --- DARK THEME STYLES ---
    const darkBg = 'bg-[#0A061F]'; // Dark section background
    const cardBg = 'bg-gray-800/50'; // Dark card background
    const inputBg = 'bg-gray-900 border-indigo-700/50'; // Darker input field
    const primaryText = 'text-white';
    const secondaryText = 'text-gray-300';
    const accentColor = 'text-indigo-400';
    const labelClasses = `block text-sm font-semibold mb-2 ${secondaryText} uppercase`; 
    
    // Updated input classes for dark theme
    const inputClasses = `w-full p-4 rounded-lg ${inputBg} text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200`; 
    // -------------------------

    if (isSubmitted) {
        return (
            <div className={`text-center py-32 ${darkBg} min-h-[80vh] flex flex-col items-center justify-center`}>
                <h2 className={`text-5xl font-extrabold ${accentColor} mb-6`}>Message Sent!</h2>
                <p className={`text-xl ${secondaryText} max-w-md mx-auto`}>Thank you for contacting us. We appreciate your interest and will get back to you shortly.</p>
                <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors transform hover:-translate-y-1"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <section className={`py-24 md:py-32 ${darkBg}`}> {/* Applied dark background */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* LEFT SIDE — FIXED TEXT & VISUAL FOCUS */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-10 pt-4"
                    >
                        <h1 className={`text-4xl md:text-5xl font-bold ${primaryText} leading-tight`}>
                        Your data holds potential.
                        <span className={`block ${accentColor}`}>Let’s unlock it together.</span>
                        </h1>
                        <p className={`text-lg ${secondaryText} leading-relaxed max-w-lg`}>
                        Whether you want to modernize your data infrastructure, build intelligent AI systems,
                        automate workflows, or simply understand how to leverage your company’s data —
                        we’re here to help.
                        </p>
                        <p className={`text-lg ${secondaryText} leading-relaxed max-w-lg`}>
                        Fill out the form and our team will reach out shortly.
                        We look forward to starting the conversation.
                        </p>

                        {/* Professional Contact Card */}
                        <div className={`mt-12 p-6 rounded-xl shadow-md border border-indigo-900/50 ${cardBg} flex items-center space-x-4`}>
                            <div className="relative w-16 h-16 flex-shrink-0">
                                <Image
                                    src="/images/profile_picture.png" 
                                    alt="Rahul Kumar Sah"
                                    fill={true}
                                    className="object-cover rounded-full border-2 border-indigo-400"
                                    priority
                                />
                            </div>
                            <div>
                                <p className={`text-lg font-bold ${primaryText}`}>Rahul Kumar Sah</p>
                                <p className={`text-sm ${accentColor}`}> Founder & CEO </p>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* RIGHT SIDE — CONTACT FORM */}
                    <motion.form 
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className={`p-8 md:p-12 rounded-2xl shadow-2xl border border-indigo-900/50 ${cardBg} space-y-7`} // Darkened form background
                    >
                        <h2 className={`text-3xl font-extrabold ${primaryText} mb-6 border-b pb-4 border-indigo-900`}>
                        Start the Conversation
                        </h2>
                        
                        {/* Form Fields */}
                        <div className="space-y-7">
                            <div className="space-y-2">
                                <label className={labelClasses}>First and Last Name <span className="text-red-400">*</span></label>
                                <input type="text" required placeholder="Your full name" className={inputClasses} />
                            </div>
                            <div className="space-y-2">
                                <label className={labelClasses}>E-mail <span className="text-red-400">*</span></label>
                                <input type="email" required placeholder="your@email.com" className={inputClasses} />
                            </div>
                            <div className="space-y-2">
                                <label className={labelClasses}>Telephone <span className="text-red-400">*</span></label>
                                <input type="tel" required placeholder="+XX XXX-XXX-XXX" className={inputClasses} />
                            </div>
                            <div className="space-y-2">
                                <label className={labelClasses}>Your Message <span className="text-red-400">*</span></label>
                                <textarea rows={5} required placeholder="Type your message or inquiry here." className={`${inputClasses} resize-none`} />
                            </div>
                        </div>

                        {/* Legal and CTA */}
                        <div className="pt-4 space-y-4">
                            <p className={`text-xs ${secondaryText} leading-relaxed`}>
                            The controller of the personal data provided through the above form is Datronyx.
                            Read our <Link href="/privacy-policy" className={`font-medium ${accentColor} hover:text-indigo-300`}>Privacy Policy</Link>.
                            <br />
                            <span className="font-semibold text-gray-400">*</span> Required Field
                            </p>
                            <button
                                type="submit"
                                className="w-full py-4 bg-indigo-600 text-white font-extrabold rounded-xl shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-0.5"
                            >
                                Send message
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}