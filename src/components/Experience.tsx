import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div>
      <div className="text-center border-b border-neutral-900 pb-14 ">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-4xl uppercase justify-center"
        >
          Experience
        </motion.h2>
      </div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p>Currently Working as a Frontend developer as BlueFox Ltd.</p>
      </motion.div>
    </div>
  );
};

export default Experience;
