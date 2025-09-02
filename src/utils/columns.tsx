import Link from "next/link";
import { AlunoType } from "../types/aluno";

export const getNivel = (nivel: number) => {
	switch (nivel) {
		case 1: return "Muito Baixo";
		case 2: return "Baixo";
		case 3: return "Médio";
		case 4: return "Alto";
		case 5: return "Muito Alto";
		default: return "Não definido";
	}
};

export const getFlagCor = (nivel: number) => {
	switch (nivel) {
		case 1: return "bg-red-100 text-red-700";
		case 2: return "bg-orange-100 text-orange-700";
		case 3: return "bg-yellow-100 text-yellow-700";
		case 4: return "bg-indigo-100 text-indigo-700";
		case 5: return "bg-emerald-100 text-emerald-700";
		default: return "bg-gray-100 text-gray-600";
	}
};

export const getDesistencia = (flag: boolean) => flag ? "Sim" : "Não";

export const getFlagDesistenciaCor = (flag: boolean) =>
	flag ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700";

export const getColumns = (activeTab: string, cursoSelecionado: string | null) => {
	const detalhesColumn = {
		label: "Detalhes",
		name: "detalhes",
		cell: (row: AlunoType) => (
			<Link
				href={{
					pathname: '/Aluno',
					query: {
						cursoId: cursoSelecionado,
						alunoId: row.id
					}
				}}
				className="cursor-pointer flex items-center justify-center w-full"
			>
				{row.detalhes}
			</Link>
		)
	};

	const engajamentoColumns = [
		{
			label: "Aluno",
			name: "nome",
			options: {
				sticky: true,
				headerClassName: "min-w-96",
				cellClassName: "font-medium text-left"
			}
		},
		{
			label: "Taxa de Engajamento",
			name: "flagEngajamento",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagEngajamento)}`}>
					{getNivel(row.flagEngajamento)}
				</div>
			)
		},
		{
			label: "Nº de Posts em Fóruns Avaliativos",
			name: "nPostsForunsAv"
		},
		{
			label: "Percentual de Quizzes Realizados",
			name: "quizzesRealiz"
		},
		{
			label: "Percentual de Tarefas Enviadas",
			name: "tarefasEnv"
		},
		{
			label: "Nº de Acessos (últimos 7 dias)",
			name: "nAcessos"
		},
		{
			label: "Frequência de login",
			name: "frequenciaLogin"
		},
		{
			label: "Tempo médio por sessão",
			name: "tempoMedio"
		},
		detalhesColumn
	];

	const desempenhoColumns = [
		{
			label: "Aluno",
			name: "nome",
			options: {
				sticky: true,
				headerClassName: "min-w-96",
				cellClassName: "font-medium text-left"
			}
		},
		{
			label: "Desempenho",
			name: "flagDesempenho",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagDesempenho)}`}>
					{getNivel(row.flagDesempenho)}
				</div>
			)
		},
		{
			label: "Média Geral das Notas Avaliativas",
			name: "mediaNotas"
		},
		{
			label: "Comparação com a Média da Turma",
			name: "compMedia"
		},
		{
			label: "Nº de Atividades Abaixo da Média",
			name: "ativAbaixoMedia"
		},
		{
			label: "Frequência de Login",
			name: "frequenciaLogin"
		},
		detalhesColumn
	];

	const motivacaoColumns = [
		{
			label: "Aluno",
			name: "nome",
			options: {
				sticky: true,
				headerClassName: "min-w-96",
				cellClassName: "font-medium text-left"
			}
		},
		{
			label: "Motivação",
			name: "flagMotivacao",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagMotivacao)}`}>
					{getNivel(row.flagMotivacao)}
				</div>
			)
		},
		{
			label: "Percentual de Participação em Fóruns Não Obrigatórios",
			name: "partForunsNaoObrig"
		},
		{
			label: "Nº de Visualizações em Materiais Complementares",
			name: "nVisuCompl"
		},
		{
			label: "Nº de Interações na Última Semana",
			name: "nInter"
		},
		{
			label: "Sentimento Predominante nas Mensagens",
			name: "sentMsgs"
		},
		{
			label: "Frequência de Login",
			name: "frequenciaLogin"
		},
		detalhesColumn
	];

	const relacaoAlunoProfColumns = [
		{
			label: "Aluno",
			name: "nome",
			options: {
				sticky: true,
				headerClassName: "min-w-96",
				cellClassName: "font-medium text-left"
			}
		},
		{
			label: "Relação Aluno-Professor",
			name: "flagRelAlunoProf",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagRelAlunoProf)}`}>
					{getNivel(row.flagRelAlunoProf)}
				</div>
			)
		},
		{
			label: "Nº de Mensagens Trocadas com o Professor",
			name: "nMsgsAlunoProf"
		},
		{
			label: "Nº de Mensagens Privadas",
			name: "nMsgsPriv"
		},
		{
			label: "Percentual de Participação em Fóruns Mediados pelo Docente",
			name: "partForunsDocente"
		},
		{
			label: "Sentimento das Mensagens Privadas",
			name: "sentMsgsPriv"
		},
		{
			label: "Frequência de Contato Aluno-Professor",
			name: "freqContAlunoProf"
		},
		detalhesColumn
	];

	const desistenciaColumns = [
		{
			label: "Aluno",
			name: "nome",
			options: {
				sticky: true,
				headerClassName: "min-w-96",
				cellClassName: "font-medium text-left"
			}
		},
		{
			label: "Taxa de Desistência",
			name: "flagDesistencia",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagDesistenciaCor(row.flagDesistencia)}`}>
					{getDesistencia(row.flagDesistencia)}
				</div>
			)
		},
		{
			label: "Nível de Engajamento",
			name: "flagEngajamento"
		},
		{
			label: "Nº de Notas Abaixo da Média",
			name: "nNotasAbaixoMedia"
		},
		{
			label: "Nº de Acessos (últimos 7 dias)",
			name: "nAcessos"
		},
		{
			label: "Sentimento Predominante nas Mensagens",
			name: "sentMsgs"
		},
		{
			label: "Frequência de Login",
			name: "frequenciaLogin"
		},
		{
			label: "Detalhes",
			name: "detalhes",
			cell: (row: AlunoType) => (
				<Link href={`/Aluno/${row.id}`} className="cursor-pointer flex items-center justify-center w-full">
					{row.detalhes}
				</Link>
			)
		}
	];

	switch (activeTab) {
		case "Engajamento":
			return engajamentoColumns;
		case "Desempenho":
			return desempenhoColumns;
		case "Motivação":
			return motivacaoColumns;
		case "Relação Aluno-Professor":
			return relacaoAlunoProfColumns;
		case "Desistência":
			return desistenciaColumns;
		default:
			return engajamentoColumns;
	}
};
