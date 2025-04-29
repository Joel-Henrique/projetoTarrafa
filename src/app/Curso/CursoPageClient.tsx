'use client';

import Curso from '@/components/Paginas/Curso/Curso';
import Header from '@/components/Sidebar/Header/Header';
import Sidebar from '@/components/Sidebar/Header/Sidebar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const cursosMock = [
  { id: 'EXT099', nome: 'Análise e Desenvolvimento de Sistemas', data: '2024.3' },
  { id: 'DCC001', nome: 'Introdução a Sistemas de Informação', data: '2023.1' },
  { id: 'DCC023', nome: 'Introdução a Ciência da Computação', data: '2025.2' },
];

export default function CursoPageClient() {
  const [cursoSelecionado, setCursoSelecionado] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const idFromURL = searchParams.get('id');
    if (idFromURL) {
      setCursoSelecionado(idFromURL);
    }
  }, [searchParams]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header cursos={cursosMock} onCursoChange={setCursoSelecionado} />
        <main>
          <Curso cursos={cursosMock} cursoSelecionado={cursoSelecionado} />
        </main>
      </div>
    </div>
  );
}
