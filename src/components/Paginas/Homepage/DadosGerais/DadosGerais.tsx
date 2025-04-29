
  export default function DadosGerais() {
    return (
      <div className="Box2 my-10">
        <div className="mb-22">
          <div className="maincurso">
            <div className="mt-10 ml-10 mb-5">
              <h1 className="text-xl font-poppins font-semibold text-left">
                Dados Gerais
              </h1>
              <p style={{ color: "#9291A5" }}>da Instituição</p>
            </div>
          </div>
          <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 after:shadow-[0_2px_4px_rgba(0,0,0,0.05)] bg-white" />
        </div>
  
        <div className="flex items-center justify-center">
          <div className="flex flex-row justify-between items-center space-x-50">
            <div className="flex flex-row items-center">
              <p className="text-base text-gray-600 mb-2 text-left mr-6">
                Total de<br />usuários <br /> cadastrados
              </p>
              <div className="w-20 h-12 bg-gray-100 flex items-center justify-center rounded text-base ">
                900
              </div>
            </div>
  
            <div className="flex flex-row items-center">
              <p className="text-base text-gray-600 mb-2 text-left mr-6">
                Total de<br />cursos <br />cadastrados
              </p>
              <div className="w-20 h-12 bg-gray-100 flex items-center justify-center rounded text-base ">
                150
              </div>
            </div>
  
            <div className="flex flex-row items-center">
              <p className="text-base text-gray-600 mb-2 text-left mr-6">
                Total de<br />acessos <br />diários
              </p>
              <div className="w-20 h-12 bg-gray-100 flex items-center justify-center rounded text-base ">
                1500
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  