"use client";

import React, { useState } from "react";

const navItems = ["Products", "Services", "Apps", "Pricing", "About"];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="animate-in fade-in slide-in-from-top-4 absolute inset-x-0 top-0 z-50 flex items-center justify-between bg-transparent px-6 py-4 font-[family-name:var(--font-geist-sans)] duration-700 md:px-12 lg:px-24 xl:px-40">
      <a href="/" aria-label="Home">
        <svg
          width="151"
          height="36"
          viewBox="0 0 151 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="invert"
        >
          <path d="M38.786 14.72q.696-.912 1.896-1.536t2.712-.624q1.728 0 3.144.864 1.44.84 2.256 2.376t.816 3.528-.816 3.576q-.816 1.56-2.256 2.448-1.416.864-3.144.864-1.512 0-2.688-.6-1.176-.624-1.92-1.536v8.208H36.05V12.776h2.736zm8.04 4.608q0-1.368-.576-2.352-.552-1.008-1.488-1.512a3.86 3.86 0 0 0-1.968-.528q-1.032 0-1.968.528-.912.528-1.488 1.536-.552 1.008-.552 2.376t.552 2.4q.576 1.008 1.488 1.536.936.528 1.968.528 1.056 0 1.968-.528.936-.552 1.488-1.584.576-1.032.576-2.4m8.226-4.632q.6-1.008 1.584-1.56 1.008-.576 2.376-.576v2.832h-.696q-1.608 0-2.448.816-.816.816-.816 2.832V26h-2.736V12.776h2.736zm18.595 4.368q0 .744-.096 1.344H63.447q.12 1.584 1.176 2.544t2.592.96q2.208 0 3.12-1.848h2.952q-.6 1.824-2.184 3-1.56 1.152-3.888 1.152-1.896 0-3.408-.84a6.3 6.3 0 0 1-2.352-2.4q-.84-1.56-.84-3.6t.816-3.576q.84-1.56 2.328-2.4 1.512-.84 3.456-.84 1.872 0 3.336.816a5.75 5.75 0 0 1 2.28 2.304q.816 1.464.816 3.384M70.79 18.2q-.024-1.512-1.08-2.424t-2.616-.912q-1.416 0-2.424.912-1.008.888-1.2 2.424zm8.284-3.456q.696-.96 1.896-1.56 1.224-.624 2.712-.624 1.752 0 3.168.84t2.232 2.4q.816 1.536.816 3.528t-.816 3.576q-.816 1.56-2.256 2.448-1.416.864-3.144.864-1.536 0-2.736-.6-1.176-.6-1.872-1.536V26H76.34V8.24h2.736zm8.04 4.584q0-1.368-.576-2.352-.552-1.008-1.488-1.512a3.86 3.86 0 0 0-1.968-.528q-1.032 0-1.968.528-.912.528-1.488 1.536-.552 1.008-.552 2.376t.552 2.4q.576 1.008 1.488 1.536.936.528 1.968.528 1.056 0 1.968-.528.936-.552 1.488-1.584.576-1.032.576-2.4m17.466-6.552V26h-2.736v-1.56q-.648.816-1.704 1.296a5.4 5.4 0 0 1-2.208.456q-1.56 0-2.808-.648-1.224-.648-1.944-1.92-.696-1.272-.696-3.072v-7.776h2.712v7.368q0 1.776.888 2.736.888.936 2.424.936t2.424-.936q.912-.96.912-2.736v-7.368zm5.002-1.752q-.744 0-1.248-.504a1.7 1.7 0 0 1-.504-1.248q0-.744.504-1.248a1.7 1.7 0 0 1 1.248-.504q.72 0 1.224.504t.504 1.248-.504 1.248a1.67 1.67 0 0 1-1.224.504m1.344 1.752V26h-2.736V12.776zm6.328-4.536V26h-2.736V8.24zm6.784 6.768v7.32q0 .744.336 1.08.36.312 1.2.312h1.68V26h-2.16q-1.848 0-2.832-.864t-.984-2.808v-7.32h-1.56v-2.232h1.56V9.488h2.76v3.288h3.216v2.232zm17.714-2.232V26h-2.736v-1.56q-.648.816-1.704 1.296a5.4 5.4 0 0 1-2.208.456q-1.56 0-2.808-.648-1.224-.648-1.944-1.92-.696-1.272-.696-3.072v-7.776h2.712v7.368q0 1.776.888 2.736.888.936 2.424.936t2.424-.936q.912-.96.912-2.736v-7.368zm5.002-1.752q-.744 0-1.248-.504a1.7 1.7 0 0 1-.504-1.248q0-.744.504-1.248a1.7 1.7 0 0 1 1.248-.504q.72 0 1.224.504t.504 1.248-.504 1.248a1.67 1.67 0 0 1-1.224.504m1.344 1.752V26h-2.736V12.776z" fill="#000" />
          <path d="m7.25 10.86 6 3.366 6-3.367m-12 20.176v-6.721l-6-3.367m24 0-6 3.367v6.72M1.61 14.42l11.64 6.54 11.64-6.54M13.25 34V20.947m12 5.18v-10.36c0-.454-.124-.9-.358-1.293a2.63 2.63 0 0 0-.975-.947l-9.333-5.18a2.73 2.73 0 0 0-2.667 0l-9.333 5.18a2.63 2.63 0 0 0-.976.947 2.54 2.54 0 0 0-.358 1.293v10.36c0 .454.124.9.358 1.293s.57.72.976.947l9.333 5.18a2.73 2.73 0 0 0 2.667 0l9.333-5.18a2.63 2.63 0 0 0 .975-.947 2.53 2.53 0 0 0 .358-1.293" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      <div className="hidden items-center gap-2 rounded-full border border-[#F5F1E8]/20 bg-[#F5F1E8]/10 px-1 py-1 backdrop-blur-md md:flex">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className={`rounded-full px-4 py-1.5 text-sm transition-all duration-300 ${
              item === "Products"
                ? "border border-[#F5F1E8]/30 bg-[#F5F1E8]/90 font-medium text-[#25211D] hover:bg-[#F5F1E8]"
                : "text-[#F5F1E8]/70 hover:scale-105 hover:text-[#F5F1E8]"
            }`}
          >
            {item}
          </a>
        ))}
      </div>

      <button className="group hidden cursor-pointer items-center gap-2.5 rounded-full border border-[#F5F1E8]/15 bg-[#F5F1E8]/10 py-2 pl-5 pr-2 text-sm font-medium text-[#F5F1E8] backdrop-blur-md transition-all duration-300 hover:bg-[#F5F1E8]/20 md:flex">
        Get started
        <span className="flex size-7 items-center justify-center rounded-full bg-[#D8C8AD] transition-transform duration-300 group-hover:translate-x-0.5">
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="#25211D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </button>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        className="flex cursor-pointer flex-col gap-1.5 border-0 bg-transparent p-1 md:hidden"
      >
        <span className={`block h-0.5 w-6 bg-[#F5F1E8] transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block h-0.5 w-6 bg-[#F5F1E8] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-[#F5F1E8] transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      <div
        className={`absolute left-0 top-full z-50 flex w-full flex-col gap-1 border-t border-[#F5F1E8]/15 bg-[#25211D]/95 p-5 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            onClick={() => setMenuOpen(false)}
            className={`rounded-lg px-4 py-2.5 text-sm transition-colors ${
              item === "Products"
                ? "bg-[#F5F1E8]/10 font-medium text-[#F5F1E8]"
                : "text-[#F5F1E8]/70 hover:bg-[#F5F1E8]/10 hover:text-[#F5F1E8]"
            }`}
          >
            {item}
          </a>
        ))}
        <button className="mt-3 flex w-fit cursor-pointer items-center justify-center gap-2.5 rounded-full border-0 bg-[#D8C8AD] px-5 py-2.5 text-sm font-medium text-[#25211D] transition-transform duration-300 hover:scale-[1.02]">
          Get started
          <span className="flex size-7 items-center justify-center rounded-full bg-[#25211D]">
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="#F5F1E8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
