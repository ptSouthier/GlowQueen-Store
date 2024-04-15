export default function ChevronDown({ size = '24', className }: { size?: string; className?: string; }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={ size } height={ size } className={ className } viewBox="0 0 24 24" fill="none">
      <path
        d="M11.9999 14.9999C11.8683 15.0007 11.7379 14.9755 11.616 14.9257C11.4942 14.8759 11.3834 14.8026 11.2899 14.7099L7.28994 10.7099C7.10164 10.5216 6.99585 10.2662 6.99585 9.99994C6.99585 9.73364 7.10164 9.47824 7.28994 9.28994C7.47824 9.10164 7.73364 8.99585 7.99994 8.99585C8.26624 8.99585 8.52164 9.10164 8.70994 9.28994L11.9999 12.5899L15.2899 9.29994C15.4812 9.13611 15.7273 9.05051 15.979 9.06023C16.2307 9.06995 16.4694 9.17428 16.6475 9.35238C16.8256 9.53047 16.9299 9.76921 16.9397 10.0209C16.9494 10.2726 16.8638 10.5186 16.6999 10.7099L12.6999 14.7099C12.5137 14.8947 12.2623 14.9988 11.9999 14.9999Z"
        fill="currentColor"
      />
    </svg>
  );
};