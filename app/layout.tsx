import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
//providers
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/providers/theme-provider"
import { ReduxProvider } from '@/redux/Provider'
import { ModalProvider } from '@/components/providers/modal-provider'
import { cn } from '@/lib/utils'

const sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat App',
  description: 'A team chat app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(
          sans.className,
          "bg-white dark:bg-[#313338]"
        )}>
          <ReduxProvider>
            <ThemeProvider attribute="class"
              defaultTheme="dark"
              enableSystem={true}
              storageKey="chat-theme">
              <ModalProvider />
              {children}
            </ThemeProvider>
          </ReduxProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
