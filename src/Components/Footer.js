// src/components/Footer.js

import React from "react";

export default function Footer() {
  return (
    <footer className="py-16 text-white bg-gray-900">
      <div className="container flex items-center justify-between mx-auto">
        <div>
          <p className="text-sm">&copy; 2024 Sanjay Kumar. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with ❤️ using React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
