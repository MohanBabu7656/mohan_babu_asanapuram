import { SVGProps } from "react";

export const ReactIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="10" ry="4.5"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

export const Typescript = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
    <path fill="#1976d2" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z" />
    <path fill="#fff" d="M22.39,32.227h-3.924V17.375h10.158v3.424H22.39v2.887h5.106v3.424h-5.106V32.227z M35.455,21.84h-4.633l-0.893,4.633h-3.424l5.106-13.068h3.849l5.106,13.068h-3.424L35.455,21.84z M34.61,19.336h-2.14l-0.734,3.774h3.607L34.61,19.336z" />
  </svg>
);

export const Tailwind = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
  </svg>
);

export const Nextjs = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <path fill="#000" d="M64 128c35.346 0 64-28.654 64-64S99.346 0 64 0 0 28.654 0 64s28.654 64 64 64z" />
    <path fill="#fff" d="M89.313 46.536h-8.275v34.928h8.275V46.536zM102.77 46.536h-8.275l-20.94 28.324v-28.324h-8.274v34.928h7.24l21.249-28.86v28.86h8.275V46.536h.005z" />
  </svg>
);

export const Git = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M18 9v6" />
    <path d="M6 9v6" />
  </svg>
);

export const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM17.75 12c0-2.43-.8-4.7-2.25-6.5a6 6 0 00-11 0c-1.45 1.8-2.25 4.07-2.25 6.5a2.25 2.25 0 104.5 0c0-1.54.91-2.9 2.25-3.5a2.25 2.25 0 012.5 2.25v2.5a2.25 2.25 0 104.5 0v-2.5c0-.42.06-.83.18-1.22a2.25 2.25 0 00-2.43-2.03zM8.5 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
  </svg>
);

export const Framer = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 9l-6 6h6V9zM12 9V3h6l-6 6zM12 15l6-6v6h-6zM6 9l6-6v6H6z" />
  </svg>
);

export const WhatsappIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52s-.67-.165-.917-.223c-.247-.058-.496-.058-.67.058-.173.117-1.02.486-1.348.92-.328.435-.644.966-.644 1.598 0 .632.273 1.23.323 1.329.1.199.644.966 1.73 1.599 1.599.966 2.457 1.268 3.16.966.328-.134.767-.55 1.047-.967.273-.416.273-.787.198-.967-.075-.199-.273-.323-.52-.471zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
    </svg>
);


// Re-exporting from lucide-react for consistency
export { 
  Github as GitHub, 
  Linkedin, 
  Mail, 
  Twitter, 
  Code, 
  Monitor, 
  Server, 
  Database, 
  TestTube, 
  Cloud, 
  Palette,
  Phone
} from 'lucide-react';
