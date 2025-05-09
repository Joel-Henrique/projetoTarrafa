'use client';
import { useState } from 'react';
import Header from '@/components/Sidebar/Header/Header';
import Sidebar from '@/components/Sidebar/Header/Sidebar';
import Home from '@/components/Paginas/Homepage/Home';

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
   <div className="flex-1">
     <Header cursos={cursosMock} onCursoChange={setCursoSelecionado} />
     <main>
       <Home/>
     </main>
   </div>
 </div>
 
   );
}
