import type {Metadata} from "next";
import Link from "next/link";
import {site} from "@/lib/site";
import {Breadcrumb} from "@/components/Breadcrumb";

export const metadata:Metadata={title:"Privacy Policy",description:"How Telamon Consulting collects, uses and protects personal data, in line with UK GDPR and the Data Protection Act 2018."};

export default function Privacy(){
return <>
<section className="dark pageHero">
<div className="shell">
<Breadcrumb items={[{label:"Home",href:"/"},{label:"Privacy Policy"}]}/>
<p className="eyebrow">LEGAL</p>
<h1>Privacy Policy</h1>
<p className="lead">This policy explains what personal data Telamon Consulting collects through this website, why, and the rights you have over it.</p>
</div>
</section>
<section className="section light">
<div className="shell legalDoc">
<p className="updated">Last updated: 28 July 2026</p>

<h2>1. Who we are</h2>
<p><strong>{site.name}</strong> ("Telamon", "we", "us", "our") is the data controller for personal data collected through this website ({site.url}). For any question about this policy or how we handle your data, contact us at <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.</p>
<p>Telamon Consulting Ltd is registered under company number 15800123.</p>

<h2>2. Scope</h2>
<p>This policy covers personal data processed when you visit this website, browse our pages, or submit an enquiry through our contact form. It does not cover data we may process about you separately as part of a client engagement — that is governed by the contract and data processing terms agreed with you directly.</p>

<h2>3. What personal data we collect</h2>
<p>We collect personal data in two ways:</p>
<h3>Information you give us</h3>
<p>When you submit our contact form, we collect: first name, last name, work email address, organisation, phone number (optional), area of interest, and the content of your message. We also record your confirmation that you agree to be contacted about your enquiry.</p>
<h3>Information collected automatically</h3>
<p>Our hosting infrastructure automatically logs standard technical information for security and reliability purposes, such as IP address, browser and device type, pages requested and timestamps. This website does not currently use analytics, advertising or tracking cookies — see our <Link href="/cookies">Cookie Notice</Link> for full detail on what is (and is not) set in your browser.</p>

<h2>4. How we use your data, and our lawful basis</h2>
<table>
<thead><tr><th>Purpose</th><th>Lawful basis (UK GDPR Art. 6)</th></tr></thead>
<tbody>
<tr><td>Responding to enquiries submitted via our contact form</td><td>Consent, and our legitimate interest in responding to business enquiries</td></tr>
<tr><td>Maintaining records of communications with prospective and existing clients</td><td>Legitimate interests — managing our client relationships</td></tr>
<tr><td>Keeping the website secure and diagnosing technical issues from server logs</td><td>Legitimate interests — protecting our systems and users</td></tr>
<tr><td>Complying with legal or regulatory obligations</td><td>Legal obligation</td></tr>
</tbody>
</table>
<p>We do not use your personal data for automated decision-making or profiling, and we do not sell your personal data.</p>

<h2>5. Sharing your data</h2>
<p>We do not sell or rent personal data. We may share it with:</p>
<ul>
<li>Service providers who support our operations on our behalf, such as our website hosting provider and, once configured, an email or CRM platform used to manage enquiries — each bound by contractual obligations to protect your data and use it only as we instruct.</li>
<li>Professional advisers (e.g. accountants, legal counsel) where necessary.</li>
<li>Regulators, law enforcement or other third parties where we are required to do so by law.</li>
</ul>

<h2>6. International transfers</h2>
<p>Where a service provider processes data outside the UK or European Economic Area, we take steps to ensure an adequate level of protection is in place, such as reliance on adequacy regulations or the UK International Data Transfer Agreement / EU Standard Contractual Clauses. [Specific sub-processors and transfer locations to be confirmed and listed here once our contact-form backend and any CRM are finalised.]</p>

<h2>7. How long we keep your data</h2>
<p>We retain enquiry data for as long as reasonably necessary to respond to your enquiry and to maintain a record of the interaction, and no longer than 24 months from your last contact with us unless a client relationship or legal obligation requires us to keep it for longer. Data collected automatically in server logs is retained only for a short period necessary for security and diagnostic purposes.</p>

<h2>8. How we protect your data</h2>
<p>We apply appropriate technical and organisational measures — including access controls, encryption in transit, and secure hosting — to protect personal data against unauthorised access, loss or misuse, proportionate to the sensitivity of the data involved.</p>

<h2>9. Your rights</h2>
<p>Under UK GDPR and the Data Protection Act 2018, you have the right to:</p>
<ul>
<li>Access the personal data we hold about you</li>
<li>Have inaccurate data corrected</li>
<li>Request erasure of your data, in certain circumstances</li>
<li>Restrict or object to our processing of your data, in certain circumstances</li>
<li>Request that your data be provided to you, or transferred, in a portable format</li>
<li>Withdraw consent at any time, where processing is based on consent</li>
</ul>
<p>To exercise any of these rights, contact us at <a href={`mailto:${site.email}`}>{site.email}</a>. We will respond within one month. If you are unhappy with how we have handled your data, you have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a> or on 0303 123 1113.</p>

<h2>10. Children's privacy</h2>
<p>This website and our services are directed at businesses, not children. We do not knowingly collect personal data from anyone under the age of 16.</p>

<h2>11. Changes to this policy</h2>
<p>We may update this policy from time to time to reflect changes in our practices or legal requirements. The "last updated" date at the top of this page shows when it was last revised. Material changes will be reflected here before they take effect.</p>

<h2>12. Contact us</h2>
<p>Questions about this policy or how your data is handled can be directed to <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.</p>

<Link className="button gold" href="/contact" style={{marginTop:20}}>Book a Discovery Call</Link>
</div>
</section>
</>;
}
