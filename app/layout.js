import Layout from '@/components/layout/Layout';
import './globals.css';
import { myFont } from '@/utils/fonts';
import AuthProvider from 'providers/AuthProvider';

export const metadata={
  title:"home rental site"
}


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      
      <body className={myFont.className}>
        <AuthProvider>
          <Layout>
            {children}
          </Layout>
        </AuthProvider>
        </body>
    </html>
  )
}
