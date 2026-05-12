import "./globals.css";

export const metadata = {
  title: "Aura Clinic | Digital Wellness",
  description: "A gentle approach to digital wellness and modern clinical care.",
};

import Providers from "@/context/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
