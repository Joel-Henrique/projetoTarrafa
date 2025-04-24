import { Info } from 'lucide-react';

interface Curso {
    id: string;
    label: string;
    value: number;
}

interface RenderizaAlunosProps {
    curso: Curso[];
}

export default function RenderizaAlunos({ curso }: RenderizaAlunosProps) {
    const alunosOrdenados = [...curso]
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
                        <Info size={25} />
                    </button>
                </div>
            ))}
        </div>
    );
}
