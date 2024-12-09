import React from 'react';

const Faq = () => {
  const faqs = [
    {
      question: 'What types of chairs do you offer?',
      answer:
        'We offer a variety of chairs, including ergonomic office chairs, accent chairs, dining chairs, and recliners, each designed for comfort and style.',
    },
    {
      question: 'Are the chairs adjustable?',
      answer:
        'Yes, many of our chairs come with adjustable height, recline, and armrest settings to ensure maximum comfort and support for different body types.',
    },
    {
      question: 'What materials are used in your chair collection?',
      answer:
        'Our chairs are crafted from high-quality materials such as premium wood, durable metals, and eco-friendly fabrics to offer both elegance and durability.',
    },
    {
      question: 'Do you offer customization for your chairs?',
      answer:
        'Yes, we offer customization options such as fabric choice, color, and additional features to make sure your chair perfectly fits your space and preferences.',
    },
    {
      question: 'How do I maintain my chair?',
      answer:
        'Regularly clean your chair using a soft cloth and mild cleaning solutions. Avoid using harsh chemicals to maintain the appearance and durability of the materials.',
    },
    {
      question: 'What is the warranty for your chairs?',
      answer:
        'Our chairs come with a standard one-year warranty, covering defects in materials and craftsmanship. Additional warranty options are available for certain models.',
    },
  ];

  return (
    <section className="flex flex-col items-center px-4 md:px-8 mx-auto w-full max-w-screen-lg">
      <header className="text-center my-10">
        <h1 className="font-bold text-3xl md:text-4xl">Question Look Here</h1>
        <p className="mt-4 text-gray-600">
          Here are some common questions about our chair collection. Find the answers below.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-200 p-4 rounded-lg shadow-md">
            <div className="flex justify-between mb-2">
              <h2 className="font-semibold">{faq.question}</h2>
              <span className="text-xl">➕</span>
            </div>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
