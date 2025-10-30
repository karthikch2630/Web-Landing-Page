import ColorBends from "./ui/ColorBends";
import { MorphingText } from "./ui/morphing-text";

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-black text-white">
            {/* Interactive Background */}
            <div className="absolute inset-0 z-0">
                <ColorBends />
            </div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-[1] pointer-events-none" />

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 pointer-events-none">
                <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">

                    {/* Badge/Label */}


                    {/* Main Headline */}
                    <div className="space-y-4 max-w-5xl mx-auto px-4 text-center">
                        {/* 🧠 Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-snug md:leading-tight text-balance break-words">
                            <MorphingText
                                texts={[
                                    "We Build the Web",
                                    "We Design the Future",
                                    "We Are Brick2Tech",
                                ]}
                                className="text-white"
                            />
                        </h1>

                        {/* 💬 Subheadline */}
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed px-2 md:pt-28 pt-14">
                            Transforming ideas into stunning digital experiences with cutting-edge
                            technology and creative design.
                        </p>
                    </div>


                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center items-center gap-3 pt-6 pointer-events-auto">
                        {/* 🚀 Let's Talk Button */}
                        <a
                            href="/contact"
                            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-br from-blue-400/15 to-blue-500/15 backdrop-blur-md border border-blue-400/30 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105 min-w-[140px] sm:min-w-[200px]"
                        >
                            <span>Let's Talk</span>
                            <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>

                        {/* 💼 View Our Work Button */}
                        <a
                            href="/works"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 min-w-[140px] sm:min-w-[200px]"
                        >
                            <span>View Our Work</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>


                </div>
            </div>

            {/* Scroll Indicator */}

        </section>
    );
};

export default HeroSection;