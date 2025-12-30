import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Who Is It For', href: '#who-is-it-for' },
        { name: 'Why Ascensus', href: '#what-you-get' },
        { name: 'Mastermind', href: '#mastermind' },
        { name: 'About', href: '#about' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-navy-900/90 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a
                            href="#"
                            className="font-serif text-xl sm:text-2xl tracking-[0.2em] text-white font-bold uppercase hover:text-gold transition-colors block"
                        >
                            Ascensus Society
                        </a>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white-off/80 hover:text-gold transition-colors text-xs lg:text-sm uppercase tracking-wide font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="ml-4 px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-navy-900 transition-all duration-300 font-medium uppercase tracking-wider text-xs"
                        >
                            Apply Now
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white-off hover:text-gold transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-navy-900 border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-white-off hover:text-gold transition-colors text-center text-sm uppercase tracking-wide py-2"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex justify-center pt-2">
                                <button className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-navy-900 transition-colors uppercase tracking-wider text-xs w-full">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
