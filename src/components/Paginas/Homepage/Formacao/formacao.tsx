import GraficoComp from './GraficoComp';

interface GraficoProps {
    cursoSelecionado: string | null;
}
const legenda = [
    { id: 'Dentro do tempo', label: 'Dentro do tempo', value: 80, color: '#DA77C4' },
    { id: 'Atrasado', label: 'Atrasado', value: 15, color: '#4C6CA8' },
    { id: 'Evadido', label: 'Evadido', value: 5, color: '#91B0D0' },

];

export default function Grafico({ cursoSelecionado }: GraficoProps) {
    return (
        <div className="Box my-10">
            <div className="Boxcursopequeno">
                <div className="mt-10 ml-10 mb-5">
                    <h1 className="text-xl font-poppins font-semibold text-left">Formação dos Alunos na Instituição</h1>
                    <p style={{ color: "#9291A5" }}>Período analisado até 2023</p>
                </div>
            </div>
            <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 after:shadow-[0_2px_4px_rgba(0,0,0,0.05)] bg-white" />
            
            <GraficoComp legenda={legenda} />

            <div className="flex justify-center flex-wrap gap-4">
            <p
                style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    marginTop: '1rem',
                }}
            >
                {legenda.map((item) => (
                    <span
                        key={item.label}
                        style={{ display: 'flex', alignItems: 'center', gap: 6 }}
                    >
                        <span
                            style={{
                                width: 18,
                                height: 18,
                                borderRadius: '50%',
                                backgroundColor: item.color,
                                display: 'inline-block',
                            }}
                        />
                        <span style={{ color: '#4a4a4a' }}>{item.label}</span>
                    </span>
                ))}
            </p>
            </div>
        </div>
    );
}
