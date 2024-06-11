import '@/styles/reset.css'
import '@vook-client/design-system/style.css'

import { Metadata } from 'next'

import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { pretendard } from '@/styles/fonts'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="kr">
      <body className={pretendard.className}>
        <ReactQueryProvider>
          <div>{children}</div>
        </ReactQueryProvider>
      </body>
    </html>
  )
}

export default RootLayout
