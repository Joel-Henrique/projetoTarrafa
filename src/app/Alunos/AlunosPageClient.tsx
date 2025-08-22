'use client';

import Alunos from '@/components/Paginas/Alunos/Alunos';
import Header from '@/components/Sidebar/Header/Header';
import Sidebar from '@/components/Sidebar/Header/Sidebar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaPlus } from "react-icons/fa";

const cursosMock = [
    { id: 'EXT099', nome: 'Análise e Desenvolvimento de Sistemas', data: '2024.3' },
    { id: 'DCC001', nome: 'Introdução a Sistemas de Informação', data: '2023.1' },
    { id: 'DCC023', nome: 'Introdução a Ciência da Computação', data: '2025.2' },
];

const alunosMock = [
    {
        id: 1,
        nome: "Maria das Rosas Flores",
        engajamento: "Alto",
        mensagens: 5,
        quizzes: "100%",
        tarefas: "100%",
        acessos: 6,
        frequencia: "0,86",
        tempoMedio: 120,
        detalhes: <FaPlus className='text-xl text-gray-700' />,
    },
    {
        id: 2,
        nome: "José Pedro Ribeiro",
        engajamento: "Alto",
        mensagens: 2,
        quizzes: "80%",
        tarefas: "100%",
        acessos: 10,
        frequencia: "1,42",
        tempoMedio: 110,
        detalhes: <FaPlus className='text-xl text-gray-700' />,
    },
    {
        id: 3,
        nome: "Márcio Dantas",
        engajamento: "Médio",
        mensagens: 4,
        quizzes: "100%",
        tarefas: "0%",
        acessos: 9,
        frequencia: "1,28",
        tempoMedio: 60,
        detalhes: <FaPlus className='text-xl text-gray-700' />,
    },
    {
        id: 4,
        nome: "Joaquina Paulina de Souza",
        engajamento: "Baixo",
        mensagens: 1,
        quizzes: "0%",
        tarefas: "0%",
        acessos: 0,
        frequencia: "0",
        tempoMedio: 5,
        detalhes: <FaPlus className='text-xl text-gray-700' />,
    },
    {
        id: 5,
        nome: "Maria dos Cravos",
        engajamento: "Alto",
        mensagens: 5,
        quizzes: "70%",
        tarefas: "90%",
        acessos: 4,
        frequencia: "0,57",
        tempoMedio: 70,
        detalhes: <FaPlus className='text-xl text-gray-700' />,
    },
    {
        id: 6,
        nome: "Rita Lobaco",
        engajamento: "Médio",
        mensagens: 6,
        quizzes: "70%",
        tarefas: "75%",
        acessos: 6,
        frequencia: "0,86",
        tempoMedio: 75,
        detalhes: <FaPlus className='text-xl text-gray-700' />,
    },
    {
        id: 7,
        nome: "Luiz Pereira",
        engajamento: "Alto",
        mensagens: 0,
        quizzes: "20%",
        tarefas: "0%",
        acessos: 1,
        frequencia: "0,14",
        tempoMedio: 30,
        detalhes: <FaPlus className='text-xl text-gray-700' />,
    },
    {
        id: 8,
        nome: "Maria dos Cravos",
        engajamento: "Alto",
        mensagens: 5,
        quizzes: "70%",
        tarefas: "90%",
        acessos: 4,
        frequencia: "0,57",
        tempoMedio: 70,
        detalhes: <FaPlus className='text-xl text-gray-700' />,
    },
    {
        id: 9,
        nome: "Rita Lobaco",
        engajamento: "Médio",
        mensagens: 6,
        quizzes: "70%",
        tarefas: "75%",
        acessos: 6,
        frequencia: "0,86",
        tempoMedio: 75,
        detalhes: <FaPlus className='text-xl text-gray-700' />,
    },
    {
        id: 10,
        nome: "Luiz Pereira",
        engajamento: "Alto",
        mensagens: 0,
        quizzes: "20%",
        tarefas: "0%",
        acessos: 1,
        frequencia: "0,14",
        tempoMedio: 30,
        detalhes: <FaPlus className='text-xl text-gray-700' />,
    },
];

export default function AlunosPageClient() {
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
                    <Alunos cursos={cursosMock} alunos={alunosMock} cursoSelecionado={cursoSelecionado} />
                </main>
            </div>
        </div>
    );
}
