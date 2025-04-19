'use client'; 
import Alunos from '@/components/Alunos';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';


const cursosMock = [
  { id: 'ads', nome: 'Análise e Desenvolvimento de Sistemas' },
  { id: 'si', nome: 'Sistemas de Informação' },
  { id: 'cc', nome: 'Ciência da Computação' },
];

export default function HomeLayout() {
  const [cursoSelecionado, setCursoSelecionado] = useState<string | null>(null);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header cursos={cursosMock} onCursoChange={setCursoSelecionado} />
        <main className="flex flex-col items-center sm:items-start p-8 gap-8">
          <Alunos cursoSelecionado={cursoSelecionado} />
        </main>
      </div>
    </div>
  );
}
