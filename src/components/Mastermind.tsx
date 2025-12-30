import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Monitor, Users, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

export default function Mastermind() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

    return (
        <section className="bg-navy-900 border-t border-white/5 overflow-hidden" id="mastermind" ref={containerRef}>
            {/* Weekly Sessions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 relative z-10 bg-navy-900"
                >
                    <div className="flex items-center space-x-2 text-gold mb-6">
                        <Calendar className="w-5 h-5" />
                        <span className="uppercase tracking-widest text-sm font-bold">Every Wednesday, 6:30pm UK</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Weekly Mastermind Sessions</h2>

                    <ul className="space-y-8">
                        {[
                            { icon: Monitor, title: "Guided Strategy", desc: "Discussions on offers, positioning, and growth." },
                            { icon: Users, title: "Hot Seats", desc: "Real-time, personalized feedback form Dr. Nick tailored to your business." },
                            { icon: ExternalLink, title: "Proven Frameworks", desc: "Marketing and client acquisition systems for service businesses." }
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                whileHover={{ x: 10 }}
                                className="flex items-start group cursor-default"
                            >
                                <div className="p-2 bg-white/5 rounded-full mr-4 group-hover:bg-gold/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-gray-400 group-hover:text-gold transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-lg group-hover:text-gold transition-colors">{item.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 p-6 bg-black-rich border-l-2 border-gold relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gold/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                        <p className="text-gray-300 italic relative z-10">"Implement actionable strategies immediately to accelerate your business growth."</p>
                    </motion.div>
                </motion.div>

                {/* Networking */}
                <div className="relative h-full min-h-[500px] overflow-hidden">
                    {/* Parallax Image */}
                    <motion.div
                        style={{ y, scale }}
                        className="absolute inset-0 z-0 h-[120%]"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
                            alt="Networking"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-navy-900 mix-blend-color opacity-90"></div>
                        <div className="absolute inset-0 bg-black-rich/40"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative z-10 p-12 lg:p-24 h-full flex flex-col justify-center"
                    >
                        <span className="uppercase tracking-widest text-sm font-bold text-gold mb-4 block">Connection</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Luxury Networking & Exclusive Events</h2>

                        <div className="space-y-8 text-gray-300 leading-relaxed text-lg backdrop-blur-sm bg-black-rich/20 p-6 rounded-lg border border-white/5">
                            <p>
                                Build connections. Grow your business. We curate high-end gatherings for meaningful business relationships.
                            </p>
                            <p>
                                Forge partnerships without awkward pitching. This is members-only access to networking that drives long-term opportunities.
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ x: 10 }}
                            className="mt-10 text-white border-b border-gold pb-1 hover:text-gold transition-colors inline-flex items-center uppercase tracking-wider text-sm w-fit"
                        >
                            Reserve Your Spot <span className="ml-2">→</span>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
