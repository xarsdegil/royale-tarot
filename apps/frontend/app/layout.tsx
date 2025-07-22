import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../styles/theme';
import '../styles/globals.css';

export const metadata = {
  title: 'Royale Tarot'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
