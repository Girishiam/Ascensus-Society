import { motion } from 'framer-motion';
import { Compass, Users, Crown } from 'lucide-react';

export default function CorePillars() {
    const pillars = [
        {
            icon: <Compass className="w-8 h-8 text-gold" />,
            title: "Strategic Clarity",
            description: "Focused on high-level business architecture. We move beyond tactics to the fundamental shifts required for your next level of evolution."
        },
        {
            icon: <Users className="w-8 h-8 text-gold" />,
            title: "Elite Network",
            description: "Curated access to peers at your level. No beginners, no seekers—only established leaders who challenge and elevate your thinking."
        },
        {
            icon: <Crown className="w-8 h-8 text-gold" />,
            title: "Private Access",
            description: "Direct mentorship from Dr. Nick. Gain insights from decades of high-stakes consulting and psychological strategy."
        }
    ];

    return (
        <section className="py-24 bg-black-rich relative overflow-hidden" id="membership">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">The Membership Experience</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A tripartite approach designed to deconstruct complexity and reconstruct legacy.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-navy-900/50 border border-white/5 p-8 sm:p-10 hover:border-gold/30 hover:bg-navy-900 transition-all duration-300 group"
                        >
                            <div className="mb-6 p-3 bg-white/5 w-fit rounded-sm group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-gold/20">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{pillar.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
