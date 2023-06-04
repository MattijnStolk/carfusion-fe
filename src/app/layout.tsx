import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

//importing components
import dynamic from 'next/dynamic'
const Header = dynamic(() => import("@/components/organisms/header/header"), {
    ssr: false,
});

export const metadata = {
    title: 'Car events finder',
    description: 'Made by Mattinovic',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header></Header>

                {children}
            </body>
        </html>
    )
}
