'use client';

import { useState } from 'react';
import { GlobeHemisphereEast, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const businessName = "{{ $json['Business Name'] }}";
const email = "{{ $json['Business Email'] }}";
const address = "{{ $json['Business Address'] }}";
const phone = "{{ $json['Business Phone'] }}";
const primaryColor = "{{ $json['Primary Color'] || '#3b82f6' }}";
const secondaryColor = "{{ $json['Secondary Color'] || '#1e293b' }}";
const accentColor1 = "{{ $json['Accent Color 1'] || '#10b981' }}";
const accentColor2 = "{{ $json['Accent Color 2'] || '#f59e0b' }}";
const logoUrl = "{{ $json['Logo URL'] }}";
const language = "{{ $json['Language'] }}";
const aboutUs = "{{ $json['About Us & Vision Mission'] }}";
const products = "{{ $json['Products/Services'] }}";
const productImages = "{{ $json['Product Images (URLs)'] }}";
const aboutUsImages = "{{ $json['About Us Images (URLs)'] }}";
const socialMedia = "{{ $json['Social Media Links'] }}";

const [name, setName] = useState('');
const [emailForm, setEmail] = useState('');
const [message, setMessage] = useState('');

function handleSubmit(e) {
  e.preventDefault();
  console.log(name, emailForm, message);
  setName('');
  setEmail('');
  setMessage('');
}

const langText = {
  heroTitle: language === 'Bahasa Malaysia' ? 'Selamat Datang' : language === 'Both' ? 'Welcome / Selamat Datang' : 'Welcome',
  heroDescription: language === 'Bahasa Malaysia' ? 'Kami menyediakan perkhidmatan terbaik' : language === 'Both' ? 'We provide the best services / Kami menyediakan perkhidmatan terbaik' : 'We provide the best services',
  aboutUsTitle: language === 'Bahasa Malaysia' ? 'Tentang Kami' : language === 'Both' ? 'About Us / Tentang Kami' : 'About Us',
  productsTitle: language === 'Bahasa Malaysia' ? 'Produk / Perkhidmatan' : language === 'Both' ? 'Products / Services / Produk / Perkhidmatan' : 'Products / Services',
  contactTitle: language === 'Bahasa Malaysia' ? 'Hubungi Kami' : language === 'Both' ? 'Contact Us / Hubungi Kami' : 'Contact Us',
  contactDescription: language === 'Bahasa Malaysia' ? 'Sila hubungi kami untuk maklumat lanjut' : language === 'Both' ? 'Please contact us for more information / Sila hubungi kami untuk maklumat lanjut' : 'Please contact us for more information',
  nameLabel: language === 'Bahasa Malaysia' ? 'Nama' : language === 'Both' ? 'Name / Nama' : 'Name',
  emailLabel: language === 'Bahasa Malaysia' ? 'Emel' : language === 'Both' ? 'Email / Emel' : 'Email',
  messageLabel: language === 'Bahasa Malaysia' ? 'Mesej' : language === 'Both' ? 'Message / Mesej' : 'Message',
  submitLabel: language === 'Bahasa Malaysia' ? 'Hantar' : language === 'Both' ? 'Submit / Hantar' : 'Submit',
};

export default function Home() {
  return (
    <div className={`bg-${secondaryColor} text-white`}>
      <nav className={`sticky top-0 bg-${primaryColor} flex justify-between items-center p-4`}>
        <Link href="#" className="text-lg font-bold">
          <Image src={logoUrl} alt={businessName} width={40} height={40} />
          {businessName}
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="#hero" className="text-lg font-bold">
              {langText.heroTitle}
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-lg font-bold">
              {langText.aboutUsTitle}
            </Link>
          </li>
          <li>
            <Link href="#products" className="text-lg font-bold">
              {langText.productsTitle}
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-lg font-bold">
              {langText.contactTitle}
            </Link>
          </li>
        </ul>
      </nav>
      <section id="hero" className={`h-screen bg-gradient-to-b from-${primaryColor} to-${secondaryColor} flex justify-center items-center`}>
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">{langText.heroTitle}</h1>
          <p className="text-2xl">{langText.heroDescription}</p>
          <Link href="#about" className={`bg-${accentColor1} hover:bg-${accentColor2} text-white font-bold py-2 px-4 rounded`}>
            {langText.aboutUsTitle}
          </Link>
        </div>
      </section>
      <section id="about" className={`py-20 bg-${secondaryColor} text-white`}>
        <div className="container mx-auto p-4">
          <h2 className="text-4xl font-bold">{langText.aboutUsTitle}</h2>
          <p className="text-2xl">{aboutUs}</p>
          {aboutUsImages && (
            <div className="mt-10">
              <Image src={aboutUsImages} alt={businessName} width={800} height={600} />
            </div>
          )}
        </div>
      </section>
      <section id="products" className={`py-20 bg-${secondaryColor} text-white`}>
        <div className="container mx-auto p-4">
          <h2 className="text-4xl font-bold">{langText.productsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {products && products.split(',').map((product, index) => (
              <div key={index} className={`bg-${primaryColor} p-4 rounded`}>
                <h3 className="text-2xl font-bold">{product}</h3>
                {productImages && productImages.split(',')[index] && (
                  <Image src={productImages.split(',')[index]} alt={product} width={400} height={300} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className={`py-20 bg-${secondaryColor} text-white`}>
        <div className="container mx-auto p-4">
          <h2 className="text-4xl font-bold">{langText.contactTitle}</h2>
          <p className="text-2xl">{langText.contactDescription}</p>
          <div className="mt-10">
            <p>
              <GlobeHemisphereEast className="inline-block mr-2" /> {address}
            </p>
            <p>
              <Mail className="inline-block mr-2" /> {email}
            </p>
            <p>
              <Phone className="inline-block mr-2" /> {phone}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div>
              <label className="block text-2xl font-bold" htmlFor="name">{langText.nameLabel}</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className={`bg-${primaryColor} p-2 rounded`}/>
            </div>
            <div>
              <label className="block text-2xl font-bold" htmlFor="email">{langText.emailLabel}</label>
              <input type="email" id="email" value={emailForm} onChange={(e) => setEmail(e.target.value)} className={`bg-${primaryColor} p-2 rounded`}/>
            </div>
            <div>
              <label className="block text-2xl font-bold" htmlFor="message">{langText.messageLabel}</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className={`bg-${primaryColor} p-2 rounded`}/>
            </div>
            <button type="submit" className={`bg-${accentColor1} hover:bg-${accentColor2} text-white font-bold py-2 px-4 rounded`}>
              {langText.submitLabel}
            </button>
          </form>
        </div>
      </section>
      <footer className={`py-10 bg-${primaryColor} text-white text-center`}>
        <p>
          {businessName} {new Date().getFullYear()} {language === 'Bahasa Malaysia' ? 'Hak Cipta' : language === 'Both' ? 'Copyright / Hak Cipta' : 'Copyright'}
        </p>
        <div className="mt-4 space-x-4">
          {socialMedia && socialMedia.split(',').map((social, index) => (
            <a key={index} href={social} target="_blank" rel="noopener noreferrer">
              <Image src={`https://cdn-icons-png.flaticon.com/512/2111/${index + 1}.png`} alt={social} width={30} height={30} />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}