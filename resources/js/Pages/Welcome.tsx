import { Link, Head } from '@inertiajs/react';
import { useTheme } from '@/Hooks/ThemeContext';
import AppLayout from '@/Layouts/Applayout';

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
    const { theme, setTheme } = useTheme();
  const logoSrc = `/images/logo/-${theme === 'nord' ? 'dark' : 'white'}.svg`;

  return (
    <AppLayout auth={{
          user: auth.user
      }}>

      <Head title="Welcome" />

      {/* Hero Section */}
      <div className="hero min-h-screen bg-base-200 dark:bg-base-900">


        <div className="hero-content flex-col lg:flex-row w-full">
          {/* Left Text Section */}
          <div className="text-center lg:text-left max-w-lg">
            <img
              src={logoSrc}
              alt="logo"
              className="h-48 w-96 object-contain"

            />


            <h1 className="text-7xl font-bold mb-4">Mecánica Valdebenito E.I.R.L.</h1>
            <h2 className="text-5xl font-bold mb-4">Confianza y rendimiento en cada mantención.</h2>
            <p className="mb-6 text-700">
              Especialistas en maquinaria. Brindamos un servicio integral de
              mantención y reparación para asegurar seguridad, potencia y
              desempeño en cada kilómetro recorrido.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">

                <button
                    className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                    onClick={() => window.location.href = route('certificado.qr')}
                >
                    Contáctanos
                </button>
                <button
                className="btn btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                onClick={() => window.location.href = route('certificado.qr')}
                >
                Validar Certificado
                </button>
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
    </AppLayout>
  );
}
