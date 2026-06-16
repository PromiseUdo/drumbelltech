// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Loader = ({ onComplete }: { onComplete: () => void }) => {
//   const [percentage, setPercentage] = useState(0);

//   useEffect(() => {
//     // Simulate loading progress
//     const interval = setInterval(() => {
//       setPercentage((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           // Delay slightly to ensure 100% is visible before fading out
//           setTimeout(() => {
//             onComplete();
//           }, 300);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 30); // Adjust speed: 30ms per step = ~3 seconds for 0-100

//     return () => clearInterval(interval);
//   }, [onComplete]);

//   return (
//     <AnimatePresence>
//       {percentage <= 100 && (
//         <motion.div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-transparent text-white"
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div
//             className="text-5xl font-bold"
//             animate={{ scale: [1, 1.1, 1] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//           >
//             {percentage}%
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Loader;

// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Loader = ({ onComplete }: { onComplete: () => void }) => {
//   const [percentage, setPercentage] = useState(0);

//   useEffect(() => {
//     // Simulate loading progress
//     let isMounted = true;

//     const interval = setInterval(() => {
//       setPercentage((prev) => {
//         if (!isMounted || prev >= 100) {
//           clearInterval(interval);
//           if (prev >= 100) {
//             // Delay slightly to ensure 100% is visible
//             setTimeout(() => {
//               if (isMounted) onComplete();
//             }, 400); // Reduced from 300ms for faster feel
//           }
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 10); // 10ms per step = ~1 second for 0-100

//     return () => {
//       isMounted = false;
//       clearInterval(interval);
//     };
//   }, [onComplete]); // onComplete is stable, but included for correctness

//   return (
//     <AnimatePresence>
//       {percentage <= 100 && (
//         <motion.div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900 text-white"
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }} // Faster fade-out
//         >
//           <motion.div
//             className="text-5xl font-bold"
//             animate={{ scale: [1, 1.1, 1] }}
//             transition={{ repeat: Infinity, duration: 0.8 }} // Faster pulse
//           >
//             {percentage}%
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Loader;

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (!isMounted || prev >= 100) {
          clearInterval(interval);
          if (prev >= 100) {
            setTimeout(() => {
              if (isMounted) onComplete();
            }, 200); // Reverted to 200ms for snappier feel
          }
          return 100;
        }
        return prev + 1;
      });
    }, 10); // 10ms per step = ~1 second for 0-100

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {percentage <= 100 && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="font-nbInternational text-[#f1d59f] text-xl mb-6 tracking-widest uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Drumbell Technologies
          </motion.p>
          <motion.div
            className="text-6xl font-bold text-white"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          >
            {percentage}%
          </motion.div>
          <div className="mt-8 w-48 h-[2px] bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#f1d59f] rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
