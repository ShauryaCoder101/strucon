/**
 * PLACEHOLDER legal copy — NOT legal advice. Have a qualified lawyer review and adapt
 * both documents (and confirm GDPR/cookie requirements) before publishing. See REQUIREMENTS.md §8.
 */
type LegalSection = { heading: string; body: string[] };

export const privacy: { updated: string; intro: string; sections: LegalSection[] } = {
  updated: "2026-07-01",
  intro:
    "This Privacy Policy explains how STRUCON Consulting Private Limited (“STRUCON”, “we”, “us”) collects, uses, and protects the personal information you provide through this website. This is a placeholder to be reviewed by legal counsel.",
  sections: [
    { heading: "Information we collect", body: ["When you submit a form, we collect the details you provide — such as your name, company, email, phone number, message, and any files you upload.", "We may also collect standard technical data (such as IP address and browser type) and analytics data if analytics are enabled."] },
    { heading: "How we use your information", body: ["We use your information to respond to enquiries, prepare proposals, evaluate tender documents, process job applications, and improve our services.", "We do not sell your personal information."] },
    { heading: "Data sharing", body: ["We may share information with service providers who help us operate this website and communicate with you (for example, email or CRM providers), under appropriate confidentiality obligations."] },
    { heading: "Data retention", body: ["We retain personal information only as long as necessary for the purposes described here or as required by law."] },
    { heading: "Your rights", body: ["Depending on your location, you may have rights to access, correct, or delete your personal information. To exercise these rights, contact us using the details below."] },
    { heading: "Contact", body: ["For any privacy questions, email info@strucon.net."] },
  ],
};

export const terms: { updated: string; intro: string; sections: LegalSection[] } = {
  updated: "2026-07-01",
  intro:
    "These Terms of Use govern your access to and use of the STRUCON website. By using this site, you agree to these terms. This is a placeholder to be reviewed by legal counsel.",
  sections: [
    { heading: "Use of the website", body: ["You may use this website for lawful purposes only. You agree not to misuse the site or interfere with its normal operation."] },
    { heading: "Intellectual property", body: ["All content on this website — including text, graphics, and logos — is owned by or licensed to STRUCON and is protected by applicable laws. You may not reproduce it without permission."] },
    { heading: "No warranty", body: ["The website and its content are provided “as is” without warranties of any kind. We do not guarantee that the site will be error-free or uninterrupted."] },
    { heading: "Limitation of liability", body: ["To the extent permitted by law, STRUCON is not liable for any damages arising from your use of this website."] },
    { heading: "Submissions", body: ["Any documents or information you submit through our forms are handled in accordance with our Privacy Policy. Do not submit confidential information you are not authorised to share."] },
    { heading: "Governing law", body: ["These terms are governed by the laws of India, subject to review by legal counsel."] },
    { heading: "Contact", body: ["For questions about these terms, email info@strucon.net."] },
  ],
};
