'use client'; // İstemci tarafında render edilecek

import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-6"
    >
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-lg mb-4">
        At FileBox, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our platform.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="text-lg mb-4">
        We collect information that you provide directly to us, such as when you upload files, create an account, or interact with our services. This may include personal data like your name, email address, and payment information.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <p className="text-lg mb-4">
        We use your information to provide, maintain, and improve our services. This includes processing file uploads, managing user accounts, and communicating with you about your account and our services.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <p className="text-lg mb-4">
        We implement security measures to protect your data from unauthorized access or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Changes to This Policy</h2>
      <p className="text-lg">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our services after such changes indicates your acceptance of the new policy.
      </p>
    </motion.div>
  );
};

export default PrivacyPolicy;
