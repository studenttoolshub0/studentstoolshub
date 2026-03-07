"use client";

import { useState } from "react";
import { User, Mail, MessageSquare, Send, CheckCircle, ChevronDown } from "lucide-react";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => { setLoading(false); setDone(true); }, 1200);
    };

    if (done) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-5 shadow-lg shadow-emerald-200">
                    <CheckCircle className="text-white" size={30} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-sm text-slate-500 max-w-xs">
                    Thanks for reaching out. We&apos;ll get back to you within 1–2 business days.
                </p>
                <button
                    onClick={() => { setDone(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 text-sm font-semibold text-indigo-600 hover:underline">
                    Send another message
                </button>
            </div>
        );
    }

    const inputCls = "w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition text-slate-900 placeholder:text-slate-400";
    const labelCls = "block text-sm font-semibold text-slate-700 mb-1.5";

    return (
        <form onSubmit={submit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className={labelCls}>Full Name <span className="text-rose-500">*</span></label>
                    <div className="relative">
                        <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        <input id="name" name="name" type="text" required value={form.name} onChange={handle}
                            placeholder="Your name" className={inputCls} />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className={labelCls}>Email <span className="text-rose-500">*</span></label>
                    <div className="relative">
                        <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        <input id="email" name="email" type="email" required value={form.email} onChange={handle}
                            placeholder="you@university.edu" className={inputCls} />
                    </div>
                </div>
            </div>

            <div>
                <label htmlFor="subject" className={labelCls}>Subject <span className="text-rose-500">*</span></label>
                <div className="relative">
                    <MessageSquare size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    <select id="subject" name="subject" required value={form.subject} onChange={handle}
                        className={`${inputCls} appearance-none`}>
                        <option value="">Select a topic…</option>
                        <option value="gpa-help">GPA / CGPA Help</option>
                        <option value="study-advice">Study Advice</option>
                        <option value="tool-issue">Tool Issue or Bug</option>
                        <option value="content-suggestion">Content Suggestion</option>
                        <option value="partnership">Partnership / Collaboration</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="message" className={labelCls}>Message <span className="text-rose-500">*</span></label>
                <textarea id="message" name="message" required rows={6} value={form.message} onChange={handle}
                    placeholder="Describe your question in detail…"
                    className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition text-slate-900 placeholder:text-slate-400 resize-none" />
            </div>

            <button type="submit" disabled={loading}
                className="w-full py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200">
                {loading
                    ? <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    : <Send size={15} />}
                {loading ? "Sending…" : "Send Message"}
            </button>
            <p className="text-center text-xs text-slate-400">Typical response within 1–2 business days.</p>
        </form>
    );
}
