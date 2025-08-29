import { Head, Link } from '@inertiajs/react';
import React, { useState } from 'react';
import { useTheme } from '@/Hooks/ThemeContext';

interface Props {
    children: React.ReactNode;
    title?: string;
    auth: {
        user?: {
            id: number;
            name: string;
            email: string;
        } | null;
    };
}

export default function AppLayout({ children, title, auth }: Props) {
    const { theme, setTheme } = useTheme();
    return (
        <div
            className="bg-base-200 dark:bg-base-900 min-h-screen"
        >
            <Head title={title || 'Mecanica Valdebenito'} />
            {
                <div className="absolute top-6 left-6 flex space-x-4">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="btn btn-ghost"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <Link href={route('login')} className="btn btn-primary">
                            Ingresar
                        </Link>
                    )}

                <button
                  className="btn btn-secondary btn-ghost"
                  onClick={() => setTheme(theme === 'nord' ? 'luxury' : 'nord')}
                >
                  Cambiar tema
                </button>
                </div>
            }
            <main className="container mx-auto py-8">{children}</main>
            {/* Aquí puedes agregar un footer si lo necesitas */}
        </div>
    );
}
