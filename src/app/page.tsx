import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="sidebar hidden sm:block">
        <ul className="sidebaralign">
          <Image
            src="/iconeTarrafa.svg"
            alt="Tarrafa logomark"
            width={200}
            height={60}
          />
          <ul className="sidebaralign space-y-4">
            <li className="">MENU</li>
            <div className="sidebarpainel space-x-4">
              <Image
                className="ml-4"
                src="/sidebarpainelcurso.png"
                alt="Painel dos Cursos"
                width={20}
                height={20}
              />
              <li >Painel dos Cursos</li>
            </div>
          </ul>
        </ul>
      </aside>

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <header className="bg-white shadow p-4">
          <h1 className="text-2xl font-semibold">Rotbar / Navbar</h1>
        </header>

        {/* Main content */}
        <main className="flex flex-col items-center sm:items-start p-8 gap-8">

          <p className="text-lg text-gray-700">
            informações principais.
          </p>
        </main>
      </div>
    </div>
  );
}
