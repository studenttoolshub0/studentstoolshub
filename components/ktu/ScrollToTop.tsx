"use client";

import React from "react";

export default function ScrollToTop() {
  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
      className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black hover:bg-slate-50 transition-all shadow-lg"
    >
      Back to Calculator
    </button>
  );
}
