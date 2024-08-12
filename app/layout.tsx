import "@/app/ui/global.css"
import { poppins, lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
