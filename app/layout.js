import "./globals.css";

export const metadata = {
  title: "Imperium",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-jakarta">{children}</body>
    </html>
  );
}
