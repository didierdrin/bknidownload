// Layout
import React from 'react'; 
import type { Metadata } from "next"; 
import './globals.css';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
    title: "Bukon!",
    description: "#1 Made in Rwanda store",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                {children}
                <footer className='bg-green-50 mt-8 h-[70px] items-center flex justify-center'>
                <p className='text-xs'>Copyright 2024</p>
                </footer>
            </body>
        </html>
    );
};
