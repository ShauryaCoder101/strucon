/**
 * Legal copy — the client's own APPROVED Privacy Policy and Terms of Use, supplied in full
 * in the content update form (round 2, Oct 2026, rows 67 and 68) and reproduced here
 * VERBATIM: their headings, their numbering, their wording, their "Last Updated" date.
 *
 * This replaces the placeholder wording published in round 1. It is the client's approved
 * text, so it carries no "pending legal review" annotation and no "not legal advice"
 * disclaimer of ours — do not add either, and do not reword, reorder, renumber or tidy any
 * of it. If the client revises a document, replace the whole document and update `updated`
 * and `updatedLabel` together.
 *
 * `updated` is the ISO date for formatting/metadata; `updatedLabel` is the client's own
 * "Last Updated" line, rendered as written.
 */

/** One block of legal copy. `h3` is a sub-heading inside a numbered section. */
export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "address"; label?: string; lines: string[] };

export type LegalSection = { heading: string; body: LegalBlock[] };

export type LegalDoc = {
  /** The document's own title, as the client wrote it. */
  title: string;
  /** ISO date behind the client's "Last Updated" line. */
  updated: string;
  /** The client's "Last Updated" line, verbatim. */
  updatedLabel: string;
  intro: LegalBlock[];
  sections: LegalSection[];
  /** The client's closing copyright line. */
  notice: string;
};

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  updated: "2026-10-05",
  updatedLabel: "Last Updated: 5 October 2026",
  intro: [
    { type: "p", text: "STRUCON Consulting Pvt. Ltd. (\"STRUCON\", \"we\", \"us\", or \"our\") respects your privacy and is committed to protecting the personal information you provide when you visit or use www.strucon.net (\"Website\")." },
    { type: "p", text: "This Privacy Policy explains what personal information we may collect, how we use it, how we protect it, and the choices available to you." },
    { type: "p", text: "By using our Website or submitting information through our contact or career forms, you acknowledge that you have read and understood this Privacy Policy." },
  ],
  sections: [
    {
      heading: "1. About STRUCON",
      body: [
        { type: "p", text: "STRUCON Consulting Pvt. Ltd. is an Indian engineering consulting company providing civil and structural engineering, design, detailing, project management, 3D modelling, structural steel detailing, architectural design and related engineering services." },
      ],
    },
    {
      heading: "2. Information We Collect",
      body: [
        { type: "p", text: "We may collect personal information that you voluntarily provide to us through our Website, including:" },
        { type: "h3", text: "Contact Information" },
        { type: "p", text: "When you contact us or submit an enquiry, we may collect:" },
        {
          type: "ul",
          items: [
            "Name",
            "Email address",
            "Telephone or mobile number",
            "Information contained in your message or enquiry",
          ],
        },
        { type: "h3", text: "Career Information" },
        { type: "p", text: "If you apply for a position through our Careers section, we may collect:" },
        {
          type: "ul",
          items: [
            "Name",
            "Email address",
            "Telephone or mobile number",
            "Resume/CV",
            "Employment and professional information contained in your application",
            "Other information you voluntarily provide as part of your application",
          ],
        },
        { type: "h3", text: "Technical Information" },
        { type: "p", text: "When you visit our Website, certain technical information may be collected automatically by the Website or its hosting/service infrastructure, such as:" },
        {
          type: "ul",
          items: [
            "IP address",
            "Browser type",
            "Device information",
            "Operating system",
            "Pages visited",
            "Date and time of access",
            "General Website usage information",
          ],
        },
        { type: "p", text: "We use such information, where applicable, to maintain, secure and improve the Website." },
      ],
    },
    {
      heading: "3. How We Use Your Information",
      body: [
        { type: "p", text: "We may use personal information for the following purposes:" },
        {
          type: "ul",
          items: [
            "To respond to enquiries and requests submitted through our Website",
            "To communicate with prospective clients and business contacts",
            "To provide information about our engineering and consulting services",
            "To evaluate and process employment applications",
            "To contact candidates regarding recruitment opportunities",
            "To maintain and improve our Website and services",
            "To protect the security and integrity of our Website",
            "To comply with applicable legal and regulatory requirements",
            "To establish, exercise or defend legal rights where necessary",
          ],
        },
        { type: "p", text: "We will use personal information only for lawful and relevant purposes." },
      ],
    },
    {
      heading: "4. Legal Basis and Consent",
      body: [
        { type: "p", text: "Where required by applicable law, we will obtain your consent before processing your personal information." },
        { type: "p", text: "You may withdraw consent where applicable. Withdrawal of consent will not affect the lawfulness of processing carried out before the withdrawal." },
        { type: "p", text: "Under India's data protection framework, notices concerning personal data should be provided in clear and understandable language and should explain the personal data collected and the purposes for which it is processed." },
      ],
    },
    {
      heading: "5. Sharing of Personal Information",
      body: [
        { type: "p", text: "We do not sell or rent your personal information." },
        { type: "p", text: "We may share personal information where reasonably necessary with:" },
        {
          type: "ul",
          items: [
            "Our employees and authorised personnel",
            "Service providers who help us operate or maintain our Website and business systems",
            "Professional advisers, auditors or legal advisers where necessary",
            "Government authorities or law-enforcement agencies where required by applicable law",
            "Other parties where disclosure is necessary to protect our legal rights, safety, property or business interests",
          ],
        },
        { type: "p", text: "Where third parties process personal information on our behalf, we expect them to handle that information appropriately and in accordance with applicable requirements." },
      ],
    },
    {
      heading: "6. Recruitment Information",
      body: [
        { type: "p", text: "If you submit a resume or job application through our Website, the information will be used for recruitment and related employment purposes." },
        { type: "p", text: "We may retain application information for a reasonable period to consider the application, comply with applicable obligations, maintain recruitment records, or consider the applicant for future suitable opportunities, subject to applicable law." },
      ],
    },
    {
      heading: "7. Data Security",
      body: [
        { type: "p", text: "We take reasonable technical and organisational measures to protect personal information against unauthorised access, misuse, alteration, disclosure, loss or destruction." },
        { type: "p", text: "However, no method of transmitting or storing information over the internet can be guaranteed to be completely secure. Therefore, we cannot guarantee absolute security of information transmitted to us through the internet." },
      ],
    },
    {
      heading: "8. Data Retention",
      body: [
        { type: "p", text: "We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including responding to enquiries, processing recruitment applications, maintaining business records, complying with legal obligations, resolving disputes and protecting our legal rights." },
        { type: "p", text: "When information is no longer required, we may securely delete, anonymise or otherwise dispose of it, subject to applicable legal requirements." },
      ],
    },
    {
      heading: "9. Cookies and Similar Technologies",
      body: [
        { type: "p", text: "Our Website may use cookies or similar technologies that are necessary for Website operation, security, functionality or performance." },
        { type: "p", text: "Where applicable, cookies may help us understand how visitors use the Website and improve the user experience." },
        { type: "p", text: "You can generally control or disable cookies through your web browser settings. Disabling certain cookies may affect the functionality of parts of the Website." },
      ],
    },
    {
      heading: "10. Third-Party Websites",
      body: [
        { type: "p", text: "Our Website may contain links to third-party websites or services." },
        { type: "p", text: "STRUCON is not responsible for the privacy practices, security or content of third-party websites. We encourage you to review the privacy policies of those websites before providing them with personal information." },
      ],
    },
    {
      heading: "11. Your Privacy Rights",
      body: [
        { type: "p", text: "Subject to applicable law, you may have rights regarding your personal information, including the right to:" },
        {
          type: "ul",
          items: [
            "Request information about personal data processed by us",
            "Request correction of inaccurate or incomplete information",
            "Request deletion of personal information where legally applicable",
            "Withdraw consent where processing is based on consent",
            "Exercise other rights available under applicable data protection law",
            "Raise a complaint regarding our handling of personal information",
          ],
        },
        { type: "p", text: "Requests relating to your personal information can be submitted using the contact details provided below." },
        { type: "p", text: "We may need to verify your identity before processing certain requests." },
      ],
    },
    {
      heading: "12. Children's Privacy",
      body: [
        { type: "p", text: "Our Website and services are not intentionally directed at children." },
        { type: "p", text: "We do not knowingly request or collect personal information from children except where permitted or required by applicable law and with appropriate consent." },
        { type: "p", text: "If you believe that a child has provided personal information to us improperly, please contact us so that we can take appropriate action." },
      ],
    },
    {
      heading: "13. Changes to This Privacy Policy",
      body: [
        { type: "p", text: "We may update this Privacy Policy from time to time to reflect changes in our business, Website, technology or applicable laws and regulations." },
        { type: "p", text: "The updated version will be posted on this page with a revised \"Last Updated\" date." },
        { type: "p", text: "We encourage you to review this Privacy Policy periodically." },
      ],
    },
    {
      heading: "14. Contact Us",
      body: [
        { type: "p", text: "If you have questions, concerns, requests or complaints regarding this Privacy Policy or the handling of your personal information, please contact us:" },
        { type: "p", text: "STRUCON Consulting Pvt. Ltd." },
        {
          type: "address",
          label: "Corporate Office:",
          lines: ["801-802, 8th Floor, Astralis Tower,", "Supertech Supernova, Sector 94,", "Noida, Uttar Pradesh – 201301, India"],
        },
        {
          type: "address",
          label: "Registered Office:",
          lines: ["B-Wing, 1st Floor, A55/12,", "DLF Phase–1, Gurgaon, Haryana – 122002, India"],
        },
        {
          type: "address",
          lines: ["Phone: +91-120-4740796", "Email: info@strucon.net", "Website: www.strucon.net"],
        },
      ],
    },
    {
      heading: "15. Governing Law",
      body: [
        { type: "p", text: "This Privacy Policy shall be governed by and interpreted in accordance with the applicable laws of India." },
        { type: "p", text: "Any dispute relating to this Privacy Policy shall be subject to the jurisdiction of the appropriate courts in India, subject to applicable law." },
      ],
    },
  ],
  notice: "© STRUCON Consulting Pvt. Ltd. All Rights Reserved.",
};

export const terms: LegalDoc = {
  title: "Terms of Use",
  updated: "2026-10-05",
  updatedLabel: "Last Updated: 5 October 2026",
  intro: [
    { type: "p", text: "Welcome to the website of STRUCON Consulting Pvt. Ltd. (“STRUCON,” “we,” “us,” or “our”). These Terms of Use (“Terms”) govern your access to and use of www.strucon.net (the “Website”)." },
    { type: "p", text: "By accessing, browsing, or using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use the Website." },
  ],
  sections: [
    {
      heading: "1. About STRUCON",
      body: [
        { type: "p", text: "STRUCON Consulting Pvt. Ltd. is an Indian consulting and engineering firm established in early 2003. The company provides engineering and project-related services including civil and structural engineering, mechanical engineering, E&I, process design, 3D modelling, structural steel detailing, architectural design, engineering consultation, and related design and detailing services." },
        { type: "p", text: "The Website provides general information about STRUCON, its services, projects, capabilities, career opportunities, and contact information." },
      ],
    },
    {
      heading: "2. Use of the Website",
      body: [
        { type: "p", text: "You may use the Website for lawful purposes and in accordance with these Terms." },
        { type: "p", text: "You agree not to:" },
        {
          type: "ul",
          items: [
            "Use the Website for any unlawful, fraudulent, or unauthorized purpose.",
            "Attempt to gain unauthorized access to the Website, its servers, systems, or databases.",
            "Interfere with or disrupt the operation or security of the Website.",
            "Introduce viruses, malware, malicious code, or other harmful material.",
            "Copy, reproduce, modify, distribute, or commercially exploit Website content without authorization.",
            "Use information obtained from the Website to impersonate STRUCON or misrepresent your relationship with STRUCON.",
            "Use automated systems, bots, scraping tools, or similar technologies to access or collect Website content in a manner that could damage, disrupt, or place an unreasonable burden on the Website.",
          ],
        },
      ],
    },
    {
      heading: "3. Website Content",
      body: [
        { type: "p", text: "The information provided on this Website is intended for general informational purposes." },
        { type: "p", text: "STRUCON makes reasonable efforts to maintain accurate and useful information; however, information on the Website may be updated, changed, corrected, or removed from time to time without prior notice." },
        { type: "p", text: "The Website may contain descriptions of STRUCON's services, projects, technical capabilities, industries served, and previous work. Such information does not constitute a guarantee that identical services, capabilities, specifications, timelines, or results will be available for every future project." },
        { type: "p", text: "Any project-specific requirements, technical specifications, deliverables, prices, timelines, responsibilities, warranties, or other commercial terms will be governed by the applicable proposal, quotation, work order, purchase order, agreement, or other written contract between STRUCON and the relevant client." },
      ],
    },
    {
      heading: "4. Professional and Technical Information",
      body: [
        { type: "p", text: "The Website may contain engineering-related information, drawings, descriptions, examples, project references, or other technical material." },
        { type: "p", text: "Such content is provided for general information and should not be treated as project-specific engineering advice, design approval, certification, or a substitute for professional evaluation of a particular project." },
        { type: "p", text: "Users should not rely solely on information published on the Website for making engineering, construction, safety, financial, regulatory, or other project-critical decisions." },
        { type: "p", text: "Project-specific engineering services should be obtained directly from STRUCON under an appropriate professional engagement." },
      ],
    },
    {
      heading: "5. Intellectual Property",
      body: [
        { type: "p", text: "Unless otherwise stated, the Website and its content, including but not limited to:" },
        {
          type: "ul",
          items: [
            "Text and written content;",
            "Logos and trademarks;",
            "Graphics and images;",
            "Website design and layout;",
            "Project descriptions;",
            "Documents and downloadable materials;",
            "Original presentations and other materials;",
          ],
        },
        { type: "p", text: "are owned by or licensed to STRUCON or are used with appropriate authorization." },
        { type: "p", text: "You may view the Website and use its content for personal or legitimate business evaluation purposes." },
        { type: "p", text: "You may not reproduce, republish, distribute, modify, transmit, sell, license, create derivative works from, or commercially exploit Website content without prior written permission from STRUCON, except where permitted by applicable law." },
      ],
    },
    {
      heading: "6. Trademarks",
      body: [
        { type: "p", text: "The STRUCON name, logo, branding, and other marks appearing on the Website may constitute trademarks or other protected intellectual property of STRUCON or their respective owners." },
        { type: "p", text: "Nothing on the Website grants you any license or right to use such trademarks without prior written permission." },
      ],
    },
    {
      heading: "7. Third-Party Links",
      body: [
        { type: "p", text: "The Website may contain links to third-party websites or resources." },
        { type: "p", text: "Such links may be provided for convenience or informational purposes. STRUCON does not necessarily control, endorse, or assume responsibility for the content, availability, accuracy, security, privacy practices, or services of third-party websites." },
        { type: "p", text: "Your use of third-party websites is subject to the terms and policies of those websites." },
      ],
    },
    {
      heading: "8. Project Enquiries and Communications",
      body: [
        { type: "p", text: "The Website provides ways for visitors to contact STRUCON regarding its services and other enquiries. The contact page includes fields such as name, email address, phone number, and message." },
        { type: "p", text: "Submitting an enquiry through the Website does not by itself create a contractual relationship, professional engagement, agency relationship, partnership, or obligation for STRUCON to provide services." },
        { type: "p", text: "Any engagement for professional or consulting services will be subject to mutually agreed commercial and contractual terms." },
      ],
    },
    {
      heading: "9. Careers and Recruitment",
      body: [
        { type: "p", text: "The Website may allow individuals to submit employment-related information and resumes to STRUCON. The careers page currently provides for submission of name, email, phone/mobile number and a resume in DOC or PDF format." },
        { type: "p", text: "Submission of an application does not guarantee an interview, employment, appointment, or any particular outcome." },
        { type: "p", text: "Recruitment decisions remain at the discretion of STRUCON and are subject to applicable employment requirements and company policies." },
        { type: "p", text: "Personal information submitted through the Website is handled in accordance with STRUCON's Privacy Policy." },
      ],
    },
    {
      heading: "10. Privacy",
      body: [
        { type: "p", text: "Your use of the Website may involve the collection and processing of personal information." },
        { type: "p", text: "Please refer to STRUCON's Privacy Policy for information regarding the types of information collected, purposes of processing, sharing, retention, security, and applicable privacy rights." },
        { type: "p", text: "Where applicable, STRUCON will handle personal data in accordance with applicable Indian data-protection and privacy laws. India's Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025 provide the relevant statutory framework for digital personal data protection in India." },
      ],
    },
    {
      heading: "11. Website Availability",
      body: [
        { type: "p", text: "STRUCON does not guarantee that the Website will always be available, uninterrupted, secure, error-free, or free from viruses or other harmful components." },
        { type: "p", text: "The Website may occasionally be unavailable because of maintenance, technical issues, updates, security measures, hosting issues, or circumstances beyond STRUCON's reasonable control." },
        { type: "p", text: "STRUCON reserves the right to modify, suspend, restrict, or discontinue any part of the Website without prior notice." },
      ],
    },
    {
      heading: "12. Disclaimer of Warranties",
      body: [
        { type: "p", text: "To the maximum extent permitted by applicable law, the Website and its content are provided on an “as is” and “as available” basis." },
        { type: "p", text: "STRUCON does not make any express or implied warranty regarding:" },
        {
          type: "ul",
          items: [
            "The completeness or accuracy of all Website content;",
            "Continuous availability of the Website;",
            "Suitability of Website information for a particular purpose;",
            "Freedom from errors, interruptions, or harmful components;",
            "Specific results from relying on Website information.",
          ],
        },
        { type: "p", text: "Information published on the Website should not be interpreted as a representation or warranty concerning a particular project's outcome." },
      ],
    },
    {
      heading: "13. Limitation of Liability",
      body: [
        { type: "p", text: "To the maximum extent permitted by applicable law, STRUCON, its directors, officers, employees, consultants, representatives, and affiliates shall not be liable for any indirect, incidental, special, consequential, exemplary, or similar damages arising from or relating to:" },
        {
          type: "ul",
          items: [
            "Your access to or use of the Website;",
            "Your inability to access or use the Website;",
            "Reliance on Website content;",
            "Errors or omissions in Website information;",
            "Third-party websites or services accessed through links on the Website; or",
            "Unauthorized access or technical interference beyond STRUCON's reasonable control.",
          ],
        },
        { type: "p", text: "Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited under applicable law." },
      ],
    },
    {
      heading: "14. Indemnification",
      body: [
        { type: "p", text: "To the extent permitted by applicable law, you agree to indemnify and hold harmless STRUCON Consulting Pvt. Ltd., its directors, officers, employees, consultants, and representatives from claims, losses, liabilities, damages, costs, or expenses arising from:" },
        {
          type: "ul",
          items: [
            "Your unlawful or unauthorized use of the Website;",
            "Your violation of these Terms;",
            "Your infringement of intellectual property or other rights of STRUCON or a third party; or",
            "Your violation of applicable laws or regulations.",
          ],
        },
      ],
    },
    {
      heading: "15. Confidentiality",
      body: [
        { type: "p", text: "Information submitted through publicly accessible Website forms should not be assumed to be confidential unless STRUCON expressly agrees otherwise in writing." },
        { type: "p", text: "If you need to share confidential technical, commercial, project, or proprietary information, you should establish an appropriate confidentiality arrangement with STRUCON before disclosure." },
      ],
    },
    {
      heading: "16. Changes to These Terms",
      body: [
        { type: "p", text: "STRUCON may update or modify these Terms from time to time to reflect changes to the Website, its services, applicable laws, or business practices." },
        { type: "p", text: "The updated version will be published on this page with a revised “Last Updated” date." },
        { type: "p", text: "Your continued use of the Website after an updated version is published constitutes acceptance of the revised Terms, to the extent permitted by applicable law." },
      ],
    },
    {
      heading: "17. Governing Law and Jurisdiction",
      body: [
        { type: "p", text: "These Terms shall be governed by and interpreted in accordance with the laws of India." },
        { type: "p", text: "Subject to applicable law, disputes arising from or relating to these Terms or your use of the Website shall be subject to the jurisdiction of the competent courts having jurisdiction over STRUCON's applicable registered office." },
      ],
    },
    {
      heading: "18. Severability",
      body: [
        { type: "p", text: "If any provision of these Terms is determined to be unlawful, invalid, or unenforceable, that provision shall be interpreted or modified to the extent necessary to make it enforceable, where legally permissible." },
        { type: "p", text: "The remaining provisions shall continue in full force and effect." },
      ],
    },
    {
      heading: "19. Entire Agreement",
      body: [
        { type: "p", text: "These Terms, together with the Privacy Policy and any other policies expressly incorporated into the Website, constitute the terms governing your general use of the Website." },
        { type: "p", text: "Separate agreements, proposals, work orders, contracts, or other written arrangements between STRUCON and its clients may contain additional terms that govern specific services or projects." },
      ],
    },
    {
      heading: "20. Contact Us",
      body: [
        { type: "p", text: "If you have questions regarding these Terms of Use, you may contact STRUCON using the following details:" },
        { type: "p", text: "STRUCON Consulting Pvt. Ltd." },
        {
          type: "address",
          label: "Corporate Office:",
          lines: ["801-802, 8th Floor, Astralis Tower,", "Supertech Supernova, Sector 94,", "Noida, Uttar Pradesh – 201301, India"],
        },
        {
          type: "address",
          label: "Registered Office:",
          lines: ["B-Wing, 1st Floor, A55/12,", "DLF Phase–1, Gurgaon, Haryana – 122002, India"],
        },
        {
          type: "address",
          lines: ["Phone: +91-120-4740796", "Email: info@strucon.net", "Website: www.strucon.net"],
        },
        { type: "p", text: "These contact details are currently published on STRUCON's Website." },
      ],
    },
  ],
  notice: "© 2026 STRUCON Consulting Pvt. Ltd. All Rights Reserved.",
};
