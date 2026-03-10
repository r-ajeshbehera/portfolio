import { ThemeProvider } from '../components/ThemeProvider';
import ClientWrapper from '../components/ClientWrapper';
import './globals.css';

export const metadata = {
  title: 'Rajesh Behera - Portfolio',
  description: 'Portfolio of Rajesh Behera, a Python Developer',
};

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width-device-width,initial-scale=1.0"/>
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <ClientWrapper>{children}</ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}