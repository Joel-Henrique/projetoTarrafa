interface CursoProps {
    cursoSelecionado: string | null;
  }
  
  function Alunos({ cursoSelecionado }: CursoProps) {
    return (
      <div>
        <h1>Página Alunos</h1>
        {cursoSelecionado ? (
          <p>Esse é o curso selecionado: <strong>{cursoSelecionado}</strong></p>
        ) : (
          <p>Nenhum curso foi selecionado ainda.</p>
        )}
      </div>
    );
  }
  
  export default Alunos;
  