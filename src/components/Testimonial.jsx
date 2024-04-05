import React from 'react';
import Image1 from '../images/henry.png';
import Image2 from '../images/henry.png';
2

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO, Acme Inc.',
    description: 'This product is fantastic! It has helped me improve my workflow tremendously.',
    image: Image2,
  },
  {
    name: 'Jane Smith',
    title: 'Marketing Director, Big Company',
    description: 'The customer support is top-notch. They were always there to help me when I needed it.',
    image: Image1
  },
   {
    name: 'John Doe',
    title: 'CEO, Acme Inc.',
    description: 'This product is fantastic! It has helped me improve my workflow tremendously.',
    image: Image2,
  },
]
function TestimonialCard({ name, title, description, image }) {
  return (
    <div className="max-w-[35vh]  mx-auto shadow-lg rounded-lg overflow-hidden bg-dark">
      <img src={image} alt={name} className="w-72 h-52 " />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{name}</div>
        <div className="text-white text-sm mb-2">{title}</div>
        <p className="text-white text-base">{description}</p>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="py-12 bg-gradient-to-b from-navy to-dark">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 font-xyz text-white">What People Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
