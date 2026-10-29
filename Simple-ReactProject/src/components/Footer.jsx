import { useState } from "react";
import logo from "../assets/images/icons/Logo (7).svg";

const companyLinks = ["About us", "Blog", "Contact us", "Pricing", "Testimonials"];
const supportLinks = ["Help center", "Terms of service", "Legal", "Privacy policy", "Status"];

function SocialIcon({ type }) {
  const paths = {
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></>,
    dribbble: <><circle cx="12" cy="12" r="9" /><path d="M7 4.8c4 4.2 7 9.2 9 15M4 10c5 .5 11-1 15-4M5 17c3-4 8-6 15-5" /></>,
    twitter: <path d="M22 5.9a8 8 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.8 12 12 0 0 1-8.7-4.4 4.2 4.2 0 0 0 1.3 5.6 4.1 4.1 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.3 4.3 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2.4 19a11.9 11.9 0 0 0 18.3-10 8.5 8.5 0 0 0 2-2.1Z" fill="currentColor" stroke="none" />,
    youtube: <><rect x="2.5" y="5" width="19" height="14" rx="4" fill="currentColor" stroke="none" /><path d="m10 9 5 3-5 3z" fill="#263238" stroke="none" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg>;
}

function Footer() {
  const [email, setEmail] = useState("");
  const submitEmail = (event) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-[#263238] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:px-8 lg:px-10 md:grid-cols-[2fr_0.8fr_0.8fr_1.35fr] md:gap-12 md:py-[72px]">
        <div>
          <a href="/" aria-label="Nexcent home" className="inline-flex items-center">
            <img src={logo} alt="Nexcent" className="h-9 w-auto brightness-0 invert" />
          </a>
          <p className="mt-10 text-base leading-8 text-gray-100">Copyright © 2020 Landify UI Kit.<br />All rights reserved</p>
          <div className="mt-10 flex gap-4">
            {["instagram", "dribbble", "twitter", "youtube"].map((item) => <a key={item} href="#" aria-label={item} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3b464d] text-white transition hover:bg-green-600"><SocialIcon type={item} /></a>)}
          </div>
        </div>
        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Support" links={supportLinks} />
        <div>
          <h2 className="text-2xl font-semibold">Stay up to date</h2>
          <form onSubmit={submitEmail} className="mt-7 flex h-12 items-center rounded-lg bg-[#515b60] px-3">
            <label htmlFor="footer-email" className="sr-only">Your email address</label>
            <input id="footer-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-gray-300" />
            <button type="submit" aria-label="Subscribe" className="ml-2 rounded p-1 text-white hover:text-green-300"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg></button>
          </form>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return <div><h2 className="text-2xl font-semibold">{title}</h2><ul className="mt-7 space-y-3 text-base text-gray-100">{links.map((link) => <li key={link}><a href="#" className="transition hover:text-green-300">{link}</a></li>)}</ul></div>;
}

export default Footer;



