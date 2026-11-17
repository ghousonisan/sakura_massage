import useReveal from "../hooks/useReveal";
import shared from "../styles/shared.module.css";

/** Wraps children in a fade-up-on-scroll container. */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, inView] = useReveal();
  const cls = `${shared.reveal} ${inView ? shared.inView : ""} ${className}`.trim();
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  );
}
