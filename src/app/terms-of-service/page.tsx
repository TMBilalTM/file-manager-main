'use client'; // İstemci tarafında render edilecek

import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-6"
    >
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-lg mb-4">
        Welcome to FileBox! By using our file-sharing platform, you agree to comply with and be bound by the following Terms of Service.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Acceptance of Terms</h2>
      <p className="text-lg mb-4">
        By accessing or using FileBox, you agree to these Terms of Service and our Privacy Policy. If you do not agree with these terms, please do not use our services.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">User Responsibilities</h2>
      <p className="text-lg mb-4">
        You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Prohibited Activities</h2>
      <p className="text-lg mb-4">
        You agree not to use FileBox for any illegal or unauthorized purposes. This includes, but is not limited to, uploading or sharing content that infringes on intellectual property rights or violates any applicable laws.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Termination</h2>
      <p className="text-lg mb-4">
        We reserve the right to terminate or suspend your account at our sole discretion if we believe you have violated these Terms of Service or engaged in any unlawful or harmful behavior.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="text-lg">
        If you have any questions or concerns about these Terms of Service, please contact us at bilpcukbilo@gmail.com.
      </p>
    </motion.div>
  );
};

export default TermsOfService;
