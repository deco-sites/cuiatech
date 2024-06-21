import Component, { Props } from "./Component.tsx";

export default function Island(props: Props & { title?: string }) {
  return <Component {...props} />;
}
