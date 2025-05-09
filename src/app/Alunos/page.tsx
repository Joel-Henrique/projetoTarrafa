'use client'; 
import Alunos from '@/components/Paginas/Alunos/Alunos';
import Header from '@/components/Sidebar/Header/Header';
import Sidebar from '@/components/Sidebar/Header/Sidebar';
import { useState } from 'react';


const cursosMock = [
  { id: 'EXT099', nome: 'Análise e Desenvolvimento de Sistemas', data:'2024.3' },
  { id: 'DCC001', nome: 'Introdução a Sistemas de Informação', data:'2023.1' },
  { id: 'DCC023', nome: 'Introdução a Ciência da Computação', data:'2025.2' },
];

export default function HomeLayout() {
  const [cursoSelecionado, setCursoSelecionado] = useState<string | null>(null);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 pl-[240px] min-h-screen">
        <Header cursos={cursosMock} onCursoChange={setCursoSelecionado} />
        <main className="flex flex-col items-center sm:items-start p-8 gap-8">
          <Alunos cursoSelecionado={cursoSelecionado} />
        </main>
      </div>
    </div>
  );
}
