// @ts-types="@types/react"
import type { ReactNode } from "react";

export interface LinkProps {
  href: string;
  name: string;
  icon: ReactNode | string;
}

export function LinkBox(props: LinkProps) {
  return (
    <li className="py-2 rounded-full bg-gray-600 hover:bg-gray-500">
      <a className="flex items-center" rel="me" href={props.href}>
        {typeof props.icon === "string"
          ? <img className="mx-4 w-6 h-6" src={props.icon} alt={props.name} />
          : <div className="mx-4 w-6 h-6">{props.icon}</div>}
        <p className="items-center text-sm text-gray-100 font-mono overflow-x-auto">
          {props.name}
        </p>
      </a>
    </li>
  );
}
