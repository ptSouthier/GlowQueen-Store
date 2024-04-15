export default function QuotationMarks({ size = '32', color = '#264065', className }: { size?: string; color?: string; className?: string; }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={ size } height={ size } className={ className } viewBox="0 0 32 21" fill="none">
      <path
        d="M10.1053 21H0L9.51084 0H15.9505L10.1053 21ZM26.1548 21H16.0495L25.5604 0H32L26.1548 21Z"
        fill={ color }
      />
    </svg>
  );
};
