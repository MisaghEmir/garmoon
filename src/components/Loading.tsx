import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="w-[100%] pb-72 bg-white h-[100vh] flex flex-col justify-center items-center z-[50] fixed left-0 top-0">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.8 }}
        className="w-[100%] pb-52 bg-white h-[100vh] flex flex-col justify-center items-center z-[50] fixed left-0 top-0"
      >
        <img src="/slazzer-preview-1ygpz.png" className="w-72" alt="" />
        <div className="loader"></div>
      </motion.div>
    </div>
  );
}

export default Loading;
