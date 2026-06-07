import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'EasyAgentOps - Agent Operations Guide',
  description: 'Personal blog about agent operations, tools, and best practices',
  openGraph: {
    title: 'EasyAgentOps',
    description: 'Personal blog about agent operations',
    url: 'https://easyagentops.in',
    siteName: 'EasyAgentOps',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
