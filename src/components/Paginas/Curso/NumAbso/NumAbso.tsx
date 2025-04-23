interface NumAbsoProps {
    cursoSelecionado: string | null;
}

export default function NumAbso({ cursoSelecionado }: NumAbsoProps) {
    return (
        <div className="Box my-10">
            <div className="Boxcursopequeno">
                <div className="mt-10 ml-10 mb-5">
                    <h1 className="text-xl font-poppins font-semibold text-left">Números Absolutos</h1>
                    <p style={{ color: "#9291A5" }}>dos Alunos do Curso</p>
                </div>
            </div>

            <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 after:shadow-[0_2px_4px_rgba(0,0,0,0.05)] bg-white" />

        </div>
    );
}
