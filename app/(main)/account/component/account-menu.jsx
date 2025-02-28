"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menu = [
    { label: "Profile", href: "/account" },
    { label: "Enrolled Courses", href: "/account/enrolled-courses" },
];

function Menu() {
    const pathname = usePathname();
    return (
        <ul className="list-none sidebar-nav mb-0 mt-3" id="navmenu-nav">
            {menu.map((item) => (
                <li className="navbar-item account-menu" key={item.href}>
                    <Link
                        href={item.href}
                        className={`navbar-link text-slate-400 flex items-center py-2 rounded ${pathname === item.href ? "text-slate-950 font-semibold" : ""}`}>
                        <h6 className="mb-0 font-semibold">{item.label}</h6>
                    </Link>
                </li>
            ))}
            <li className="navbar-item account-menu">
                <button
                    onClick={() => signOut()}
                    className="navbar-link flex items-center py-2 rounded text-red-500 hover:text-red-700">
                    <h6 className="mb-0 font-semibold">Logout</h6>
                </button>
            </li>
        </ul>
    );
}

export default Menu;
