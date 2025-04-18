import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="sidebar hidden sm:block">
        <ul className="space-y-4">
          <Image
            className="dark"
            src="/iconeTarrafa.svg"
            alt="Tarrafa logomark"
            width={189.46}
            height={61.69}
          />

          <li className="hover:text-gray-300 cursor-pointer">MENU</li>
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
