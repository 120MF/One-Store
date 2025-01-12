import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import "./globals.css";
import theme from "@/utils/theme";
import MobileFooter from "@/components/MobileFooter";
import OSAppBar from "@/components/OSAppBar";

export const metadata: Metadata = {
  title: "One-Store",
  description: "One-Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-white">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <OSAppBar />
            {children}
            <MobileFooter />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
