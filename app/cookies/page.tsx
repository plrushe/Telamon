import type {Metadata} from "next";
import Link from "next/link";
import {site} from "@/lib/site";
import {Breadcrumb} from "@/components/Breadcrumb";

export const metadata:Metadata={title:"Cookie Notice",description:"How Telamon Consulting uses cookies and similar technologies on this website."};

export default function Cookies(){
return <>
<section className="dark pageHero">
<div className="shell">
<Breadcrumb items={[{label:"Home",href:"/"},{label:"Cookie Notice"}]}/>
<p className="eyebrow">LEGAL</p>
<h1>Cookie Notice</h1>
<p className="lead">This notice explains what cookies and similar technologies this website uses, and the choices available to you.</p>
</div>
</section>
<section className="section light">
<div className="shell legalDoc">
<p className="updated">Last updated: 28 July 2026</p>

<h2>1. What are cookies</h2>
<p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, work more efficiently, and to provide information to the site owner. Similar technologies (such as local storage) can be used for the same purposes.</p>

<h2>2. Cookies used on this website</h2>
<p>This website is built to run without setting analytics, advertising or tracking cookies. At present, {site.name} does not use Google Analytics, advertising pixels, or any other non-essential cookie on this site.</p>
<table>
<thead><tr><th>Category</th><th>Used on this site?</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td>Strictly necessary</td><td>None currently set</td><td>Would be used only for core functionality the site cannot work without (e.g. security tokens on a future form submission). These do not require consent under UK/EU law, and none are currently in use.</td></tr>
<tr><td>Performance / analytics</td><td>Not in use</td><td>Would help us understand how visitors use the site (e.g. Google Analytics). None are currently active.</td></tr>
<tr><td>Functionality</td><td>Not in use</td><td>Would remember choices you make, such as preferences. None are currently active.</td></tr>
<tr><td>Targeting / advertising</td><td>Not in use</td><td>Would be used to deliver relevant advertising or measure campaign performance. None are currently active, and we do not run advertising on this site.</td></tr>
</tbody>
</table>
<p>If we introduce analytics, chat tools, or marketing technologies in future, we will update this notice and, where required by the Privacy and Electronic Communications Regulations (PECR) and UK GDPR, present a cookie consent banner so you can choose which non-essential categories to allow before any such cookie is set.</p>

<h2>3. Third-party content</h2>
<p>Some pages link out to third-party sites (for example, LinkedIn). Those sites have their own cookie and privacy practices, which we do not control — we recommend reviewing their policies separately.</p>

<h2>4. Managing cookies in your browser</h2>
<p>Because this site does not currently set non-essential cookies, there is nothing to opt out of. If that changes, or if you want to manage cookies from other sites you visit, most browsers let you view, block or delete cookies through their settings:</p>
<ul>
<li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
<li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
<li><a href="https://support.microsoft.com/en-us/microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
<li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
</ul>
<p>Blocking or deleting cookies may affect the functionality of other websites you visit, though it will have no effect on this one.</p>

<h2>5. Changes to this notice</h2>
<p>We will update this notice whenever the cookies or similar technologies used on this site change. The "last updated" date at the top of this page reflects the most recent revision.</p>

<h2>6. Contact us</h2>
<p>For questions about this notice, see also our <Link href="/privacy">Privacy Policy</Link>, or contact us at <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.</p>

<Link className="button gold" href="/contact" style={{marginTop:20}}>Book a Discovery Call</Link>
</div>
</section>
</>;
}
