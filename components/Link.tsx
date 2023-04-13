import type { ComponentChildren } from "preact";

export interface LinkProps {
  href: string;
  name: string;
  icon: ComponentChildren | string;
}

export function Link(props: LinkProps) {
  return (
    <div class="my-2 py-2 rounded-full bg-gray-600 hover:bg-gray-500">
      <a class="flex items-center" rel="me" href={props.href}>
        {typeof props.icon === "string"
          ? <img class="mx-4 w-6 h-6" src={props.icon} alt={props.name}></img>
          : <div class="mx-4 w-6 h-6">{props.icon}</div>}
        <p class="items-center text(sm gray-100) font-mono">{props.name}</p>
      </a>
    </div>
  );
}
