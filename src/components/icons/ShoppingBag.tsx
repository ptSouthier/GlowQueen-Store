export default function ShoppingBag({ size = '32', color, className }: { size?: string; color?: string; className?: string; }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={ size } height={ size } className={ className } viewBox="0 0 32 32" fill="none">
      <path
        d="M25.3333 9.33341H21.3333V8.00008C21.3333 6.58559 20.7713 5.22904 19.7712 4.22885C18.771 3.22865 17.4144 2.66675 15.9999 2.66675C14.5854 2.66675 13.2289 3.22865 12.2287 4.22885C11.2285 5.22904 10.6666 6.58559 10.6666 8.00008V9.33341H6.66659C6.31296 9.33341 5.97383 9.47389 5.72378 9.72394C5.47373 9.97399 5.33325 10.3131 5.33325 10.6667L5.33325 25.3334C5.33325 26.3943 5.75468 27.4117 6.50482 28.1618C7.25497 28.912 8.27239 29.3334 9.33325 29.3334H22.6666C23.7275 29.3334 24.7449 28.912 25.495 28.1618C26.2452 27.4117 26.6666 26.3943 26.6666 25.3334V10.6667C26.6666 10.3131 26.5261 9.97399 26.2761 9.72394C26.026 9.47389 25.6869 9.33341 25.3333 9.33341ZM13.3333 8.00008C13.3333 7.29284 13.6142 6.61456 14.1143 6.11446C14.6144 5.61437 15.2927 5.33341 15.9999 5.33341C16.7072 5.33341 17.3854 5.61437 17.8855 6.11446C18.3856 6.61456 18.6666 7.29284 18.6666 8.00008V9.33341H13.3333V8.00008ZM23.9999 25.3334C23.9999 25.687 23.8594 26.0262 23.6094 26.2762C23.3593 26.5263 23.0202 26.6667 22.6666 26.6667H9.33325C8.97963 26.6667 8.64049 26.5263 8.39044 26.2762C8.14039 26.0262 7.99992 25.687 7.99992 25.3334L7.99992 12.0001H10.6666V13.3334C10.6666 13.687 10.8071 14.0262 11.0571 14.2762C11.3072 14.5263 11.6463 14.6667 11.9999 14.6667C12.3535 14.6667 12.6927 14.5263 12.9427 14.2762C13.1928 14.0262 13.3333 13.687 13.3333 13.3334V12.0001H18.6666V13.3334C18.6666 13.687 18.8071 14.0262 19.0571 14.2762C19.3072 14.5263 19.6463 14.6667 19.9999 14.6667C20.3535 14.6667 20.6927 14.5263 20.9427 14.2762C21.1928 14.0262 21.3333 13.687 21.3333 13.3334V12.0001L23.9999 12.0001V25.3334Z"
        fill={ color || 'currentColor' }
      />
    </svg>
  );
};
