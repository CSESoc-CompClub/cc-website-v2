import React from 'react';
import rainbowLogo from '../assets/general/compclub-rainbow-logo.png';

export default function Footer() {
  return (
    <footer className="p-4 bg-slate-900">
      <img src={rainbowLogo} className="w-15 h-10" alt="" />
      <hr className="my-6 border-gray-200" />
      <div className="text-sm text-white text-center">© 2022 CSESoc CompClub</div>
    </footer>
  );
}
