import { ComponentChildren } from "preact";
interface propsItems {
  children: ComponentChildren;
  value: string;
}

export function SelectItem({ children, value }: propsItems) {
  return (
    <div>
      {children}
    </div>
  );
}
