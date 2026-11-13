"use client";

import { motion } from "framer-motion";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, Award, UserCircle } from "lucide-react";

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "CV";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function MentorAvatar({ name }: { name: string }) {
  const initials = getInitials(name);
  return (
    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-[#0F284A] via-[#163a66] to-[#0a1e38] text-white select-none">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-amber-400/50 transition-all duration-300">
        <span className="text-2xl sm:text-3xl font-bold tracking-wider text-amber-300 font-sans">
          {initials}
        </span>
      </div>
    </div>
  );
}

const mentors = [
  { name: "Indu Vikraman J", role: "Principal", image: "/mentors/principal-indu.jpeg" },
  { name: "Soumya S Nair", role: "Vice Principal", image: "/mentors/Vice Principal1.jpeg" },
  { name: "Resmi G B", role: "Vice Principal", qualification: "MA, B.Ed, SET", image: "/mentors/Vice Principal2.jpeg" },
  { name: "Swapna Sankar", role: "Computer Science (PGT)", qualification: "M.Sc Computer Science" },
  { name: "Meera M", role: "Dance (PGT)", qualification: "MFA" },
  { name: "Kalasekhar S", role: "Mathematics (TGT)", qualification: "M.Sc, B.Ed" },
  { name: "Vidya V S", role: "Mathematics (TGT)", qualification: "M.Sc Mathematics, B.Ed" },
  { name: "Deepa M S", role: "Physics (PGT)", qualification: "M.Sc, B.Ed, SET" },
  { name: "Arathy M Nair", role: "Mathematics (TGT)", qualification: "M.Sc, B.Ed" },
  { name: "Sajina S", role: "Chemistry (PGT)", qualification: "M.Sc, B.Ed" },
  { name: "Sunitha Naveen", role: "English (TGT)", qualification: "MA, B.Ed, CTET, SET, KTET" },
  { name: "Rajalekshmy V K", role: "Hindi (PRT)", qualification: "MA Hindi, B.Ed, SET" },
  { name: "Viji S R", role: "Mathematics (TGT)", qualification: "M.Sc, B.Ed, PGDCA" },
  { name: "Gopika M R", role: "Computer Science (PRT)", qualification: "M.Sc Computer Science" },
  { name: "Aswathy B", role: "Physics (TGT)", qualification: "M.Sc, B.Ed, KTET, SET" },
  { name: "Sreevandana N", role: "Physics (TGT)", qualification: "M.Sc Physics, B.Ed, KTET" },
  { name: "Aswathy S Devi", role: "Malayalam (PGT)", qualification: "MA, B.Ed, NET" },
  { name: "Sreejitha L P", role: "History (PGT)", qualification: "BA, B.Ed, MA, SET" },
  { name: "Geetha N R", role: "Tamil (TGT)", qualification: "M.Ed, M.Phil" },
  { name: "Manju S", role: "History & Politics (PGT)", qualification: "MA, B.Ed, SET" },
  { name: "Usharani P", role: "Malayalam (PGT)", qualification: "MA, B.Ed, SET, Ph.D (Malayalam)" },
  { name: "Sunitha P", role: "Economics (PGT)", qualification: "MA (Eco), B.Ed, SET" },
  { name: "Smitha R S", role: "Hindi (TGT)", qualification: "MA Hindi, Sahityacharya, Diploma in Hindi Teaching, PG Diploma, SET" },
  { name: "Priyanka Pradeep", role: "English (PRT)", qualification: "MA, B.Ed" },
  { name: "Aishwarya Nair", role: "Biology (TGT)", qualification: "M.Sc Botany, B.Ed" },
  { name: "Sukanya Sundaram", role: "Hindi (PRT)", qualification: "MA, B.Ed (Hindi)" },
  { name: "Prita V", role: "Geography (PGT)", qualification: "M.Sc, B.Ed, SET" },
  { name: "Soumya S Surendran", role: "Computer Science (PGT)", qualification: "MCA" },
  { name: "Gayathri V N", role: "Mathematics (TGT)", qualification: "B.Sc, M.Sc, B.Ed, KTET II, KTET III" },
  { name: "Arunachalam C", role: "History (PGT)", qualification: "MA, B.Ed, SET" },
  { name: "Beena Krishna B R", role: "Hindi (PGT)", qualification: "MA, B.Ed, SET, Hindi Bhooshan" },
  { name: "Keerthana R", role: "English (TGT)", qualification: "MA, B.Ed" },
  { name: "Radhika H", role: "Sanskrit (PGT)", qualification: "MA, M.Phil, M.Ed" },
  { name: "Anchana Anand", role: "Mathematics (PGT)", qualification: "M.Sc, B.Ed, SET" },
  { name: "Smitha S", role: "Mathematics (PGT)", qualification: "M.Sc, B.Ed (Mathematics)" },
  { name: "Jeena Raj", role: "Computer Science (PGT)", qualification: "M.Sc Computer Science" },
  { name: "Soorya Soman", role: "Computer Science (PGT)", qualification: "B.Tech, MBA" },
  { name: "Gayathri V", role: "Tamil (TGT)", qualification: "MA, B.Ed" },
  { name: "Greeshma S Nair", role: "Physics (TGT)", qualification: "M.Sc Physics, B.Ed, KTET, CTET, SET" },
  { name: "Aiswarya P Anil", role: "Physics (TGT)", qualification: "M.Sc, B.Ed, KTET, CTET, SET" },
  { name: "Malavika Krishnan", role: "English (TGT)", qualification: "MA English, B.Ed English" },
  { name: "Meera C Nair", role: "Hindi (PRT)", qualification: "MA, B.Ed (Hindi)" },
  { name: "Kavya Chandran K", role: "Commerce & Business Studies (PGT)", qualification: "M.Com" },
  { name: "Revathy Nath G R", role: "Library Science (TGT)", qualification: "BA, MA, B.Ed, CLISC, BLISC" },
  { name: "Archana V", role: "Geography (PGT)", qualification: "M.Sc Geography, B.Ed, SET" },
  { name: "M Malathy Prasad", role: "English (TGT)", qualification: "M.A, B.Ed, M.Phil, PGDCA" },
  { name: "M Saritha", role: "English (PGT)", qualification: "M.A, B.Ed, SET" },
  { name: "Rajasree I", role: "Mathematics (TGT)", qualification: "M.Sc Mathematics, B.Ed" },
  { name: "Lekshmi P S", role: "Wellness / Psychology (PGT)", qualification: "MA Psychology" },
  { name: "Resmi K Nair", role: "Mathematics (TGT)", qualification: "M.Sc, B.Ed (Maths), CTET" },
  { name: "Malavika S R", role: "English (PRT)", qualification: "MA, B.Ed, SET, CTET, KTET" },
  { name: "Lekshmy S B", role: "History (PRT)", qualification: "MA, B.Ed, KTET" },
  { name: "Asha V V", role: "Mathematics (TGT)", qualification: "M.Sc, B.Ed" },
  { name: "Sangeetha Sasi G S", role: "Malayalam (PRT)", qualification: "PG, B.Ed" },
  { name: "Vidya L V", role: "Biology (PGT)", qualification: "M.Sc, B.Ed, SET" },
  { name: "Saranya Bose J", role: "Chemistry (TGT)", qualification: "M.Sc, B.Ed, SET" },
  { name: "Rani R", role: "Malayalam (TGT)", qualification: "MA, B.Ed" },
  { name: "Aiswarya K R", role: "Hindi (TGT)", qualification: "MA, B.Ed, Diploma in Translation, Hindi Praveen" },
  { name: "Santhini S", role: "Biology - Botany (TGT)", qualification: "M.Sc, B.Ed, SET" },
  { name: "Dhanooja M N", role: "Library Science & GK (TGT)", qualification: "BA, BLIS, MLIS" },
  { name: "Gopika G S", role: "Chemistry (TGT)", qualification: "M.Sc Chemistry, B.Ed" },
  { name: "Anjana B", role: "Pre-Primary Teacher", qualification: "BA Economics, PPTTC" },
  { name: "Raji S", role: "English (PRT)", qualification: "MA, B.Ed, MBA" },
  { name: "Resmi R P", role: "Kindergarten Teacher", qualification: "M.A. Economics, Higher Diploma in Montessori" },
  { name: "Divya T K", role: "English (TGT)", qualification: "MA, B.Ed" },
  { name: "Vidhya V", role: "Malayalam (TGT)", qualification: "MA, B.Ed (Malayalam)" },
  { name: "Jyothy K", role: "Chemistry (TGT)", qualification: "M.Sc Chemistry, B.Ed" },
  { name: "Lekshmi Subha G S", role: "Music (PGT)", qualification: "MA Music, KTET" },
  { name: "S Bagavathi Lekshmi", role: "Yoga (PGT)", qualification: "B.Sc Zoology, M.Sc Yoga, Yoga TTC" },
  { name: "Manjusha V", role: "Pre-Primary Teacher (PRT)", qualification: "BA, PPTTC" },
  { name: "Mini M S", role: "Primary Teacher (PRT)", qualification: "B.Sc, B.Ed, PPTTC" },
  { name: "Manju S Nair", role: "Kindergarten Teacher (PRT)", qualification: "BA, PPTTC" },
  { name: "Meera R S", role: "Pre-Primary Teacher (PRT)", qualification: "BA English, Diploma in Montessori" },
  { name: "Rajeswari V K", role: "Primary Teacher (PRT)", qualification: "M.Sc, B.Sc, DMTTC" },
  { name: "Kavitha K R", role: "Primary Teacher (PRT)", qualification: "MA, PPTTC" },
  { name: "Chithra G K", role: "Sanskrit (PGT)", qualification: "M.A, B.Ed" },
  { name: "Beena S", role: "Economics & Pre-Primary Teacher", qualification: "MA, B.Ed" },
  { name: "Rema S", role: "Malayalam & Pre-Primary Teacher", qualification: "B.A, PPTTC" },
  { name: "Praseetha L", role: "Kindergarten Teacher (PRT)", qualification: "BA Economics, PPTTC" },
  { name: "Smitha D S", role: "Primary Teacher (PRT)", qualification: "Degree, MTTC" },
  { name: "Nimi Chandran", role: "Commerce (PGT)", qualification: "M.Com, B.Ed, NET, SET" },
  { name: "Preetha P C", role: "English (PGT)", qualification: "MA, B.Ed" },
  { name: "Ramathilagam", role: "Chemistry (PGT)", qualification: "M.Sc, B.Ed, SET" },
  { name: "Abhilash G S", role: "English (PGT)", qualification: "MA, B.Ed, SET" }
];
const leadership = mentors.slice(0, 3);
const teachers = mentors.slice(3);

export default function MentorsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <TopBar />
      <Navbar />

      {/* Page Header */}
      <div className="bg-primary pt-32 pb-10 md:pt-40 md:pb-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            Our <span className="text-secondary">Mentors</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 max-w-2xl mx-auto text-lg"
          >
            Meet our highly qualified and dedicated teaching staff who shape the future of our students.
          </motion.p>
        </div>
      </div>

      {/* Leadership Section */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Leadership</h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-slate-50 rounded-md overflow-hidden shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-slate-100 group flex flex-col"
              >
                <div className="aspect-4/3 w-full relative overflow-hidden flex items-center justify-center bg-slate-200">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <MentorAvatar name={leader.name} />
                  )}
                </div>
                <div className="p-6 md:p-8 text-center bg-white flex flex-col justify-between grow">
                  <div>
                    <h3 className="font-bold text-primary text-xl md:text-2xl mb-2">{leader.name}</h3>
                    <div className="flex items-center justify-center gap-2 text-[#FF6A00] font-semibold text-base mb-4">
                      <BookOpen className="w-4 h-4" />
                      <span>{leader.role}</span>
                    </div>
                  </div>
                  {leader.qualification ? (
                    <div className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 bg-slate-50 rounded-full text-sm text-slate-600 font-medium border border-slate-100 mx-auto">
                      <Award className="w-4 h-4 shrink-0 text-primary" />
                      <span>{leader.qualification}</span>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-10 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-4">Teaching Faculty</h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {teachers.map((mentor, index) => (
              <motion.div
                key={`${mentor.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
                className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-slate-100 group flex flex-col"
              >
                <div className="bg-linear-to-br from-slate-100 to-slate-200 aspect-square w-full relative overflow-hidden flex items-center justify-center">
                  {mentor.image ? (
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    />
                  ) : (
                    <MentorAvatar name={mentor.name} />
                  )}
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col text-center">
                  <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">
                    {mentor.name}
                  </h3>

                  <div className="flex items-center justify-center gap-1.5 text-[#FF6A00] font-medium text-sm mb-3">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{mentor.role}</span>
                  </div>

                  <div className="mt-auto pt-3 border-t border-slate-100">
                    <div className="flex items-start justify-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Award className="w-3.5 h-3.5 shrink-0 text-primary" />
                      <span className="line-clamp-2">{mentor.qualification}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}



