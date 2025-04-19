type CursoType = {
  id: string;
  nome: string;
  data: string;
};

type CursoProps = {
  cursos: CursoType[];
  cursoSelecionado: string | null;
};

export default function Curso({ cursos, cursoSelecionado }: CursoProps) {
  const curso = cursos.find(c => c.id === cursoSelecionado);

  return (
    <div className="flex flex-row justify-between items-start w-full px-4">
      <div className="flex flex-col items-start">
        <h1 className="text-xl font-poppins font-semibold text-left">Curso</h1>
        {curso ? (
          <p style={{ color: '#374DAA' }} className="text-left text-xl font-semibold">
            {curso.nome}
          </p>
        ) : (
          <p className="text-left">Nenhum curso foi selecionado ainda.</p>
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
  );
}
