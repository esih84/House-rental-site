import Layout from '@/components/layout/Layout';
import './globals.css';
import { myFont } from '@/utils/fonts';

export const metadata={
  title:"home rental site"
}


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      
      <body className={myFont.className}>
        <Layout>
          {children}
        </Layout>
        </body>
    </html>
  )
}
