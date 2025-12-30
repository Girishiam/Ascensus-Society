import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section className="py-24 bg-black-rich border-t border-white/5" id="about" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Side (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="aspect-[3/4] overflow-hidden rounded-sm relative group">
                            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                            <motion.img
                                style={{ y: imgY }}
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                                alt="Dr. Nick"
                                className="w-full h-[115%] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black-rich to-transparent z-20">
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-gold font-serif text-lg italic"
                                >
                                    MBA, Doctorate, Multi-Award Winner
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div>
                            <span className="text-gold uppercase tracking-widest text-sm font-bold">About Your Host</span>
                            <h2 className="text-4xl lg:text-5xl font-serif text-white mt-4 mb-6 leading-tight">
                                Dr. Nick
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
                            <p>
                                Multi-award-winning marketing and business growth consultant with 25+ years’ experience in service-based businesses.
                            </p>
                            <ul className="space-y-4 text-base">
                                {[
                                    "Founded and scaled service companies across education, construction, cleaning, consulting and marketing.",
                                    "Holds an MBA, a Doctorate and multiple industry awards.",
                                    "Expert in positioning, client acquisition, pricing strategy and scalable delivery."
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="flex items-start"
                                    >
                                        <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                                        <span className="hover:text-white transition-colors">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="border-l-2 border-white/20 pl-4 italic text-white/80 mt-6"
                            >
                                "Helping service business owners worldwide grow fast with practical systems that attract high-paying clients consistently."
                            </motion.p>
                        </div>

                        <div className="pt-8">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border border-white text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:border-gold hover:text-gold transition-colors"
                            >
                                Claim Your Seat
                            </motion.button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
