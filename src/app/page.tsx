import Image from "next/image";

const cursosMock = [
  { id: 'ads', nome: 'Análise e Desenvolvimento de Sistemas' },
  { id: 'si', nome: 'Sistemas de Informação' },
  { id: 'cc', nome: 'Ciência da Computação' },
];


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
        <header className="header">
          <div className="componentsheader space-x-2">
            <a href="#" className="px-4 py-2 rounded bg-[#707FDD] text-white hover:bg-[#5a6acf] transition">Home</a>
            <a href="#" className="hover: transition">Curso</a>
            <a href="#" className="hover: transition">Alunos</a>
            <select
              id="curso"
              name="curso"
              className="select-classic"
              defaultValue=""
              required
            >
              <option value="" disabled hidden>
                Escolha o curso
              </option>
              {cursosMock.map((curso) => (
                <option key={curso.id} value={curso.id}>
                  {curso.nome}
                </option>
              ))}
            </select>



          </div>
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
