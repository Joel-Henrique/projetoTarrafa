interface CursoProps {
    cursoSelecionado: string | null;
  }
  
  function Curso({ cursoSelecionado }: CursoProps) {
    return (
      <div>
        <h1>Página Curso</h1>
        {cursoSelecionado ? (
          <p>Esse é o curso selecionado: <strong>{cursoSelecionado}</strong></p>
        ) : (
          <p>Nenhum curso foi selecionado ainda.</p>
        )}
      </div>
    );
  }
  
  export default Curso;
  