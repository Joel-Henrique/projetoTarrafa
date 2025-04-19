'use client'; 
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';


const cursosMock = [
  { id: 'ads', nome: 'Análise e Desenvolvimento de Sistemas' },
  { id: 'si', nome: 'Sistemas de Informação' },
  { id: 'cc', nome: 'Ciência da Computação' },
];

export default function Curso() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header cursos={cursosMock} />
        <main className="flex flex-col items-center sm:items-start p-8 gap-8">
          
        </main>
      </div>
    </div>
  );
}
