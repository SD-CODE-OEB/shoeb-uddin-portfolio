import React from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import CustomAlert from "./ui/CustomAlert";
import { Particles } from "./ui/Particles";

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [alert, setAlert] = React.useState<{
    isOpen: boolean;
    type: "success" | "error";
    message: string;
  }>({
    isOpen: false,
    type: "success",
    message: "",
  });

  const showAlert = (type: "success" | "error", message: string) => {
    setAlert({ isOpen: true, type, message });
  };

  const closeAlert = () => {
    setAlert((prev) => ({ ...prev, isOpen: false }));
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID || "",
        process.env.EMAILJS_TEMPLATE_ID || "",
        {
          from_name: formData.name,
          from_email: formData.email,
          to_name: "Shoeb Uddin",
          to_email: "ushoeb25@gmail.com",
          message: formData.message,
        },
        process.env.EMAILJS_USER_ID || ""
      );

      console.log("Email sent successfully");
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);
      showAlert(
        "success",
        "Your message has been sent successfully! I'll get back to you soon."
      );
    } catch (error) {
      console.error("Error sending email:", error);
      setIsLoading(false);
      showAlert(
        "error",
        "Failed to send message. Please try again or contact me directly."
      );
    }
  };
  // service_rbs6lzb
  //template_y5fb36m
  return (
    <>
      <Particles className="h-full absolute top-0 left-0 z-[1] w-full" />
      <motion.div
        className="h-full w-full mt-8 mx-auto sm:max-w-md  bg-transparent border border-gold/20 shadow-lg rounded-lg p-4 my-10 backdrop-blur-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          className="text-4xl font-bold mt-2 mb-4"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, duration: 0.6 }}
        >
          Let&apos;s Talk
        </motion.h3>
        <motion.p
          className="text-gray-400"
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I&apos;d love to hear from you! whether you&apos;re looking to
          collaborate on a project, have a question, or just want to say hello,
          feel free to reach out. I&#39;m always open to new opportunities and
          discussions.
        </motion.p>
        <motion.form
          action=""
          className="w-full mt-4 flex flex-col justify-evenly"
          variants={formVariants}
          transition={{ duration: 0.5, delay: 0.3, staggerChildren: 0.1 }}
          onSubmit={handleSubmit}
        >
          <motion.p
            className="mt-4 flex flex-col gap-2 items-start justify-center"
            variants={inputVariants}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <motion.label
              className="text-gray-300 font-semibold cursor-pointer"
              htmlFor="name"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Name
            </motion.label>
            <motion.input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-navy-dark border border-gray-600 rounded-md px-4 py-2 text-gray-200 focus:outline-none transition-all focus:ring-2 focus:ring-gold-light focus:border-transparent"
              whileFocus={{ scale: 1.02 }}
              whileHover={{ borderColor: "#ffd700" }}
              transition={{ duration: 0.2 }}
            />
          </motion.p>
          <motion.p
            className="mt-4 flex flex-col gap-2 items-start justify-center"
            variants={inputVariants}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <motion.label
              className="text-gray-300 font-semibold cursor-pointer"
              htmlFor="email"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Email
            </motion.label>
            <motion.input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-navy-dark border border-gray-600 rounded-md px-4 py-2 text-gray-200 focus:outline-none transition-all focus:ring-2 focus:ring-gold-light focus:border-transparent"
              whileFocus={{ scale: 1.02 }}
              whileHover={{ borderColor: "#ffd700" }}
              transition={{ duration: 0.2 }}
            />
          </motion.p>
          <motion.p
            className="mt-4 flex flex-col gap-2 items-start justify-center"
            variants={inputVariants}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.label
              className="text-gray-300 font-semibold cursor-pointer"
              htmlFor="message"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Message
            </motion.label>
            <motion.textarea
              id="message"
              name="message"
              rows={4}
              cols={24}
              required
              placeholder="Hi there! I would like to..."
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-navy-dark border border-gray-600 rounded-md px-4 py-2 text-gray-200 focus:outline-none transition-all focus:ring-2 focus:ring-gold-light focus:border-transparent"
              whileFocus={{ scale: 1.02 }}
              whileHover={{ borderColor: "#ffd700" }}
              transition={{ duration: 0.2 }}
            />
          </motion.p>
          <motion.button
            type="submit"
            className="mt-6 bg-gold-light text-navy-dark font-semibold px-6 py-2 rounded-md hover:bg-gold shadow hover:shadow-glow hover:text-navy-dark transition-all duration-300 cursor-pointer"
            variants={inputVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, duration: 0.3 }}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>

      <CustomAlert
        isOpen={alert.isOpen}
        type={alert.type}
        message={alert.message}
        onClose={closeAlert}
      />
    </>
  );
};

export default ContactSection;
