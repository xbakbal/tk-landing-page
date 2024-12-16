import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Mail, Facebook, Youtube } from 'lucide-react';
import SocialLink from './components/SocialLink';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-wrap justify-center gap-6">
            <SocialLink
              href="https://instagram.com/TeknolojikLevye"
              icon={<Instagram className="w-6 h-6" />}
              label="Instagram"
            />
            <SocialLink
              href="https://youtube.com/@TeknolojikLevye"
              icon={<Youtube className="w-6 h-6" />}
              label="Youtube"
            />
            <SocialLink
              href="https://twitter.com/@TeknolojikLevye"
              icon={<Twitter className="w-6 h-6" />}
              label="Twitter"
            />
            <SocialLink
              href="https://facebook.com//TeknolojikLevye"
              icon={<Facebook className="w-6 h-6" />}
              label="Facebook"
            />
            <SocialLink
              href="mailto:teknolojiklevye@gmail.com"
              icon={<Mail className="w-6 h-6" />}
              label="Email"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;