import Link from 'next/link'
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
    <div className="flex flex-col justify-between items-start w-full px-4">
      <div className="flex flex-row justify-between items-start w-full">
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
      <div>
        {curso ? (
          <div className="center-wrapper flex flex-col justify-between">
            <div className="Box my-10">
              <div className="maincurso">
                <div className="m-10">
                  <h1 className="text-xl font-poppins font-semibold text-left">Indicadores</h1>
                  <p style={{ color: '#9291A5' }}>Calculados</p>
                </div>
                <div className="m-10">
                <Link href="/Alunos" className="px-4 py-2 rounded bg-[#5a6acf] text-white hover:bg-[#374DAA] transition">
                  Saiba mais
                </Link>
                </div>
              </div>
              <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 after:shadow-[0_2px_4px_rgba(0,0,0,0.05)] bg-white">
              </div>
            </div>
            


            <div className="Box">
              <div className="maincurso">
                <div className="m-10">
                  <h1 className="text-xl font-poppins font-semibold text-left">Composição Demográfica</h1>
                  <p style={{ color: '#9291A5' }}>do Curso</p>
                </div>
              </div>
              <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 after:shadow-[0_2px_4px_rgba(0,0,0,0.05)] bg-white">
              </div>
            </div>
          </div>




        ) : (
          <p></p>
        )}
      </div>

    </div>
  );
}
