"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Leaf, BookOpen, MonitorPlay, History } from "lucide-react";
import dynamic from "next/dynamic";

const WarpText = dynamic(() => import("@/components/WarpText"), { ssr: false });

const sections = [
  {
    id: "nature",
    title: "Holistic Education & Heritage",
    icon: Leaf,
    content: "Chinmaya Vidyalaya, Manacaud-Attukal, (Affiliated to CBSE No.930065) situated near the famous Attukal Devi Temple, is one among the network of Vidyalayas founded by Param Poojya Gurudev Swami Chinmayananda, intended to impart holistic education and produce integrated personalities.",
    image: "/image/cv attukal school 1.webp",
    color: "from-emerald-500/20 to-teal-500/5",
    iconColor: "text-emerald-500",
  },
  {
    id: "history",
    title: "Our Historic Journey",
    icon: History,
    content: "The foundation stone for a building at Manacaud was laid by Swami Dayanandaji, on 29th May 1981. Heavy rush of students seeking admission in various classes forced the management to bifurcate the Vidyalaya. The splendid three storied building at Attukal was inaugurated by Poojya Gurudev on 21st March, 1990. 2006-07 was the Silver Jubilee year of the Vidyalaya. A new two storied building was inaugurated on 22nd March 2010 housing classes from KG to 12th.",
    image: "/image/cv attukal school 2.jpg",
    color: "from-purple-500/20 to-fuchsia-500/5",
    iconColor: "text-purple-500",
  },
  {
    id: "technology",
    title: "Academic Excellence & Facilities",
    icon: MonitorPlay,
    content: "The envious results of AISSE since 1993 proclaim the dedicated service of teachers having the touch of excellence. Computer education, Adaptive curriculum, Semester system boost the academic activities of the Vidyalaya. Adequately equipped labs and library enhance the teaching-learning process. Sanskrit is given pride of place besides Malayalam, Hindi and Tamil.",
    image: "/image/cv attukal school 3.webp",
    color: "from-blue-500/20 to-cyan-500/5",
    iconColor: "text-blue-500",
  },
  {
    id: "vision",
    title: "Integrated Development",
    icon: BookOpen,
    content: "Besides academic excellence, Physical development, spiritual enlightenment, curricular, co-curricular and extra curricular pursuits, character building are given equal importance. The various tasks undertaken by our Vidyalaya bear testimony to the competency of the Vidyalaya in conducting, organizing and co-ordinating fruitful activities. Balavihar, CHYK, Scouts and Guides, Cub Unit are very active in our Vidyalaya. Our Vidyalaya stands for integrated development of each child who can face the challenges of the modern world with a smile and make a difference in the world.",
    image: "/image/cv attukal school 5.webp",
    color: "from-orange-500/20 to-amber-500/5",
    iconColor: "text-orange-500",
  }
];

export default function AboutOverview() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-[#385EEC] selection:text-white">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-10 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/cv attukal school 2.jpg"
            alt="School Campus"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-50/80 via-slate-50/95 to-slate-50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="h-30 md:h-40 relative -mt-4 mb-4"
            >
              <WarpText
                text="ABOUT  US"
                color="#004B87"
                warpStrength={0.06}
                warpScale={1.5}
                speed={0.4}
                fontSize="clamp(4rem, 12vw, 8rem)"
                fontWeight={900}
                className="w-full h-full drop-shadow-xl"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto"
            >
              Discover the temple of learning where spirituality meets modern education, nestled in the serene lap of nature.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Interactive Story Timeline */}
      <section className=" bg-slate-50 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-32">
            {sections.map((section, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={section.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>

                  {/* Image Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50, rotateY: isEven ? -15 : 15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="w-full lg:w-1/2 relative perspective-1000"
                  >
                    <div className="relative aspect-4/3 rounded-4xl overflow-hidden shadow-2xl shadow-slate-300/50 group">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Decorative blobs */}
                    <div className={`absolute -z-10 w-full h-full top-4 ${isEven ? '-right-4' : '-left-4'} bg-linear-to-br ${section.color} rounded-[2.5rem] blur-xl opacity-60`} />
                  </motion.div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className={`w-16 h-16 rounded-md bg-white shadow-lg flex items-center justify-center mb-8 border border-slate-100 ${section.iconColor}`}>
                        <section.icon className="w-8 h-8" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                        {section.title}
                      </h2>
                      <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        {section.content}
                      </p>

                      <div className="mt-10 pt-10 border-t border-slate-200/60">
                        <div className="flex items-center gap-4">
                          <span className="w-8 h-1 bg-[#FF6A00] rounded-full" />
                          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Chinmaya Vidyalaya</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery Grid */}
      <section className="py-8 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-black text-slate-800 mb-4">Glimpses of Our Campus</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Experience the vibrant life and beautiful surroundings of Chinmaya Vidyalaya.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { src: "/image/cv attukal school 1.webp", colSpan: "col-span-2", rowSpan: "row-span-2" },
              { src: "/image/cv attukal school 2.jpg", colSpan: "col-span-2 md:col-span-1", rowSpan: "row-span-1" },
              { src: "/image/cv attukal school 4.webp", colSpan: "col-span-2 md:col-span-1", rowSpan: "row-span-1" },
              { src: "/image/cv attukal school 3.webp", colSpan: "col-span-2", rowSpan: "row-span-1" }
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-md overflow-hidden shadow-md group ${img.colSpan} ${img.rowSpan} min-h-62.5`}
              >
                <Image
                  src={img.src}
                  alt="Gallery Image"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-300 mix-blend-overlay" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}



