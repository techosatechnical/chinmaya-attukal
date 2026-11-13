"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const messages = [
  {
    id: "principal",
    title: "MESSAGE FROM THE PRINCIPAL",
    name: "Indu Vikraman J",
    role: "Principal",
    image: "/mentors/principal-indu.jpeg",
    message: (
      <>
        <p className="mb-4 font-bold text-slate-800 text-lg">Hari Om!</p>
        <p className="mb-4">
          Welcome to Chinmaya Vidyalaya, where learning goes beyond textbooks and classrooms to shape the leaders of tomorrow. At our Vidyalaya, we believe that education is a sacred journey — one that nurtures the mind, builds character, and ignites the spirit of inquiry. Rooted in the timeless wisdom of Indian culture and guided by the teachings of Pujya Gurudev Swami Chinmayananda, we strive to instill not just knowledge, but also a deeper sense of purpose and self-awareness.
        </p>
        <p className="mb-4">
          We are proud to foster a culture of excellence, where tradition meets innovation, and where the divine potential in every child is honored and uplifted. With a passionate team of educators and a student-centered approach, we aim to create an environment where curiosity is celebrated, creativity is encouraged, and every learner is empowered to blossom — intellectually, emotionally, and spiritually.
        </p>
        <p>
          Together, let us inspire young minds, instill noble values, and walk the path of knowledge and righteousness toward a brighter, more meaningful future.
        </p>
      </>
    )
  },
  {
    id: "vice-principal-1",
    title: "MESSAGE FROM THE VICE PRINCIPAL",
    name: "Soumya S Nair",
    role: "Vice Principal",
    image: "/mentors/Vice Principal1.jpeg",
    message: (
      <>
        <blockquote className="mb-4 italic font-semibold text-slate-800 border-l-4 border-[#1A457B] pl-4 py-1">
          &ldquo;Dear children, you are the architects of your own future. Design it with purpose, passion, and perseverance.&rdquo;
        </blockquote>
        <p className="mb-4">
          Our Vidyalaya&apos;s commitment to academic rigor, creativity, and community service inspires me every day. I believe that every student has a unique story to tell and special potential. I am committed to helping them discover their strengths and passions.
        </p>
        <p>
          It&apos;s an honour to work with our talented educators, enthusiastic students, and dedicated parents. Together, we can shape the next generation of trailblazers. As a team, we empower students to become compassionate, curious, and confident individuals. I am excited to be a part of this journey.
        </p>
      </>
    )
  },
  {
    id: "vice-principal-2",
    title: "MESSAGE FROM THE VICE PRINCIPAL",
    name: "Resmi G B",
    role: "Vice Principal",
    image: "/mentors/Vice Principal2.jpeg",
    message: (
      <>
        <p className="mb-4">
          True education is not merely the acquisition of knowledge, but the awakening of the mind, the nurturing of values, and the development of a compassionate heart. It kindles curiosity, strengthens character, and inspires selfless service to society. At our Vidyalaya, we are committed to creating a learning environment that harmoniously blends academic excellence with moral and spiritual values.
        </p>
        <p className="mb-4">
          We believe that every child is unique and endowed with immense inner potential waiting to be discovered and nurtured. Through dedicated guidance, disciplined learning, and value-based education, we encourage our students to think creatively, act responsibly, and grow with confidence and humility. Our aim is to shape young minds into individuals who not only excel in their chosen paths but also contribute meaningfully to the world around them.
        </p>
      </>
    )
  }
];

const getImagePosition = (id: string) => {
  if (id === "vice-principal-1") return "object-[center_35%]";
  if (id === "vice-principal-2") return "object-center";
  return "object-[center_20%]";
};

export function LeadershipMessages() {
  const [activeMessage, setActiveMessage] = useState<string | null>(null);

  return (
    <section className="py-8 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {messages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col items-center w-full ${index === 2 ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none' : ''}`}
            >
              {/* Title */}
              <div className="text-center mb-4">
                <h3 className="text-[#004B87] font-bold text-xs md:text-sm tracking-wider uppercase">
                  {item.title}
                </h3>
                <h4 className="text-slate-800 font-extrabold text-base md:text-lg mt-1">
                  {item.name}
                </h4>
              </div>

              {/* Card */}
              <div
                className="w-full flex flex-col sm:flex-row h-auto sm:h-[290px] shadow-xl rounded-md overflow-hidden group cursor-pointer border border-slate-200 hover:shadow-2xl transition-shadow duration-300"
                onClick={() => setActiveMessage(item.id)}
              >
                {/* Left Blue Box */}
                <div className="w-full sm:w-1/2 bg-[#1A457B] p-5 sm:p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <p className="text-white font-bold text-sm md:text-base mb-1 relative z-10 leading-snug">{item.name}</p>
                  <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-5 relative z-10">{item.role}</p>

                  {/* Button */}
                  <div className="border border-white/70 px-4 py-2 flex items-center gap-1.5 group-hover:border-white transition-colors duration-300 relative z-10">
                    <span className="text-white text-[11px] font-bold tracking-[0.15em] whitespace-nowrap">READ MESSAGE</span>
                    <span className="text-white text-xs font-bold transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
                  </div>
                </div>

                {/* Right Image Box */}
                <div className="w-full sm:w-1/2 relative h-72 sm:h-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={`object-cover ${getImagePosition(item.id)} group-hover:scale-105 transition-transform duration-700 ease-out`}
                  />
                  {/* Subtle gradient overlay to make image look premium */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Messages */}
      <AnimatePresence>
        {activeMessage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setActiveMessage(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-md shadow-2xl flex flex-col md:flex-row z-10"
            >
              {(() => {
                const data = messages.find((m) => m.id === activeMessage)!;
                return (
                  <>
                    {/* Modal Image */}
                    <div className="w-full md:w-2/5 h-64 md:h-auto relative hidden md:block">
                      <Image
                        src={data.image}
                        alt={data.name}
                        fill
                        className={`object-cover ${getImagePosition(data.id)}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
                        <h4 className="text-white font-bold text-xl">{data.name}</h4>
                        <p className="text-blue-200 font-medium text-sm">{data.role}</p>
                      </div>
                    </div>

                    {/* Modal Content */}
                    <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-10 relative">
                      <button
                        onClick={() => setActiveMessage(null)}
                        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>

                      <div className="md:hidden mb-6 flex items-center gap-4">
                        <div className="w-16 h-16 relative rounded-full overflow-hidden shrink-0 border-2 border-[#1A457B]">
                          <Image
                            src={data.image}
                            alt={data.name}
                            fill
                            className={`object-cover ${getImagePosition(data.id)}`}
                          />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg leading-tight">{data.name}</h4>
                          <p className="text-[#1A457B] font-medium text-sm">{data.role}</p>
                        </div>
                      </div>

                      <h3 className="text-[#1A457B] font-bold text-xs tracking-widest uppercase mb-6 pb-4 border-b border-slate-100">
                        {data.title}
                      </h3>

                      <div className="prose prose-slate text-slate-600 leading-relaxed text-[15px]">
                        {data.message}
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}



