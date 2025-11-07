
import React from 'react';
import { useI18n } from '@/lib/i18n';

const Footer = () => {
  const year = new Date().getFullYear();
  const { translations } = useI18n();
  const { common, footer: footerText, newsletterFooter: newsletterFooterText } = translations;

  return (
    <footer className="bg-justice-950 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">{common.brand.primary}</span>
              <span className="ml-1 text-sm font-medium text-justice-400">{common.brand.secondary}</span>
            </div>
            <p className="text-justice-300 text-sm max-w-xs">
              {footerText.mission}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{footerText.quickLinksTitle}</h4>
            <ul className="space-y-2 text-justice-300">
              <li>
                <a href="#why-join" className="hover:text-white transition-colors">{footerText.quickLinks.whyJoin}</a>
              </li>
              <li>
                <a href="#compensation" className="hover:text-white transition-colors">{footerText.quickLinks.compensation}</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">{footerText.quickLinks.howItWorks}</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">{footerText.quickLinks.faq}</a>
              </li>
              <li>
                <a href="#join-form" className="hover:text-white transition-colors">{footerText.quickLinks.join}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{footerText.legalTitle}</h4>
            <ul className="space-y-2 text-justice-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">{footerText.legalLinks.privacy}</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">{footerText.legalLinks.terms}</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">{footerText.legalLinks.cookies}</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">{footerText.legalLinks.legal}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{footerText.contactTitle}</h4>
            <ul className="space-y-2 text-justice-300">
              <li>{footerText.contactLabels.email}: {common.contact.email}</li>
              <li>{footerText.contactLabels.phone}: {common.contact.phone}</li>
              <li>{footerText.contactLabels.address}: {common.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-justice-800 text-justice-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>
            © {year} {common.brand.primary} {common.brand.secondary}. {footerText.rightsReserved}
          </p>
          <p className="mt-4 md:mt-0">{newsletterFooterText.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
