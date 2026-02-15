import { SVGProps } from "react";

export const Git = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M18 9v6" />
    <path d="M6 9v6" />
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
  Code, 
  Server, 
  Database, 
  TestTube, 
  Cloud,
  Phone
} from 'lucide-react';
