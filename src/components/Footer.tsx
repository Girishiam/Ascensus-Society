export default function Footer() {
    return (
        <footer className="bg-black-rich border-t border-white/10 pt-20 pb-10 relative overflow-hidden" id="contact">
            {/* Background glow for footer */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Top CTA Section */}
                <div className="mb-20 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-serif text-white mb-6">Limited Seats Available</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Membership is application-only and capped to ensure high-touch support. Don’t miss your chance to join the service-based business owners achieving predictable clients and faster growth.
                    </p>
                    <button className="bg-gold text-black-rich px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-white hover:scale-105 transition-all duration-300">
                        Apply Before Spots Are Gone
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start border-t border-white/5 pt-16">

                    {/* Branding */}
                    <div className="space-y-6">
                        <span className="font-serif text-2xl text-white font-bold uppercase tracking-widest">
                            Ascensus Society
                        </span>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            The premier private mastermind for established service-based business owners.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-medium uppercase tracking-wider text-sm">Navigation</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {['Who Is It For', 'Why Ascensus', 'Mastermind & Events', 'About Dr. Nick'].map((item, i) => {
                                const hrefs = ['#who-is-it-for', '#what-you-get', '#mastermind', '#about'];
                                return (
                                    <li key={i}>
                                        <a href={hrefs[i]} className="relative group inline-block hover:text-gold transition-colors duration-300">
                                            {item}
                                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Contact/Legals */}
                    <div className="space-y-6">
                        <h4 className="text-white font-medium uppercase tracking-wider text-sm">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {['Privacy Policy', 'Terms of Service', 'Contact Support'].map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="relative group inline-block hover:text-gold transition-colors duration-300">
                                        {item}
                                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Ascensus Society. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
