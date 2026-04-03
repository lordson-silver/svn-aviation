import { Metadata } from 'next';
import { ContactClient } from '@/components/sections/contact-client';

export const metadata: Metadata = {
  title: 'Contact SVN Aviation | Private Jet & Helicopter Charter Quote',
  description: 'Request a charter flight quote from SVN Aviation. Our team provides 24/7 aviation coordination for executive jets, helicopter transfers, and emergency medical flights in Nigeria.',
  openGraph: {
    title: 'Contact SVN Aviation | Private Jet & Helicopter Charter Quote',
    description: 'Request a charter flight quote from SVN Aviation. 24/7 service across Nigeria.',
    images: ['/og-image.jpg'],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
