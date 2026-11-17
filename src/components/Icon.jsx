export default function Icon({ name, size = 24, className = "", style }) {
  return (
    <svg className={`icon ${className}`.trim()} width={size} height={size} style={style}>
      <use href={`#icon-${name}`} />
    </svg>
  );
}
