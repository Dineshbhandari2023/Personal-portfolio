import { RiReactjsFill, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { animate, motion, Variants } from "framer-motion";

const iconVariants = (duration: any): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technology = () => {
  return (
    <div>
      <div className="border-b border-neutral-900 pb-24">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center justify-center text-4xl uppercase"
        >
          Technologies
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-b border-neutral-800 p-4"
          >
            <RiReactjsFill className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-b border-neutral-800 p-4"
          >
            <RiTailwindCssFill className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-b border-neutral-800 p-4"
          >
            <SiTypescript className="text-7xl text-blue-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-b border-neutral-800 p-4"
          >
            <RiNodejsFill className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-b border-neutral-800 p-4"
          >
            <DiMongodb className="text-7xl text-green-500" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
