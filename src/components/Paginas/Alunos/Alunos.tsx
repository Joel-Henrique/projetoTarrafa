import * as React from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "../../ui/tabela"
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

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
    case "Alto":
      return "bg-emerald-100 text-emerald-700"
    case "Médio":
      return "bg-indigo-100 text-indigo-700"
    case "Baixo":
      return "bg-red-100 text-red-700"
    default:
      return "bg-gray-100 text-gray-600"
  }
}

export default function Alunos({ cursos, alunos, cursoSelecionado }: AlunosProps) {
  const curso = cursos.find(c => c.id === cursoSelecionado);

  return (
    <div className="flex-1 flex justify-center items-center pl-[240px]">
      <div className="BoxCurso">
        {/* Header */}
        <div className="flex flex-row justify-between items-start w-full mb-8">
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
            <div className="flex gap-2 mb-3">
              {["Engajamento", "Desempenho", "Motivação", "Relação Aluno-Professor", "Desistência"].map((tab, i) => (
                <button
                  key={i}
                  className="rounded-lg text-gray-800 px-2 bg-white border-2 border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer focus:text-white focus:outline-none focus:border-[#374DAA] focus:bg-[#374DAA]"
                >
                  {tab}
                </button>
              ))}
              {/*Busca*/}
              <div className="ml-auto flex items-center gap-2 border-2 rounded-sm border-gray-300 px-4 py-2">
                <CiSearch className="text-xl" />
                <input placeholder="Aluno" className="w-48 focus-visible:outline-none" />
              </div>
            </div>

            {/* Tabela */}
            <div className="bg-white overflow-y-auto overflow-x-auto max-h-[500px] relative">
              <Table>
                <TableHeader className="sticky top-0 z-50">
                  <TableRow className="bg-gray-100">
                    <TableHead className="sticky min-w-24 left-0 z-40 bg-gray-100 px-6 font-bold">ID</TableHead>
                    <TableHead className="sticky left-24 z-40 min-w-96 pl-6 text-left bg-gray-100 font-bold">Aluno</TableHead>
                    <TableHead className="min-w-40">Taxa de Engajamento</TableHead>
                    <TableHead className="min-w-40">Nº de Posts em Fóruns Avaliativos</TableHead>
                    <TableHead className="min-w-40">Percentual de Quizzes Realizados</TableHead>
                    <TableHead className="min-w-40">Percentual de Tarefas Enviadas</TableHead>
                    <TableHead className="min-w-40">Nº de Acessos (últimos 7 dias)</TableHead>
                    <TableHead className="min-w-40">Frequência de login</TableHead>
                    <TableHead className="min-w-40">Tempo médio por sessão</TableHead>
                    <TableHead className="min-w-40">Detalhes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {alunos.map((aluno, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="sticky left-0 z-30 font-medium border-r border-gray-100 bg-white transition-colors">{aluno.id}</TableCell>
                      <TableCell className="sticky left-0 z-30 font-medium text-left pl-6 border-r border-gray-100 bg-white transition-colors">{aluno.nome}</TableCell>
                      <TableCell>
                        <div className={`mx-6 py-1 rounded-sm text-xs font-medium border-[1.5px] ${badgeColor(aluno.engajamento)}`}>
                          {aluno.engajamento}
                        </div>
                      </TableCell>
                      <TableCell>{aluno.mensagens}</TableCell>
                      <TableCell>{aluno.quizzes}</TableCell>
                      <TableCell>{aluno.tarefas}</TableCell>
                      <TableCell>{aluno.acessos}</TableCell>
                      <TableCell>{aluno.frequencia}</TableCell>
                      <TableCell>{aluno.tempoMedio}</TableCell>
                      <TableCell className="border-l border-gray-100 transition-colors">
                        <Link href={`/detalhes/${aluno.id}`}>
                          <button className="cursor-pointer">{aluno.detalhes}</button>
                        </Link>
                      </TableCell>                     
                  </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-between p-4 text-sm text-zinc-500 sticky bottom-0 z-50 bg-white">
                <span>Mostrando 1 – 10 de 100 entradas</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, "...", 10].map((p, i) => (
                    <button
                      key={i}
                      className="rounded-md"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

