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

interface CursoType {
  id: string;
  nome: string;
  data: string;
}

interface AlunoType {
  nome: string;
  engajamento: string;
  mensagens: number;
  quizzes: string;
  tarefas: string;
  acessos: number;
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
            <div className="flex gap-2">
              {["Engajamento", "Desempenho", "Motivação", "Relação Aluno–Professor", "Reforço", "Evasão"].map((tab, i) => (
                <button
                  key={i}
                  className="rounded-lg px-4"
                >
                  {tab}
                </button>
              ))}
              {/*Busca*/}
              <div className="ml-auto flex items-center gap-2 border-2 rounded-md border-gray-300 px-4 py-2">
                <CiSearch className="text-xl" />
                <input placeholder="Aluno" className="w-48 focus-visible:outline-none" />
              </div>
            </div>

            {/* Tabela */}
            <div className="bg-white">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-100">
                    <TableHead>Aluno</TableHead>
                    <TableHead>Taxa de Engajamento</TableHead>
                    <TableHead>Nº de Mensagens em Fóruns</TableHead>
                    <TableHead>Percentual de Quizzes Realizados</TableHead>
                    <TableHead>Percentual de Tarefas Enviadas</TableHead>
                    <TableHead>Nº de Acessos (últimos 7 dias)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {alunos.map((aluno, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{aluno.nome}</TableCell>
                      <TableCell>
                        <div className={`mx-4 py-1 rounded-md text-xs font-medium border-[1.5px] ${badgeColor(aluno.engajamento)}`}>
                          {aluno.engajamento}
                        </div>
                      </TableCell>
                      <TableCell>{aluno.mensagens}</TableCell>
                      <TableCell>{aluno.quizzes}</TableCell>
                      <TableCell>{aluno.tarefas}</TableCell>
                      <TableCell>{aluno.acessos}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-between p-4 text-sm text-zinc-500">
                <span>Mostrando 1 – 7 de 80 entradas</span>
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

