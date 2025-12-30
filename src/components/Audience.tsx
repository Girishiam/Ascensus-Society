import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function Audience() {
    const qualifiers = [
        "Are ready to finally have a steady flow of clients",
        "Want actionable strategies you can implement immediately",
        "Value accountability, peer support and measurable results"
    ];

    return (
        <section className="py-24 bg-navy-900 text-white-off relative" id="who-is-it-for">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Who is this for */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                                Who is Ascensus Society For?
                            </h2>
                            <div className="w-16 h-0.5 bg-gold"></div>
                        </div>

                        <p className="text-gray-400 text-lg">
                            This is specifically for <span className="text-white font-medium">service-based business owners</span> who:
                        </p>

                        <ul className="space-y-4">
                            {qualifiers.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.02)" }}
                                    className="flex items-center p-3 rounded-lg transition-colors cursor-default group"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mr-4 transition-colors">
                                        <Check className="w-5 h-5 text-gold" />
                                    </div>
                                    <span className="text-lg text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Column: The "Not For" Filter */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-black-rich border border-white/5 p-10 md:p-12 rounded-sm relative overflow-hidden shadow-2xl group"
                        >
                            {/* Animated Background accent */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-0 w-48 h-48 bg-red-900/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"
                            />

                            <h3 className="text-white-off font-serif text-2xl mb-6 flex items-center relative z-10">
                                <span className="w-2 h-2 bg-red-900/80 rounded-full mr-3 shadow-[0_0_10px_rgba(127,29,29,0.5)]"></span>
                                Who this is NOT for
                            </h3>

                            <p className="text-gray-400 leading-relaxed mb-6 relative z-10">
                                We are fiercely protective of our community's caliber. Ascensus is <span className="text-white font-medium">not</span> suitable for:
                            </p>

                            <ul className="space-y-4 relative z-10">
                                {['Beginners or those just starting out', 'Side Hustlers', 'E-commerce or Product Sellers'].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-500 group-hover:text-gray-400 transition-colors">
                                        <X className="w-5 h-5 text-white/20 mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-8 border-t border-white/5 text-center relative z-10">
                                <p className="text-gold text-sm tracking-wide uppercase font-medium group-hover:tracking-widest transition-all duration-300">
                                    Only serious service-based owners thrive here.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
