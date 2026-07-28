const partners=[
{name:"Microsoft 365",src:"/images/partners/m365.svg"},
{name:"Google Workspace",src:"/images/partners/google-workspace.svg"},
{name:"Zoho",src:"/images/partners/zoho.svg"},
];
export function PartnersStrip(){
const track=[...partners,...partners];
return <aside className="strip" aria-label="Our partners"><div className="shell">
<h2>OUR PARTNERS</h2>
<div className="partnerCarousel">
<div className="partnerTrack">
{track.map((p,i)=><span className="partnerSlot" key={`${p.name}-${i}`}><img src={p.src} alt={p.name}/></span>)}
</div>
</div>
</div></aside>}
