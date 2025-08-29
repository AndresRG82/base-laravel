import { Link, Head } from '@inertiajs/react';
import { useTheme } from '@/Hooks/useTheme';

interface WelcomeProps {
  auth: {
    user?: {
      id: number;
      name: string;
      email: string;
    } | null;
  };
  laravelVersion: string;
  phpVersion: string;
}

export default function Welcome({ auth, laravelVersion, phpVersion }: WelcomeProps) {
  const theme = useTheme();
  console.log("Tema actual:", theme);
  const logoSrc = `/images/logo/-${theme === 'light' ? 'dark' : 'white'}.svg`;

  return (
    <div data-theme={theme === 'light' ? 'nord' : 'dim'}>

      <Head title="Welcome" />

      {/* Hero Section */}
      <div className="hero min-h-screen bg-base-200 dark:bg-base-900">
        {/* Navbar */}
        <div className="absolute top-6 left-6 flex space-x-4">
          {auth.user ? (
            <Link href={route('dashboard')} className="btn btn-ghost">
              Dashboard
            </Link>
          ) : (
            <Link href={route('login')} className="btn btn-primary">
              Ingresar
            </Link>
          )}
        </div>

        <div className="hero-content flex-col lg:flex-row w-full">
          {/* Left Text Section */}
          <div className="text-center lg:text-left max-w-lg">
            <img
              src={logoSrc}
              alt="logo"
              className="h-48 w-96 object-contain"

            />
            <p className="text-red-500 underline">Texto de prueba Tailwind</p>

            <h1 className="text-7xl font-bold mb-4">Mecánica Valdebenito E.I.R.L.</h1>
            <h2 className="text-5xl font-bold mb-4">Confianza y rendimiento en cada mantención.</h2>
            <p className="mb-6 text-700">
              Especialistas en maquinaria. Brindamos un servicio integral de
              mantención y reparación para asegurar seguridad, potencia y
              desempeño en cada kilómetro recorrido.
            </p>
            <button className="btn btn-primary">Botón DaisyUI</button>

            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              <Link href={route('contact')} className="btn btn-primary btn-lg">
                Contáctanos
              </Link>
              <Link href={route('certificado.qr')} className="btn btn-outline btn-lg">
                Validar Certificado
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="hidden lg:block flex-1 overflow-hidden">
            <div className="w-full h-full relative">
              <img
                src="/images/hero/hero-1.png"
                alt="hero-1"
                className="object-cover w-full h-full hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
