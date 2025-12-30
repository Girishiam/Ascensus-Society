import { motion } from 'framer-motion';

export default function GapSection() {
    return (
        <section className="py-24 bg-navy-900 text-white-off">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: The Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-white">
                            The Isolation of Success
                        </h2>
                        <div className="w-16 h-0.5 bg-white/20"></div>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            You’ve built something remarkable. But at the summit, the air gets thin.
                            The challenges you face now aren't about survival—they're about scale,
                            legacy, and sustaining momentum without burning out.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Most peers don't understand the weight of your decisions. You find yourself
                            surrounded by people who ask for answers, not those who question your assumptions.
                        </p>
                    </motion.div>

                    {/* Right Column: The Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-gold/10 to-transparent rounded-lg blur-xl opacity-50"></div>
                        <div className="relative bg-black-rich border border-white/5 p-10 md:p-12 rounded-sm shadow-2xl">
                            <h3 className="text-gold text-sm uppercase tracking-widest font-bold mb-4">
                                The Ascensus Solution
                            </h3>
                            <h2 className="text-2xl md:text-3xl font-serif text-white mb-6">
                                A Room of Equals
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Ascensus Society provides the clarity and strategic depth you've been craving.
                                We curate a high-altitude network where you can speak freely, strategize
                                openly, and find the peer support that’s been missing.
                            </p>
                            <ul className="space-y-3">
                                {['Strategic Clarity', 'Unfiltered Feedback', 'Legacy Focus'].map((item, i) => (
                                    <li key={i} className="flex items-center text-white-off">
                                        <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
