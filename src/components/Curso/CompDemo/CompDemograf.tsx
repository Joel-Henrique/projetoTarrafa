
interface IndicatorsProps {
  cursoSelecionado: string | null;
}

export default function CompDemograf({ cursoSelecionado }: IndicatorsProps) {
  return (
    <div className="Box my-10">
      <div className="maincurso">
        <div className="m-10">
          <h1 className="text-xl font-poppins font-semibold text-left">Composição Demográfica</h1>
          <p style={{ color: "#9291A5" }}>do Curso</p>
        </div>
      </div>
      <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 after:shadow-[0_2px_4px_rgba(0,0,0,0.05)] bg-white" />
        
    </div>
  );
}
