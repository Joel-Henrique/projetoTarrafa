'use client';

import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className="flex h-screen">
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
              <li>Painel dos Cursos</li>
            </div>
          </ul>
        </ul>
      </aside>
    </div>
  );
}
