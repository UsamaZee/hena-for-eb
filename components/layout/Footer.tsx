'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/components/layout/logo2.png'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div style={{ borderBottom: '1px solid var(--color-border)' }} className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          {/* Brand */}
          <div>
            <Image src={Logo} width={250} alt="HENA For EB Schools" className="h-auto" />
          </div>

          {/* Navigation */}
          <div>
            <h4 className="section-number mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" style={{ color: 'var(--color-text)' }} className="hover:text-gray-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/why-am-i-running" style={{ color: 'var(--color-text)' }} className="hover:text-gray-600 transition-colors">
                  Why I&apos;m Running
                </Link>
              </li>
              <li>
                <Link href="#get-in-touch" style={{ color: 'var(--color-text)' }} className="hover:text-gray-600 transition-colors">
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="section-number mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@henaforeb.com" style={{ color: 'var(--color-text)' }} className="hover:text-gray-600 transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/henaforeb?igsi=MWFpaWg5a2dzcm5meA%3D%3D&wa_status_inline=true" style={{ color: 'var(--color-text)' }} className="hover:text-gray-600 transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <p style={{ color: 'var(--color-text-muted)' }} className="text-xs">
            © {currentYear} Hena for East Brunswick Board of Education. All rights reserved.
          </p>
          <div style={{ color: 'var(--color-text-muted)' }} className="flex gap-6 text-xs">
            <a href="#" className="hover:text-gray-700 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
