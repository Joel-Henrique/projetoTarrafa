import { Plus } from 'lucide-react';

interface Aluno {
    id: string;
    label: string;
    value: number;
}

interface RenderizaAlunosProps {
    alunos: Aluno[];
}

export default function RenderizaAlunos({ alunos }: RenderizaAlunosProps) {
    const alunosOrdenados = [...alunos]
    .sort((a, b) => b.value - a.value) 
    .slice(0, 5);
    return (
        <div className="bg-white rounded-lg p-4 space-y-4">
            {alunosOrdenados.map((aluno, index) => (
                <div
                    key={aluno.id}
                    className="flex items-center justify-between px-6 py-5 bg-white shadow-sm rounded-md"
                >
                    <span className="w-6 text-left font-medium text-gray-700">
                        {index + 1}
                    </span>
                    <span className="flex-1 text-left text-gray-800">{aluno.label}</span>
                    <button className="text-gray-700 hover:text-gray-900">
                        <Plus size={20} />
                    </button>
                </div>
            ))}
        </div>
    );
}
