"use client";
import React from "react";
import Link from "next/link";
import styles from "@/app/components/Footer/Footer.module.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/team", text: "Team" },
    { href: "/contact", text: "Contact" },
  ];

  const legalLinks = [
    { href: "/privacy-policy", text: "Privacy Policy" },
    { href: "/terms-and-conditions", text: "Terms & Conditions" },
  ];

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.brandSection}>
          <h3 className={styles.logo}>🌟 NetwortyIdeas</h3>
          <p className={styles.tagline}>
            Connect, Collab and Grow
          </p>
        </div>

        <div className={styles.linksSection}>
          <h4 className={styles.sectionTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            {quickLinks.map((link) => (
              <li key={link.href} className={styles.listItem}>
                <Link href={link.href} className={styles.link}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.linksSection}>
          <h4 className={styles.sectionTitle}>Legal</h4>
          <ul className={styles.linkList}>
            {legalLinks.map((link) => (
              <li key={link.href} className={styles.listItem}>
                <Link href={link.href} className={styles.link}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h4 className={styles.sectionTitle}>Contact</h4>
          <div className={styles.contactDetails}>
            <p>📧 <a href="mailto:contact@networtyideas.com" className={styles.link}>contact@networtyideas.com</a></p>
            <p>📞 <a href="tel:+919779773919" className={styles.link} >+ 91 9779773919</a></p>
            <p>🏢 Greater Noida Near Gaur City</p>
            <p>🌍 Uttar Pradesh, India</p>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        &copy; {currentYear} NetwortyIdeas. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
