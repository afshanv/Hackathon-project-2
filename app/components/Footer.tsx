'use client';

import * as React from 'react';

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (email: string) => {
    console.log('Newsletter subscription:', email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const emailInput = form.email.value; // Get the email value from the form input
    handleNewsletterSubmit(emailInput);
  };

  return (
    <div className="flex overflow-hidden flex-col">
      {/* Top section of the footer */}
      <div className="flex flex-col justify-center items-center p-16 w-full bg-white shadow-sm max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start w-full max-w-[1320px] max-md:max-w-full">
          
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-start">
            <div className="flex gap-2 items-center text-2xl font-semibold leading-tight whitespace-nowrap text-slate-800">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/578edb9d5a9b39d140a1e11654319e8a2342f7039cfaf451ce00c7f2910dc8d1?apiKey=327e5b6545924a70ba03a6acff559d29&"
                alt="Comforty logo"
                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
              />
              <div className="self-stretch my-auto">Comforty</div>
            </div>
            <div className="self-stretch mt-6 text-base leading-6 opacity-60 text-slate-800">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
              <br />
              Cras egestas purus
            </div>

            {/* Social Icons */}
            <div className="flex gap-1 items-start mt-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/691a3e68bc78abd2449db462e0af4a97387f5ccecc9896d7a33b245c1ee2f126?apiKey=327e5b6545924a70ba03a6acff559d29&"
                alt="Social media icon 1"
                className="object-contain shrink-0 aspect-square w-[38px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/9e5d7c2564fa566f5791b28669adbe5a2b878d439eae7a603a0605ab412fbdf5?apiKey=327e5b6545924a70ba03a6acff559d29&"
                alt="Social media icon 2"
                className="object-contain shrink-0 aspect-square w-[38px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/63b1d8c8eec6e961f1ea6d55b05d5ee4cd5daba0a47fb6a80bc7aa8cf8218138?apiKey=327e5b6545924a70ba03a6acff559d29&"
                alt="Social media icon 3"
                className="object-contain shrink-0 aspect-square w-[38px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/214460a5170de1a77ff6a067006314758783b1c626849b75efef32df9ea4b6e9?apiKey=327e5b6545924a70ba03a6acff559d29&"
                alt="Social media icon 4"
                className="object-contain shrink-0 aspect-square w-[38px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/11578576235b006a7e89506c8489e14673cb978914c8bde0317401388f99c35b?apiKey=327e5b6545924a70ba03a6acff559d29&"
                alt="Social media icon 5"
                className="object-contain shrink-0 aspect-square w-[38px]"
              />
            </div>
          </div>

          {/* Category Links */}
          <div className="flex flex-col self-stretch leading-none">
            <div className="text-sm font-medium tracking-wider uppercase text-zinc-400">
              Category
            </div>
            <div className="flex flex-col mt-5 text-base text-slate-800">
              <div className="mt-3">Sofa</div>
              <div className="mt-3">Armchair</div>
              <div className="mt-3">Wing Chair</div>
              <div className="mt-3 text-cyan-700 underline decoration-auto decoration-solid underline-offset-auto">
                Desk Chair
              </div>
              <div className="mt-3">Wooden Chair</div>
              <div className="mt-3">Park Bench</div>
            </div>
          </div>

          {/* Support Links */}
          <div className="flex flex-col leading-none">
            <div className="text-sm font-medium tracking-wider uppercase text-zinc-400">
              Support
            </div>
            <div className="flex flex-col mt-5 text-base text-slate-800">
              <div className="mt-3">Help & Support</div>
              <div className="mt-3">Terms & Conditions</div>
              <div className="mt-3">Privacy Policy</div>
              <div className="mt-3">Help</div>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="flex flex-col max-md:max-w-full">
            <div className="self-start text-sm font-medium tracking-wider leading-none uppercase text-zinc-400">
              Newsletter
            </div>
            <form onSubmit={handleSubmit} className="flex gap-3 mt-5 w-full text-base max-md:max-w-full">
              <label htmlFor="emailInput" className="sr-only">Your email</label>
              <input
                type="email"
                id="emailInput"
                name="email"
                placeholder="Your email"
                className="grow px-5 py-4 leading-none bg-white rounded-lg border border-solid border-zinc-200 text-zinc-400 w-fit"
                required
              />
              <button
                type="submit"
                className="gap-5 self-stretch px-6 py-3.5 font-semibold leading-none text-center text-white capitalize whitespace-nowrap bg-cyan-600 rounded-lg max-md:px-5"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-4 text-base leading-6 opacity-60 text-slate-800 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-wrap gap-10 justify-between items-center px-72 py-6 w-full text-sm bg-white shadow-sm text-slate-800 max-md:px-5 max-md:max-w-full">
        <div className="self-stretch my-auto">
          @ 2021 - Blogy - Designed & Developed by{" "}
          <span className="text-slate-800">Zakirsoft</span>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/b2a7ca9785999e540315f68cd5811ed7c35c226bd0189e57d18e7732aec0577e?apiKey=327e5b6545924a70ba03a6acff559d29&"
          alt="Payment methods"
          className="object-contain shrink-0 self-stretch my-auto aspect-[8.4] w-[227px]"
        />
      </div>
    </div>
  );
};

export default Footer;
