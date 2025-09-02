import * as React from "react";
import { AlunoType } from "@/types/aluno";

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
                    <div className="Box3">
                        <h1 className="text-2xl font-poppins font-semibold text-left p-6">Dados Pessoais</h1>
                    </div>
                )}
            </div>
        </div>
    );
}