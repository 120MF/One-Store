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
    <html suppressHydrationWarning lang="zh-CN">
      <body className="antialiased bg-white h-full">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <OSAppBar />
            <div className="overflow-y-scroll overflow-x-hidden pt-12 pb-16">
              {children}
            </div>
            <footer>
              <MobileFooter />
            </footer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
