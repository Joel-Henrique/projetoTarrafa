import Link from "next/link";
import styles from './Indicators.module.css';
import alunoIcon from './aluno.png';
import alunoIcon2 from './baixados2.png';
import alunoIcon3 from './baixados.png';
import alunoIcon1 from './baixados1.png';
import alunoIcon5 from './evasion.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
interface IndicatorsProps {
  cursoSelecionado: string | null;
}

export default function Indicators({ cursoSelecionado }: IndicatorsProps) {
  return (

    <div className="Box my-10">
      <div className="maincurso">
        <div className="mt-10 ml-10 mb-5">
          <h1 className="text-xl font-poppins font-semibold text-left">Indicadores</h1>
          <p style={{ color: "#9291A5" }}>Calculados</p>
        </div>
        <div className="m-10">
          <Link
            href="/Alunos"
            className="px-4 py-2 rounded bg-[#5a6acf] text-white hover:bg-[#374DAA] transition"
          >
            Saiba mais
          </Link>
        </div>
      </div>

      <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 after:shadow-[0_2px_4px_rgba(0,0,0,0.05)] bg-white" />

      <div className={styles.BoxCentralizarIndicadores}>
        <div className={styles.EspacarIndicadores}>
          <div className="quadrado bg-[#DCFCE7]">
            <div className="flex flex-col w-full justify-between ">
              <div className="ml-5 flex justify-start space-x-3">
                <div className="bg-[#3CD856] rounded-full flex items-center justify-center w-8 h-8">
                  <Image
                    src={alunoIcon1}
                    alt="Ícone aluno-professor"
                    width={15}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <p className="text-2xl font-bold text-gray-900">70%</p>
              </div>
              <div className="ml-17 mb-3 flex text-left">
                <div className="flex flex-col leading-snug">
                  <p className={styles.textoPersonalizado2}>de alunos</p>
                  <p className={styles.textoPersonalizado}>engajados</p>
                </div>
              </div>
            </div>
          </div>

          <div className="quadrado bg-[#FFF5A6]">
            <div className="flex flex-col w-full justify-between ">
              <div className="ml-5 flex justify-start space-x-3">
                <div className="bg-[#D8D03C] rounded-full flex items-center justify-center w-8 h-8">
                  <Image
                    src={alunoIcon2}
                    alt="Ícone aluno-professor"
                    width={21}
                    height={28}
                    className="object-cover"
                  />
                </div>
                <p className="text-2xl font-bold text-gray-900">55%</p>
              </div>

              <div className="ml-17 flex text-left">
                <div className="flex flex-col leading-snug">
                  <p className={styles.textoPersonalizado2}>de alunos</p>
                  <p className={styles.textoPersonalizado}>com bom desempenho</p>
                </div>
              </div>
            </div>
          </div>



          <div className="quadrado bg-[#C3D8FF]">
            <div className="flex flex-col w-full justify-between ">
              <div className="ml-8 flex justify-start space-x-3">
                <div className="bg-[#3C56D8] rounded-full flex items-center justify-center w-8 h-8">
                  <Image
                    src={alunoIcon3}
                    alt="Ícone aluno-professor"
                    width={21}
                    height={28}
                    className="ml-2.5 object-cover"
                  />
                </div>
                <p className="text-2xl font-bold text-gray-900">55%</p>
              </div>

              <div className="ml-19 flex text-left">
                <div className="flex flex-col leading-snug">
                  <p className={styles.textoPersonalizado2}>de alunos</p>
                  <p className={styles.textoPersonalizado}>com motivação boa</p>
                </div>
              </div>
            </div>
          </div>

          <div className="quadrado bg-[#D0C3FF]">
            <div className="flex flex-col w-full justify-between ">
              <div className="ml-5 flex justify-start space-x-3">
                <div className="bg-[#5C3CD8] rounded-full flex items-center justify-center w-8 h-8">
                  <Image
                    src={alunoIcon}
                    alt="Ícone aluno-professor"
                    width={21}
                    height={28}
                    className="mr-0.5 object-cover"
                  />
                </div>
                <p className="text-2xl font-bold text-gray-900">16%</p>
              </div>

              <div className="ml-17 flex text-left">
                <div className="flex flex-col leading-snug">
                  <p className={styles.textoPersonalizado2}>de alunos</p>
                  <p className={styles.textoPersonalizado}>com boa relação<br />aluno-professor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.BoxCentralizarIndicadores}>
        <div className={styles.BoxGrupodeRisco}>
          <div className="text-left">
            <p className="text-base font-poppins font-semibold  ml-4 mt-6">Grupo de Risco</p>
          </div>
          <div className={styles.BoxGrupodeRiscoIndicadores}>
            <div className={styles.EspacarIndicadores}>
              <div className="quadrado bg-[#FFD3A6]">
                <div className="flex flex-col w-full justify-between ">
                  <div className="ml-3 flex justify-start space-x-3">
                    <div className="bg-[#D86D3C] rounded-full flex items-center justify-center w-8 h-8">
                      <FontAwesomeIcon icon={faTriangleExclamation} className="mb-1 mr-0.3 text-white text-xl" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">3%</p>
                  </div>

                  <div className="ml-15 flex text-left">
                    <div className="flex flex-col leading-snug">
                      <p className={styles.textoPersonalizado2}>de alunos</p>
                      <p className={styles.textoPersonalizado}> que precisam de reforço</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="quadrado bg-[#FFD8E2]">
                <div className="flex flex-col w-full justify-between ">
                  <div className="ml-5 flex justify-start space-x-3">
                    <div className="bg-[#D83C8C] rounded-full flex items-center justify-center w-8 h-8">
                      <Image
                        src={alunoIcon5}
                        alt="Ícone aluno-professor"
                        width={21}
                        height={28}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">1%</p>
                  </div>

                  <div className="ml-17 flex text-left">
                    <div className="flex flex-col leading-snug">
                      <p className={styles.textoPersonalizado2}>de alunos</p>
                      <p className={styles.textoPersonalizado}>em risco de evasão</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
