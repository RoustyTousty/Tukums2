"use client"
import React from "react"
import Link from "next/link"

export default function navBar() {
    const [theme, setTheme] = React.useState('dark');
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    
    React.useEffect(() => {
        const htmlElement = document.querySelector('html');
        if (htmlElement) {
          htmlElement.setAttribute('data-theme', theme);
        }
      }, [theme]);

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-base-200 flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-primary w-full">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-6 w-6 stroke-current">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 text-neutral">Tukums-2</div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                        {/* Navbar menu content here */}
                        <li><Link href="/orderlist">Pasūtījumu saraksts</Link></li>
                        <li><Link href="/orderinput">Jauns order</Link></li>
                        <li><a>Statistika</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="border-1 border-accent"/>
            </div>

            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-accent min-h-full w-80 p-4 gap-1">
                {/* Sidebar content here */}
                <li><Link href="/orderlist" className="hover:bg-base-200 text-base-200 hover:text-neutral font-bold">• Pasūtījumu saraksts</Link></li>
                <li><Link href="/orderinput" className="hover:bg-base-200 text-base-200 hover:text-neutral font-bold">• Jauns pasūtījums</Link></li>
                <li><Link href="/stats" className="hover:bg-base-200 text-base-200 hover:text-neutral font-bold">• Statistika</Link></li>
                </ul>
            </div>

            <div></div>
        </div>
    )
} 