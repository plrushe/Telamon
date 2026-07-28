"use client";
import {useRef} from "react";
import Link from "next/link";
import {ArrowRight,ChevronLeft,ChevronRight} from "lucide-react";
import type {Audit} from "@/lib/site";
export function AuditCarousel({audits}:{audits:Audit[]}){
const trackRef=useRef<HTMLDivElement>(null);
const scroll=(dir:1|-1)=>{
const el=trackRef.current;
if(!el)return;
const card=el.querySelector<HTMLElement>(".auditCard");
const amount=(card?card.offsetWidth+20:320)*dir;
el.scrollBy({left:amount,behavior:"smooth"});
};
return <div className="auditCarousel">
<div className="auditTrack" ref={trackRef}>
{audits.map(a=><article className="card auditCard" key={a.title}>
<h3>{a.title}</h3>
<p><strong>Recommended for:</strong><br/>{a.forWho}</p>
<p style={{marginTop:14}}><strong>What you get:</strong><br/>{a.receives}</p>
<div className="auditActions">
<Link className="serviceLink" href="/contact">Discuss this audit <ArrowRight size={14}/></Link>
<Link className="serviceLink" href="/services">More info <ArrowRight size={14}/></Link>
</div>
</article>)}
</div>
<div className="carouselControls">
<button type="button" aria-label="Scroll audits left" onClick={()=>scroll(-1)}><ChevronLeft size={18}/></button>
<button type="button" aria-label="Scroll audits right" onClick={()=>scroll(1)}><ChevronRight size={18}/></button>
</div>
</div>}
