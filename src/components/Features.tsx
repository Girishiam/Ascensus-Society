import { motion } from 'framer-motion';
import { Target, Users, Layout, Gift, ShieldCheck, Zap } from 'lucide-react';
import React from 'react';

export default function Features() {
    const insides = [
        {
            icon: <Users className="w-6 h-6" />,
            title: "Weekly Mastermind Sessions",
            desc: "Solve real business challenges and implement immediately."
        },
        {
            icon: <Layout className="w-6 h-6" />,
            title: "Hot Seats",
            desc: "Personalized guidance on offers, pricing, and client acquisition."
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Proven Systems",
            desc: "Attract clients without posting constantly or burning out."
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Results-Driven Community",
            desc: "Peer support from serious service-based business owners."
        },
        {
            icon: <Gift className="w-6 h-6" />,
            title: "Monthly 1:1 Giveaway",
            desc: "One member per month gets a private session with Dr. Nick."
        }
    ];

    const reasons = [
        {
            title: "Predictable Clients",
            desc: "Stop worrying about inconsistent income."
        },
        {
            title: "Actionable Guidance",
            desc: "Weekly sessions and hot seats turn ideas into results."
        },
        {
            title: "Exclusive Strategies",
            desc: "Systems and frameworks not available anywhere else."
        },
        {
            title: "High-Touch Environment",
            desc: "Curated, results-driven community of peers."
        },
        {
            title: "Premium Perks",
            desc: "Monthly 1:1 giveaway with Dr. Nick."
        }
    ];

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <section className="py-24 bg-black-rich relative overflow-hidden" id="what-you-get">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Inside Ascensus */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Inside Ascensus Society, You Get:</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {insides.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                onMouseMove={handleMouseMove}
                                className="group relative bg-navy-900 border border-white/5 p-8 transition-colors overflow-hidden"
                            >
                                {/* Spotlight Effect */}
                                <div
                                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
                                    style={{
                                        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(197, 160, 89, 0.15), transparent 40%)`
                                    }}
                                />

                                <div className="relative z-10">
                                    <div className="bg-white/5 w-12 h-12 flex items-center justify-center rounded-sm mb-6 text-gold group-hover:bg-gold group-hover:text-black-rich transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-serif text-white mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Why This Works */}
                <div className="bg-navy-900/50 p-10 md:p-16 border border-white/5 relative overflow-hidden group">
                    {/* Background decoration */}
                    <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-50"
                    />

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 relative z-10"
                    >
                        <div className="inline-block px-4 py-1 border border-gold/30 rounded-full mb-4">
                            <span className="text-gold text-xs uppercase tracking-widest font-bold">The Methodology</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white">Why This Works?</h2>
                        <p className="text-gray-400 mt-4">Consistent Clients, Practical Support, Premium Environment.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                        {reasons.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -5 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360, borderColor: "rgba(197, 160, 89, 0.8)" }}
                                    transition={{ duration: 0.6 }}
                                    className="mx-auto w-12 h-12 rounded-full bg-black-rich border border-gold/20 flex items-center justify-center mb-4 shadow-lg shadow-black/50 overflow-hidden"
                                >
                                    <Zap className="w-5 h-5 text-gold" />
                                </motion.div>
                                <h4 className="text-white font-medium mb-2 text-sm uppercase tracking-wide">{item.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center relative z-10">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border border-gold text-gold px-10 py-3 uppercase tracking-widest text-sm font-bold hover:bg-gold hover:text-black-rich transition-all duration-300"
                        >
                            Apply Now - Limited Seats
                        </motion.button>
                    </div>
                </div>

            </div>
        </section>
    );
}
