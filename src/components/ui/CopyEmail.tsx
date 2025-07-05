import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { Copy, CopyCheck } from "lucide-react";

const CopyEmail = () => {
  const [copied, setCopied] = React.useState(false);
  const email = "ushoeb25@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => console.error("Failed to copy email: ", err));
  };
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0px 0px 5px rgba(255,255,255, 0.8)",
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{
        scale: 0.95,
        boxShadow: "0px 0px 20px rgba(255,255,255, 1)",
        y: 2,
        transition: { duration: 0.3 },
      }}
      exit={{ scale: 0, opacity: 0, y: 20 }}
      onClick={copyToClipboard}
      transition={{
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1], // Custom cubic-bezier for smooth entry
        delay: 0.1,
      }}
      className=" btn bg-navy-dark p-4 px-8 cursor-pointer relative overflow-hidden ring-0 ring-black outline-none outline-0 rounded-full"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="copied"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex items-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, duration: 0.4, ease: "backOut" }}
            >
              <CopyCheck className="inline mr-2" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              Copied!!
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 30, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex items-center"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.4 }}
            >
              <Copy className="inline mr-2" />
            </motion.div>
            <span>Copy Email</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success pulse effect */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              damping: 60,
              stiffness: 300,
              mass: 10,
            }}
            className="absolute inset-0 bg-gradient-radial rounded-lg pointer-events-none"
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmail;
