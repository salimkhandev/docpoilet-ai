import React from "react";

// Salim Khan - Simple responsive resume component using Tailwind CSS
// Usage: copy this file into your React project (e.g. src/components/ResumeSalim.jsx)
// Ensure Tailwind CSS is set up in your project. Then: import ResumeSalim from './ResumeSalim';

export default function ResumeSalim() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12 flex items-center justify-center">
      <article className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3">
        {/* Left column - Photo & contact */}
        <section className="bg-gradient-to-b from-sky-600 to-indigo-600 text-white p-6 md:p-8 flex flex-col items-center gap-4 md:col-span-1">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white">
            {/* simple placeholder avatar */}
            <svg viewBox="0 0 128 128" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="avatar">
              <rect width="128" height="128" fill="#0ea5e9" />
              <g fill="#fff">
                <circle cx="64" cy="42" r="20" />
                <path d="M24 104c0-22 18-40 40-40s40 18 40 40H24z" />
              </g>
            </svg>
          </div>

          <h1 className="text-2xl font-semibold">Salim Khan</h1>
          <p className="text-sm opacity-90">Full Stack Developer</p>

          <div className="w-full mt-3 text-sm">
            <p className="flex items-center gap-2"><span className="font-medium">📍</span> Peshawar, Pakistan</p>
            <p className="flex items-center gap-2 mt-1"><span className="font-medium">📧</span> salim@example.com</p>
            <p className="flex items-center gap-2 mt-1"><span className="font-medium">🔗</span> github.com/salimkhandev</p>
            <p className="flex items-center gap-2 mt-1"><span className="font-medium">💼</span> linkedin.com/in/salimkhandev</p>
          </div>

          <div className="mt-auto w-full">
            <a
              href="#contact"
              className="block text-center w-full bg-white text-sky-600 font-semibold py-2 rounded-md hover:opacity-95"
            >
              Contact Me ✉️
            </a>
          </div>
        </section>

        {/* Right column - Details */}
        <section className="p-6 md:p-8 md:col-span-2">
          {/* Summary */}
          <header>
            <h2 className="text-lg font-semibold">Professional Summary</h2>
            <p className="mt-2 text-sm text-gray-600">
              Practical Full Stack Developer focusing on React, Node.js and PostgreSQL. I build responsive, accessible web apps and RESTful APIs. Seeking roles where I can learn and contribute. 🚀
            </p>
          </header>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skills */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800">Skills</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {[
                  'React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'Git'
                ].map((skill) => (
                  <li key={skill} className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-800">
                    {skill}
                  </li>
                ))}
              </ul>

              <h3 className="mt-6 text-sm font-semibold text-gray-800">Tools</h3>
              <p className="mt-2 text-sm text-gray-600">VSCode · pnpm/yarn · Docker (basic) · Postman · Figma (basic)</p>
            </div>

            {/* Experience / Projects */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800">Selected Projects</h3>

              <article className="mt-3">
                <h4 className="text-sm font-medium">Task Tame — Note app (React + Tailwind)</h4>
                <p className="text-xs text-gray-600 mt-1">Offline-capable notes app with installable PWA behaviour, localStorage persistence, dark/light auto-switch. ✅</p>
                <p className="text-xs text-gray-500 mt-1">Github: github.com/salimkhandev/task-tame</p>
              </article>

              <article className="mt-4">
                <h4 className="text-sm font-medium">Attendance System — (React + PostgreSQL)</h4>
                <p className="text-xs text-gray-600 mt-1">Attendance recording & reports with duplicate-prevention logic and pie chart visualisation.</p>
                <p className="text-xs text-gray-500 mt-1">Github: github.com/salimkhandev/attendance-system</p>
              </article>

              <article className="mt-4">
                <h4 className="text-sm font-medium">Library App — (Java + MySQL)</h4>
                <p className="text-xs text-gray-600 mt-1">Semester project: desktop app for library management (search, add, remove books).</p>
              </article>
            </div>
          </div>

          {/* Education & Languages */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-800">Education</h3>
              <p className="mt-2 text-sm text-gray-600">BSc Computer Science — University (Year)</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-800">Languages</h3>
              <p className="mt-2 text-sm text-gray-600">English (Fluent) · Urdu (Native - optional to mention)</p>
            </div>
          </div>

          {/* Footer with small CTA */}
          <footer className="mt-8 border-t pt-4">
            <p className="text-sm text-gray-600">Want this as a printable one-page PDF? Print from browser or use an HTML-to-PDF tool. 🖨️</p>
          </footer>
        </section>
      </article>
    </main>
  );
}
