import * as React from "react";
import { AlunoType } from "@/types/aluno";
import { getColumns } from "@/utils/columns";

interface CursoType {
  id: string;
  nome: string;
  data: string;
}

interface AlunoProps {
  cursos: CursoType[];
  cursoSelecionado: string | null;
  alunos: AlunoType[];
  alunoSelecionado: number | null;
}

export default function Aluno({ cursos, cursoSelecionado, alunos, alunoSelecionado }: AlunoProps) {
  const curso = cursos.find(c => c.id === cursoSelecionado);
  const aluno = alunos.find(a => a.id === alunoSelecionado);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeTab, setActiveTab] = React.useState("Engajamento");

  const columns = getColumns(activeTab, cursoSelecionado);

  return (
    <div className="flex-1 flex justify-center items-center pl-[240px]">
      <div className="BoxCurso">
        <div className="flex flex-row justify-between items-start w-full mb-4">
          <div className="flex flex-col items-start">
            {aluno ? (
              <h1 className="text-xl font-poppins font-semibold text-left">
                {aluno.nome}
              </h1>
            ) : (
              <p className="text-left">Nenhum aluno foi selecionado ainda.</p>
            )}
            {curso ? (
              <p style={{ color: '#374DAA' }} className="text-left text-xl font-semibold">
                {curso.nome}
              </p>
            ) : (
              <p className="text-left">Nenhum curso válido foi selecionado ainda.</p>
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
        {curso && aluno && ( // FIXME: não carregar o aluno / curso se o outro não existir
          <div className="flex flex-col justify-between">
            <div className="Box3">
              <h1 className="text-2xl font-poppins font-semibold text-left p-8">Dados Pessoais</h1>
              <div className="grid grid-cols-2 gap-y-8 gap-x-2">
                <div className="flex gap-4">
                  <p className="text-sm font-poppins p-2 ml-8">E-mail</p>
                  <p className="text-sm font-poppins bg-gray-100 rounded-lg py-2 px-8 text-center text-wrap">{aluno.email}</p>
                </div>
                <div className="flex gap-4">
                  <p className="text-sm font-poppins p-2 ml-8">Polo</p>
                  <p className="text-sm font-poppins bg-gray-100 rounded-lg py-2 px-8 text-center text-wrap">{aluno.polo}</p>
                </div>
                <div className="flex gap-4">
                  <p className="text-sm font-poppins p-2 ml-8">Curso</p>
                  <p className="text-sm font-poppins bg-gray-100 rounded-lg py-2 px-8 text-center text-wrap">{aluno.graduacao}</p>
                </div>
                <div className="flex gap-4">
                  <p className="text-sm font-poppins p-2 ml-8">Primeiro Acesso</p>
                  <p className="text-sm font-poppins bg-gray-100 rounded-lg py-2 px-8 text-center text-wrap">{aluno.primeiroAcesso}</p>
                </div>
                <div className="flex gap-4">
                  <p className="text-sm font-poppins p-2 ml-8">Cidade</p>
                  <p className="text-sm font-poppins bg-gray-100 rounded-lg py-2 px-8 text-center text-wrap">{aluno.cidade}</p>
                </div>
                <div className="flex gap-4">
                  <p className="text-sm font-poppins p-2 ml-8">Último Acesso</p>
                  <p className="text-sm font-poppins bg-gray-100 rounded-lg py-2 px-8 text-center text-wrap">{aluno.ultimoAcesso}</p>
                </div>
              </div>
            </div>

            {/* Box Indicadores - generalizar? fazer outra? */}

            {/* Botões Indicadores */}
            <div className="flex gap-4 mb-2">
              {["Engajamento", "Desempenho", "Motivação", "Relação Aluno-Professor", "Desistência"].map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-lg px-4 py-2 border-2 transition-colors cursor-pointer ${activeTab === tab
                    ? 'text-white bg-[#374DAA] border-[#374DAA]'
                    : 'text-gray-800 bg-white border-gray-300 hover:bg-gray-100'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* Tabela - generalizar? fazer outra?*/}
          </div>
        )}
      </div>
    </div>
  );
}