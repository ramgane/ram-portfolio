import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { POST } from "../api/config";
import toast from 'react-hot-toast';
import { useState } from "react";

const ContactForm = () => {
    // ✅ Validation schema
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, "Name must be at least 3 characters")
            .required("Name is required"),

        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),

        subject: Yup.string()
            .min(5, "Subject must be at least 5 characters")
            .required("Subject is required"),

        message: Yup.string()
            .min(20, "Project brief must be at least 20 characters")
            .required("Project brief is required"),
    });
    const [loading, setLoading] = useState(false);
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                }}
                validationSchema={validationSchema}
                validateOnChange
                validateOnBlur
                onSubmit={async (values, { resetForm }) => {
                    console.log("FORM DATA 👉", values);
                    setLoading(true);

                    try {
                        // ✅ send form values to backend
                        const ContactRes = await POST("/api/email/send", values);

                        if (ContactRes?.success) {
                            toast.success("Email Sent Successfully", {
                                style: {
                                    background: "#f0fdf4",
                                    color: "#166534",
                                    border: "1px solid #bbf7d0",
                                },
                                iconTheme: {
                                    primary: "#22c55e",
                                    secondary: "#f0fdf4",
                                },
                            });

                            resetForm(); // ✅ reset only on success
                        } else {
                            toast.error("Email Failed. Please contact via WhatsApp", {
                                style: {
                                    background: "#fef2f2",
                                    color: "#651616",
                                    border: "1px solid #fecaca",
                                },
                                iconTheme: {
                                    primary: "#c53222",
                                    secondary: "#fef2f2",
                                },
                            });
                        }
                    } catch (error) {
                        console.error("Data fetch failed:", error);

                        toast.error("Something went wrong. Try again later", {
                            style: {
                                background: "#fef2f2",
                                color: "#651616",
                                border: "1px solid #fecaca",
                            },
                            iconTheme: {
                                primary: "#c53222",
                                secondary: "#fef2f2",
                            },
                        });
                    } finally {
                        setLoading(false);
                    }
                }}

            >
                {({ touched, errors }) => (
                    <Form className="space-y-6">
                        {/* Name + Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-400">
                                    Your Name
                                </label>
                                <Field
                                    name="name"
                                    placeholder="John Doe"
                                    className={`w-full bg-white/5 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary ${touched.name && errors.name ? "ring-2 ring-red-500" : ""
                                        }`}
                                />
                                <ErrorMessage
                                    name="name"
                                    component="p"
                                    className="text-red-400 text-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-400">
                                    Email Address
                                </label>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className={`w-full bg-white/5 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary ${touched.email && errors.email ? "ring-2 ring-red-500" : ""
                                        }`}
                                />
                                <ErrorMessage
                                    name="email"
                                    component="p"
                                    className="text-red-400 text-sm"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-400">
                                Subject
                            </label>
                            <Field
                                name="subject"
                                placeholder="Project Inquiry"
                                className={`w-full bg-white/5 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary ${touched.subject && errors.subject ? "ring-2 ring-red-500" : ""
                                    }`}
                            />
                            <ErrorMessage
                                name="subject"
                                component="p"
                                className="text-red-400 text-sm"
                            />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-400">
                                Project Brief
                            </label>
                            <Field
                                as="textarea"
                                name="message"
                                rows="5"
                                placeholder="Tell me about your project, goals, and timeline..."
                                className={`w-full bg-white/5 rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-primary ${touched.message && errors.message
                                    ? "ring-2 ring-red-500"
                                    : ""
                                    }`}
                            />
                            <ErrorMessage
                                name="message"
                                component="p"
                                className="text-red-400 text-sm"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-4 rounded-xl font-black text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                        >
                            {loading ? 'Sending Proposal.....' : 'Send Proposal'}
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;
