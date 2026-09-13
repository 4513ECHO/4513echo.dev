import type { ComponentChildren } from "preact";

export interface LinkProps {
  href: string;
  name: string;
  icon: ComponentChildren | string;
}

export function LinkBox(props: LinkProps) {
  return (
    <li className="py-2 rounded-full bg-slate-500/60">
      <a className="flex items-center" rel="me" href={props.href}>
        {typeof props.icon === "string"
          ? <img className="mx-4 w-6 h-6" src={props.icon} alt={props.name} />
          : <div className="mx-4 w-6 h-6">{props.icon}</div>}
        <p className="items-center text-sm font-mono overflow-x-auto">
          {props.name}
        </p>
      </a>
    </li>
  );
}
