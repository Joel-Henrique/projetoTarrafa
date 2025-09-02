import * as React from "react";
import DataTable from "@/components/template/dataTable";
import SearchInput from "@/components/template/searchInput";
import { AlunoType } from "@/types/aluno";
import { getColumns } from "@/utils/columns";

interface CursoType {
  id: string;
  nome: string;
  data: string;
}

interface AlunosProps {
  cursos: CursoType[];
  alunos: AlunoType[];
  cursoSelecionado: string | null;
}

export default function Alunos({ cursos, alunos, cursoSelecionado }: AlunosProps) {
  const curso = cursos.find(c => c.id === cursoSelecionado);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeTab, setActiveTab] = React.useState("Engajamento");

  const columns = getColumns(activeTab, cursoSelecionado);

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
                  onClick = {() => setActiveTab(tab)}
                  className={`rounded-lg px-4 py-2 border-2 transition-colors cursor-pointer ${
                    activeTab === tab 
                      ? 'text-white bg-[#374DAA] border-[#374DAA]' 
                      : 'text-gray-800 bg-white border-gray-300 hover:bg-gray-100'
                  }`}
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