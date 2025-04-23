import Image from 'next/image';
import IconR from './racial.png';
import faixaetaria from './faixaetaria.png';
import gender from './gender.png';
import styles from './Indicators.module.css';

interface IndicatorsProps {
    cursoSelecionado: string | null;
}

export default function CompDemograf({ cursoSelecionado }: IndicatorsProps) {
    return (
        <div className="Box2 my-10">
            <div className="maincurso">
                <div className="mt-10 ml-10 mb-5">
                    <h1 className="text-xl font-poppins font-semibold text-left">Composição Demográfica</h1>
                    <p style={{ color: "#9291A5" }}>do Curso</p>
                </div>
            </div>

            <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 after:shadow-[0_2px_4px_rgba(0,0,0,0.05)] bg-white" />

            <div className={styles.BoxCentralizarIndicadores}>
                <div className={styles.EspacarIndicadores}>
                    <div style={{ backgroundColor: '#6463D633' }} className={styles.quadrado}>
                        <div className="ml-10">
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-lg">                                    <Image
                                        src={gender}
                                        alt="Ícone aluno-professor"
                                        width={30}
                                        height={40}
                                        className="object-cover"
                                    /></span>
                                <h2 className="text-2xl font-bold text-[#0F1441]">Gênero</h2>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 text-sm w-full">
                            <div className="ml-5 mr-5">
                                <div className={styles.container}>
                                    <span className='text-lg'>Masculino</span>
                                    <span className={styles.textoPersonalizado}>60%</span>
                                </div>
                                <div className={styles.container}>
                                    <span className='text-lg'>Feminino</span>
                                    <span className={styles.textoPersonalizado}>35%</span>
                                </div>
                                <div className={styles.container}>
                                    <span className='text-lg'>Outro</span>
                                    <span className={styles.textoPersonalizado}>5%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#6463D666' }} className={styles.quadrado}>
                        <div className="ml-5">
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-lg">
                                    <Image
                                        src={faixaetaria}
                                        alt="Ícone aluno-professor"
                                        width={30}
                                        height={40}
                                        className="object-cover"
                                    />
                                </span>
                                <h2 className="text-2xl font-bold text-[#0F1441]">Faixa Etária</h2>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 text-sm w-full">
                            <div className="ml-5 mr-5">
                                <div className={styles.container}>
                                    <span className='text-lg'>18–20</span>
                                    <span className={styles.textoPersonalizado}>20%</span>
                                </div>
                                <div className={styles.container}>
                                    <span className='text-lg'>20–30</span>
                                    <span className={styles.textoPersonalizado}>70%</span>
                                </div>
                                <div className={styles.container}>
                                    <span className='text-lg'>30–40</span>
                                    <span className={styles.textoPersonalizado}>9%</span>
                                </div>
                                <div className={styles.container}>
                                    <span className='text-lg'>40+</span>
                                    <span className={styles.textoPersonalizado}>1%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#6463D699' }} className={styles.quadrado}>
                        <div className="ml-5">
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-lg">
                                    <Image
                                        src={IconR}
                                        alt="Ícone aluno-professor"
                                        width={30}
                                        height={40}
                                        className="object-cover"
                                    />
                                </span>
                                <h2 className="text-2xl font-bold text-[#0F1441]">Iden. Racial</h2>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 text-sm w-full">
                            <div className="ml-5 mr-5">
                                <div className={styles.container}>
                                    <span className='text-lg'>Branco</span>
                                    <span className={styles.textoPersonalizado}>17%</span>
                                </div>
                                <div className={styles.container}>
                                    <span className='text-lg'>Preto/Pardo</span>
                                    <span className={styles.textoPersonalizado}>10%</span>
                                </div>
                                <div className={styles.container}>
                                    <span className='text-lg'>Indígena</span>
                                    <span className={styles.textoPersonalizado}>3%</span>
                                </div>
                                <div className={styles.container}>
                                    <span className='text-lg'>Outro</span>
                                    <span className={styles.textoPersonalizado}>70%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
