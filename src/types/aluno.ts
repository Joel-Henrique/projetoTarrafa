export interface AlunoType {
    id: number;
    nome: string;

    // engajamento
    flagEngajamento: number;
    nPostsForunsAv: number;
    quizzesRealiz: string;
    tarefasEnv: string;
    tempoMedio: number;

    // desempenho
    flagDesempenho: number;
    mediaNotas: string;
    compMedia: number;
    ativAbaixoMedia: number;

    // motivacao
    flagMotivacao: number;
    partForunsNaoObrig: string;
    nVisuCompl: number;
    nInter: number;

    // relacao aluno-professor
    flagRelAlunoProf: number;
    nMsgsAlunoProf: number;
    nMsgsPriv: number;
    partForunsDocente: string;
    sentMsgsPriv: string;
    freqContAlunoProf: string;

    // desistencia
    flagDesistencia: boolean;
    nNotasAbaixoMedia: number;

    // reutilizaveis
    sentMsgs: string;
    nAcessos: number;
    frequenciaLogin: string;
    detalhes: React.ReactNode;
}