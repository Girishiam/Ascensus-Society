import { motion, useScroll, useTransform } from 'framer-motion';

// Curtain Reveal Component for Editorial Typography
const RevealText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => (
    <span className={`overflow-hidden inline-block align-bottom ${className}`}>
        <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.33, 1, 0.68, 1] }}
            className="inline-block"
        >
            {text}
        </motion.span>
    </span>
);

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    // Sophisticated modern boardroom image
                    backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y,
                }}
            >
                {/* Darker overlay to maintain "Old Money" vibe and text readability */}
                <div className="absolute inset-0 bg-navy-900/90 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-transparent to-navy-900" />
            </motion.div>

            {/* Floating Animated Shapes */}
            <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none z-0"
            />

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <motion.span
                        whileHover={{ scale: 1.05, borderColor: "rgba(197, 160, 89, 0.6)" }}
                        className="inline-block text-gold uppercase tracking-[0.2em] text-xs md:text-sm font-semibold border border-gold/30 px-6 py-3 bg-black-rich/50 backdrop-blur-sm cursor-default transition-colors"
                    >
                        Application Only • Limited Seats
                    </motion.span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight">
                    <div className="mb-2">
                        <RevealText text="Consistently Grow." delay={0.2} />
                    </div>
                    <div>
                        <span className="italic text-white-off/90 overflow-hidden inline-block align-bottom">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                                className="inline-block"
                            >
                                Without the Burnout.
                            </motion.span>
                        </span>
                    </div>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light leading-relaxed"
                >
                    A high-touch mastermind for service-based business owners who want more clients consistently, practical strategies, and a results-driven community—without posting 24/7.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(197,160,89,0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gold text-black-rich px-10 py-4 uppercase tracking-widest text-sm font-bold shadow-lg shadow-gold/10 relative overflow-hidden group"
                    >
                        <span className="relative z-10">Request Your Seat</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}
