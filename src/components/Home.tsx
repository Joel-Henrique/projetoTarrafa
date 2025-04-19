interface HomeProps {
  cursoSelecionado: string | null;
}

function Home({ cursoSelecionado }: HomeProps) {
  return (
    <div>
      <h1>Página Home</h1>
      {cursoSelecionado ? (
        <p>Esse é o curso selecionado: <strong>{cursoSelecionado}</strong></p>
      ) : (
        <p>Nenhum curso foi selecionado ainda.</p>
      )}
    </div>
  );
}

export default Home;
