// import { ArrowRight } from 'lucide-react';
// import { Button } from './ui/button';
// import { motion } from 'motion/react';

// export function Hero() {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center pt-24 bg-gradient-to-br from-blue-50 via-white to-purple-50"
//     >
//       <div className="container mx-auto px-4 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, ease: 'easeOut' }}
//           >
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//               Transform Your Business with{' '}
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Digital Excellence
//               </span>
//             </h1>

//             <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
//               We help startups and businesses grow with modern digital solutions —
//               from web & app development to performance-driven marketing.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button
//                 size="lg"
//                 onClick={() => scrollToSection('contact')}
//                 className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
//               >
//                 Get Started
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>

//               <Button
//                 size="lg"
//                 variant="outline"
//                 onClick={() => scrollToSection('services')}
//                 className="text-lg px-8"
//               >
//                 Our Services
//               </Button>
//             </div>

//             {/* Stats */}
//             <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
//               {[
//                 { value: '50+', label: 'Projects' },
//                 { value: '98%', label: 'Satisfaction' },
//                 { value: '30+', label: 'Clients' },
//               ].map((item) => (
//                 <div key={item.label}>
//                   <div className="text-3xl font-bold">
//                     {item.value}
//                   </div>
//                   <div className="text-gray-600 text-sm">
//                     {item.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
//             className="relative"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1758518729685-f88df7890776"
//               alt="Team collaboration in modern office"
//               loading="lazy"
//               className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
//             />

//             {/* Trusted Badge */}
//             <div className="relative mt-6 md:absolute md:-bottom-6 md:-left-6 bg-white p-5 rounded-xl shadow-xl">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
//                   ✓
//                 </div>
//                 <div>
//                   <div className="text-sm text-gray-500">
//                     Trusted by
//                   </div>
//                   <div className="text-lg font-semibold">
//                     30+ Companies
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import Lottie from 'lottie-react';
import hero3d from '../assets/hero3d1.json';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
              We help startups and businesses grow with modern digital solutions —
              from web & app development to performance-driven marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="text-lg px-8"
              >
                Our Services
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { value: '50+', label: 'Projects' },
                { value: '98%', label: 'Satisfaction' },
                { value: '30+', label: 'Clients' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-3xl font-bold">{item.value}</div>
                  <div className="text-gray-600 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT 3D UI (Lottie) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center relative"
          >
            <Lottie
              animationData={hero3d}
              loop
              className="w-[300px] sm:w-[380px] lg:w-[420px]"
            />

            {/* TRUST BADGE */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-sm text-gray-500">Trusted by</div>
                  <div className="text-lg font-semibold">30+ Companies</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
