import * as React from "react";
import Link from "next/link";
import DataTable from "@/components/template/dataTable";
import SearchInput from "@/components/template/searchInput";

interface CursoType {
  id: string;
  nome: string;
  data: string;
}

interface AlunoType {
  id: number;
  nome: string;
  engajamento: string;
  mensagens: number;
  quizzes: string;
  tarefas: string;
  acessos: number;
  frequencia: string;
  tempoMedio: number;
  detalhes: React.ReactNode;
}

interface AlunosProps {
  cursos: CursoType[];
  alunos: AlunoType[];
  cursoSelecionado: string | null;
}

function badgeColor(status: string) {
  switch (status) {
    case "Muito Alto":
      return "bg-emerald-100 text-emerald-700";
    case "Alto":
      return "bg-indigo-100 text-indigo-700";
    case "Médio":
      return "bg-yellow-100 text-yellow-700";
    case "Baixo":
      return "bg-orange-100 text-orange-700";
    case "Muito Baixo":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
}

export default function Alunos({ cursos, alunos, cursoSelecionado }: AlunosProps) {
  const curso = cursos.find(c => c.id === cursoSelecionado);
  const [searchTerm, setSearchTerm] = React.useState('');

  const columns = [
    {
      label: "Aluno",
      name: "nome",
      options: {
        sticky: true,
        headerClassName: "min-w-96",
        cellClassName: "font-medium text-left"
      }
    },
    {
      label: "Taxa de Engajamento",
      name: "engajamento",
      cell: (row: AlunoType) => (
        <div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${badgeColor(row.engajamento)}`}>
          {row.engajamento}
        </div>
      )
    },
    {
      label: "Nº de Posts em Fóruns Avaliativos",
      name: "mensagens"
    },
    {
      label: "Percentual de Quizzes Realizados",
      name: "quizzes"
    },
    {
      label: "Percentual de Tarefas Enviadas",
      name: "tarefas"
    },
    {
      label: "Nº de Acessos (últimos 7 dias)",
      name: "acessos"
    },
    {
      label: "Frequência de login",
      name: "frequencia"
    },
    {
      label: "Tempo médio por sessão",
      name: "tempoMedio"
    },
    {
      label: "Detalhes",
      name: "detalhes",
      cell: (row: AlunoType) => (
        <Link href={`/detalhes/${row.id}`} className="cursor-pointer flex items-center justify-center w-full">
          {row.detalhes}
        </Link>
      )
    }
  ];

  return (
    <div className="flex-1 flex justify-center items-center pl-[240px]">
      <div className="BoxCurso">
        {/* Header */}
        <div className="flex flex-row justify-between items-start w-full mb-4">
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-poppins font-semibold text-left">Alunos</h1>
            {curso ? (
              <p style={{ color: '#374DAA' }} className="text-left text-xl font-semibold">
                {curso.nome}
              </p>
            ) : (
              <p className="text-left">Nenhum curso foi selecionado ainda.</p>
            )}
          </div>
          <div className="flex flex-col items-end">
            {curso ? (
              <>
                <p className="text-sm text-right">{curso.data}</p>
                <p className="text-xl text-right font-poppins font-semibold">{curso.id}</p>
              </>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        {curso && (
          <div className="flex flex-col gap-4">

            {/* Indicadores */}
            <div className="flex gap-2 mb-2 justify-between">
              {["Engajamento", "Desempenho", "Motivação", "Relação Aluno-Professor", "Desistência"].map((tab, i) => (
                <button
                  key={i}
                  className="rounded-lg text-gray-800 px-2 bg-white border-2 border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer focus:text-white focus:outline-none focus:border-[#374DAA] focus:bg-[#374DAA]"
                >
                  {tab}
                </button>
              ))}
              
              {/*Busca*/}
              <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            {/* Tabela */}
            <DataTable
              rowsPerPage={10}
              data={alunos}
              columns={columns}
              searchTerm={searchTerm}
            />
          </div>
        )}
      </div>
    </div>
  );
}