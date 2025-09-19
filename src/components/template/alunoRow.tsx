'use client';

import React from 'react';
import { AlunoType } from '@/types/aluno';
import { getNivel, getFlagCor, getDesistencia, getFlagDesistenciaCor } from '@/utils/columns';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/tabela';

interface AlunoRowProps {
    aluno: AlunoType;
    activeTab: string;
}

const AlunoRow: React.FC<AlunoRowProps> = ({ aluno, activeTab }) => {
    const render = (columnName: string, value: any) => {
        switch (columnName) {
            case 'flagEngajamento':
            case 'flagDesempenho':
            case 'flagMotivacao':
            case 'flagRelAlunoProf':
                return (
                    <div className={`py-1 px-6 max-w-fit rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(value)}`}>
                        {getNivel(value)}
                    </div>
                );

            case 'flagDesistencia':
                return (
                    <div className={`py-1 px-6 max-w-fit rounded-md text-xs font-medium border-[1.5px] ${getFlagDesistenciaCor(value)}`}>
                        {getDesistencia(value)}
                    </div>
                );

            default:
                return value !== null && value !== undefined ? value.toString() : '-';
        }
    };

    const getColumns = () => {
        switch (activeTab) {
            case "Engajamento":
                return [
                    { label: "Nº de Posts em Fóruns Avaliativos", name: "nPostsForunsAv" },
                    { label: "Percentual de Quizzes Realizados", name: "quizzesRealiz" },
                    { label: "Percentual de Tarefas Enviadas", name: "tarefasEnv" },
                ];

            case "Desempenho":
                return [
                    { label: "Média Geral das Notas Avaliativas", name: "mediaNotas" },
                    { label: "Comparação com a Média da Turma", name: "compMedia" },
                    { label: "Nº de Atividades Abaixo da Média", name: "ativAbaixoMedia" },
                ];

            case "Motivação":
                return [
                    { label: "Percentual de Participação em Fóruns Não Obrigatórios", name: "partForunsNaoObrig" },
                    { label: "Nº de Visualizações em Materiais Complementares", name: "nVisuCompl" },
                    { label: "Nº de Interações na Última Semana", name: "nInter" },
                ];

            case "Relação Aluno-Professor":
                return [
                    { label: "Nº de Mensagens Trocadas com o Professor", name: "nMsgsAlunoProf" },
                    { label: "Percentual de Participação em Fóruns Mediados pelo Docente", name: "partForunsDocente" },
                    { label: "Frequência de Contato Aluno-Professor", name: "freqContAlunoProf" },
                ];

            case "Desistência":
                return [
                    { label: "Nível de Engajamento", name: "flagEngajamento" },
                    { label: "Nível de Desempenho", name: "flagDesempenho" },
                    { label: "Nível de Motivação", name: "flagMotivacao" },
                    { label: "Nível de Relação Aluno-Professor", name: "flagRelAlunoProf" },
                    { label: "Taxa de Desistência", name: "flagDesistencia" },
                ];
                
            default:
                return [];
        }
    };

    const columns = getColumns();

    return (
        <div className="bg-white ml-8 mr-8 mb-8 mt-4">
            <Table className="border border-gray-100 shadow-sm">
                <TableHeader>
                    <TableRow className="bg-gray-100">
                        {columns.map((column, index) => (
                            <TableHead key={index} className="text-center min-w-40">
                                {column.label}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        {columns.map((column, index) => ( // centralizar
                            <TableCell key={index} className="text-center p-4"> 
                                {render(column.name, aluno[column.name as keyof AlunoType])}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default AlunoRow;