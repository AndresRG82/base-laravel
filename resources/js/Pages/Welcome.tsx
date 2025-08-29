import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // tema dinámico
  const logoSrc = `/images/logo/-${theme === 'light' ? 'dark' : 'white'}.svg`;

  return (
    <div data-theme={theme === 'light' ? 'nord' : 'dim'} className="min-h-screen bg-base-200 dark:bg-base-900 flex flex-col items-center justify-center gap-6 p-6">

      <Head title="Welcome" />

      <img src={logoSrc} alt="logo" className="h-48 w-96 object-contain" />

      {/* Texto de prueba Tailwind */}
      <p className="text-red-500 underline text-2xl">Texto de prueba Tailwind</p>

      {/* Botón DaisyUI */}
      <button className="btn btn-primary btn-lg">Botón DaisyUI</button>

      {/* Cambiar tema dinámicamente */}
      <button
        className="btn btn-secondary btn-sm mt-4"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Cambiar tema
      </button>

    </div>
  );
}
