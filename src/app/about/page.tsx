'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-6"
    >
      <h1 className="text-3xl font-bold mb-4">About FileBox</h1>
      <p className="text-lg mb-4">
        FileBox is your go-to platform for easy and secure file sharing. Our mission is to provide a reliable and user-friendly service that allows you to store, share, and manage your files with ease.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Our Vision</h2>
      <p className="text-lg mb-4">
        We envision a world where file sharing is seamless and efficient. FileBox aims to simplify the way you manage your digital files and enhance collaboration through intuitive and accessible tools.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Our Team</h2>
      <p className="text-lg mb-4">
        Our team is composed of experienced professionals dedicated to delivering the best file-sharing experience. We are passionate about technology and committed to providing top-notch customer support.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="text-lg">
        For any inquiries or feedback, feel free to reach out to us at info@filebox.com. We are always here to help and listen to your suggestions.
      </p>
    </motion.div>
  );
};

export default About;
