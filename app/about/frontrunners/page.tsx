"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function FrontrunnersPage() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const testimonials = [
    {
      id: 1,
      quote: "I was a student of Chinmaya Vidyalaya Attukal till 10th; batch of 2005. I have done my graduation in Electronics and Communication from Government Engineering College, Barton Hill. I also have MA in Economics and Masters in Public Management. I have worked in Tata Elxsi when I got into the Indian Postal Services. In 2015, I got selected to the Indian Administrative Service, Tamil Nadu Cadre. I have worked in various capacities in Madurai, Ramanathapuram, Nagercoil, Thoothukudi, Tirunelveli. Presently, I am Joint Commissioner Municipal Administration and CEO (Tamil Nadu Water Investment Company Limited). If my character and values are of help to public as a civil servant, it is only because of the virtues taught in my school. I am deeply indebted to the whole family of Chinmaya Mission. Hari Om.",
      author: "B Vishnu Chandran IAS",
      designation: "Joint Commissioner Municipal Administration & CEO",
      organization: "Tamil Nadu Water Investment Company Limited (Batch of 2005)",
      image: "/frontrunner/B Vishnu Chandran IAS.jpeg"
    },
    {
      id: 2,
      quote: "Arun P R (Std X: 2005 passout) — Scientist/Engineer in Vikram Sarabhai Space Centre with over 10 years of experience, First Rashtrapati Scout Awardee from Chinmaya Vidyalaya, Attukal. NTSE Scholar, State Rank 38 in Kerala Engg Entrance 2007.",
      author: "Arun P R",
      designation: "Scientist / Engineer",
      organization: "Vikram Sarabhai Space Centre (VSSC) · Std X 2005 Passout",
      image: "/frontrunner/Arun P R.jpeg"
    },
    {
      id: 3,
      quote: "I was a student of Chinmaya Vidyalaya Attukal from LKG to 10th STD. I passed out in 2002. Presently I am Assistant Professor in Anaesthesia under Medical Education Department, Kerala after completing MD and DNB from Trivandrum Medical College. I consider my teachers at the Vidyalaya as my greatest blessing and asset in this life. I never had any tuitions outside and the educational culture instilled in me by my teachers right from the primary classes has helped me to achieve success. Traditions and values taught by my teachers still continue to guide me and has helped me become a better person.",
      author: "Dr. Dhanya P.R",
      designation: "Assistant Professor in Anaesthesia",
      organization: "Medical Education Department, Kerala (Batch of 2002)",
      image: "/frontrunner/Dr. Dhanya P.R.jpg"
    },
    {
      id: 4,
      quote: "Chinmaya Vidyalaya Attukal is so close to my heart, the single answer to the reason for whatever I could achieve in my professional and personal life. My Vidyalaya, situated close to the world-renowned Attukal Devi Temple, is a great destination for children to study and develop holistically. Education has long been revered on this campus. C.V. Attukal, for me, is a peaceful, harmonious society that turns students into responsible citizens who are intellectually enlightened and garnished with a bunch of talents and interests beyond the curriculum. I am proud to be part of this Chinmaya family. Our Principal, teachers and other staff members have always been loving and encouraging. I still have fond recollections of performing bhajans and chanting the Bhagavad Gita and Ramayana at various Mission level programmes during my school days. I am confident that this temple of knowledge bestows on each student a practical and judicious blend of academic achievement, character building, and personality development. I am blessed to be one among the fortunate CVAites who could personally meet our Pujya Gurudev, Swami Chinmayanandaji and receive his blessings.",
      author: "Dr. G. R. Jayadevan",
      designation: "Assistant Professor & Head, Dept. of Dairy Business Management (B.Tech, MBA, PGDM, PGD-PRM, Ph.D. NIT Trichy)",
      organization: "Faculty of Dairy Science & Technology, Kerala Veterinary and Animal Sciences University (Class X, 1999 Pass Out)",
      image: "/frontrunner/Dr.G.R.Jayadevan.jpeg"
    },
    {
      id: 5,
      quote: "Studied in Chinmaya Vidyalaya Attukal 1985 to 1993. My daughters Deekshitha S (7B) and Harshitha S (3A) studying in Chinmaya Attukal now. One cannot build a great building on weak foundation. My foundation of my education was laid super strong by the wonderful teachers and professors in Chinmaya Vidyalaya. Apart from normal academic studies, chanting Gita in morning before class and bringing in spiritual value education at my young age, is helping me to face any situation in life with confidence. Thank you Chinmaya Vidyalaya..",
      author: "Subramony Venkiteswaran",
      designation: "Company Secretary & Associate Vice President, Legal, Compliance & Audit (FCS, CMA, B.Com, LLB, M.Com, MPhil, MFM, SoxCPA)",
      organization: "Envestnet (1985 – 1993)",
      image: "/frontrunner/Subramony Venkiteswaran.jpg"
    },
    {
      id: 6,
      quote: "Working as Hindi teacher in Chinmaya Vidyalaya Attukal. One of my dream come true, as a previous student of this school. I completed my 14 yrs of school life as a Chinmayan. I am feeling so proud as I am working with the teachers who taught me. My Hindi Teacher Suma, Prita (Geography), Anil (Sanskrit), Velammal (Maths), Remesh Lal (P.T), Meera (Dance), Saritha (English, my class teacher also). In my childhood days teachers asked me about my dreams and I replied to them that I want to become a Hindi teacher and also want to work in my School itself. Now I am living in my dream, this is possible only because of my parents, my teachers and my school itself. Chinmaya Vidyalaya made me what I am today. The culture and the tradition which I got from my school helped me to lead my life.",
      author: "Meera C. Nair",
      designation: "Hindi Teacher",
      organization: "Chinmaya Vidyalaya Attukal",
      image: "/frontrunner/Meera C Nair.jpeg"
    },
    {
      id: 7,
      quote: "Batch – 2013 pass out, Chinmaya Vidyalaya Attukal, Trivandrum. I joined for MBBS in Government Medical College, Kannur the same year. I am currently doing my post graduation in Internal Medicine from Government Medical College, Jhalawar, Rajasthan.",
      author: "Dr Megha",
      designation: "PG Resident in Internal Medicine (MBBS)",
      organization: "Government Medical College, Jhalawar, Rajasthan (Batch of 2013)",
      image: "/frontrunner/Megha.jpeg"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-slate-900 selection:text-white">
      <TopBar />
      <Navbar />

      {/* Header */}
      <section className="relative pt-48 pb-12 md:pt-64 md:pb-20 bg-slate-950 text-white overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-slate-400 to-transparent opacity-20"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-slate-400">
            Our Frontrunners
          </h1>

          <p className="text-lg md:text-2xl max-w-2xl mx-auto text-slate-400 font-medium tracking-tight">
            Hear from our proud alumni who carry the light of Chinmaya Vidyalaya into the world.
          </p>
        </div>
      </section>

      {/* Testimonials Grid (Grid Layout with Equal Heights) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-white p-8 md:p-10 rounded-md shadow-xl shadow-slate-200/50 border border-slate-200 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-6 right-8 text-slate-100 font-serif text-8xl leading-none select-none pointer-events-none">
                "
              </div>

              <div className="relative z-10 grow">
                <p className={`text-slate-700 text-lg md:text-xl font-medium leading-relaxed italic mb-4 ${item.quote.length > 200 ? 'line-clamp-4' : ''}`}>
                  "{item.quote}"
                </p>
                {item.quote.length > 200 && (
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="text-orange-500 font-bold hover:text-orange-600 transition-colors text-sm uppercase tracking-wider mb-8 flex items-center gap-1"
                  >
                    Read more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="relative z-10 pt-6 border-t border-slate-100 mt-auto flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-orange-100">
                  <Image
                    src={item.image}
                    alt={item.author}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-0.5">{item.author}</h3>
                  <p className="text-xs font-bold text-orange-500 uppercase tracking-wide mb-1">
                    {item.designation}
                  </p>
                  {item.organization && (
                    <p className="text-sm text-slate-500 font-medium">
                      {item.organization}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-md shadow-2xl max-w-3xl w-full p-6 sm:p-8 md:p-12 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors p-2 bg-slate-100 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-center gap-6 mb-8 border-b border-slate-100 pb-8">
              <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-orange-100 shadow-lg">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.author}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">{selectedItem.author}</h3>
                <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-1">
                  {selectedItem.designation}
                </p>
                {selectedItem.organization && (
                  <p className="text-base text-slate-500 font-medium">
                    {selectedItem.organization}
                  </p>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-slate-100 font-serif text-8xl leading-none select-none pointer-events-none z-0">
                "
              </div>
              <p className="relative z-10 text-slate-700 text-lg md:text-xl font-medium leading-relaxed italic">
                "{selectedItem.quote}"
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}




