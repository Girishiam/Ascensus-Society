import { motion } from 'framer-motion';

export default function Process() {
    const steps = [
        { number: "01", title: "Submit Application", desc: "Start the process." },
        { number: "02", title: "Consultation Call", desc: "15–20 minute call to confirm fit." },
        { number: "03", title: "Membership Confirmation", desc: "Official welcome." },
        { number: "04", title: "Immediate Access", desc: "Sessions, resources, and events." }
    ];

    return (
        <section className="py-24 bg-navy-900 text-white-off relative" id="process">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Membership Process</h2>
                        <p className="text-gold uppercase tracking-widest text-sm font-bold">One Membership. One Standard. Application Only.</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-white/5 z-0 mx-16">
                        <motion.div
                            initial={{ scaleX: 0, originX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-gold"
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group pt-8"
                        >
                            {/* Node */}
                            <div className="absolute top-0 left-1/2 lg:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-navy-900 border-2 border-gold z-10 group-hover:scale-150 transition-transform duration-300">
                                <div className="w-full h-full bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="relative z-10 pl-4 border-l border-gold/30 lg:border-l-0 lg:pl-0 lg:text-center h-full hover:bg-white/5 lg:hover:bg-transparent p-4 rounded-lg transition-colors duration-300">
                                <div className="text-6xl font-serif text-white/5 font-bold select-none mb-2 lg:mb-4 group-hover:text-gold/10 transition-colors">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-serif text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gold text-black-rich px-12 py-4 uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors shadow-lg shadow-gold/20"
                    >
                        Apply Now
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
