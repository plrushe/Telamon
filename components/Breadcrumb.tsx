import Link from "next/link";
export type Crumb={label:string;href?:string};
export function Breadcrumb({items}:{items:Crumb[]}){return <p className="breadcrumb">{items.map((c,i)=><span key={c.label}>{i>0&&" / "}{c.href?<Link href={c.href}>{c.label}</Link>:c.label}</span>)}</p>}
