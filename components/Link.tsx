import type { ComponentChildren } from "preact";

export interface LinkProps {
  href: string;
  name: string;
  icon: ComponentChildren | string;
}

export function Link(props: LinkProps) {
  return (
    <div class="mx-4 my-2 py-2 border(1 gray-200) rounded-full bg-gray-700 hover:bg-gray-500">
      <a class="flex items-center" rel="me" href={props.href}>
        {typeof props.icon === "string"
          ? <img class="mx-4 w-6 h-6" src={props.icon}></img>
          : <div class="mx-4 w-6 h-6">{props.icon}</div>}
        <p class="items-center text(sm gray-200)">{props.name}</p>
      </a>
    </div>
  );
}
