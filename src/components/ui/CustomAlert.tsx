import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface CustomAlertProps {
  isOpen: boolean;
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  isOpen,
  type,
  message,
  onClose,
}) => {
  const getAlertStyles = () => {
    switch (type) {
      case "success":
        return {
          bg: "bg-green-900/90",
          border: "border-green-500",
          text: "text-green-100",
          icon: "✓",
          iconBg: "bg-green-500",
        };
      case "error":
        return {
          bg: "bg-red-900/90",
          border: "border-red-500",
          text: "text-red-100",
          icon: "✕",
          iconBg: "bg-red-500",
        };
      default:
        return {
          bg: "bg-gray-900/90",
          border: "border-gray-500",
          text: "text-gray-100",
          icon: "i",
          iconBg: "bg-gray-500",
        };
    }
  };

  const styles = getAlertStyles();

  React.useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto close after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={`relative max-w-md w-full ${styles.bg} ${styles.border} border-2 rounded-lg shadow-2xl p-6 backdrop-blur-lg`}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Content */}
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div
                className={`flex-shrink-0 w-10 h-10 ${styles.iconBg} rounded-full flex items-center justify-center text-white font-bold text-lg`}
              >
                {styles.icon}
              </div>

              {/* Message */}
              <div className="flex-1 pt-1">
                <p
                  className={`${styles.text} text-sm font-medium leading-relaxed`}
                >
                  {message}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold-light to-gold rounded-b-lg"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomAlert;
