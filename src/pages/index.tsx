/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="news-festival-container">
      <div className="container mx-auto px-9">
        <div>
          <h1 className="font-bold text-4xl rainbow-border text-center pb-1">
            Festival de Novidades
          </h1>
          <h2 className="font-medium text-2xl text-center py-4">
            O seu preparo para concursos está prestes a mudar!
          </h2>
        </div>
      </div>
      <div className="pb-9">
        <h3 className="font-medium text-base text-center">
          Você não precisa saber o que tem dentro da Caixa para entender que essa oportunidade é
          única. Aproveite!
        </h3>
      </div>
      <div className="container">
        <div className="price-wrapper rounded-2xl text-center">
          <div className="price-wrapper-top rounded-t-2xl">
            <div className="px-9 pt-4">
              <div>
                <h1 className="text-blue-500 font-medium text-3xl">Caixa Misteriosa</h1>
                <p className="pt-3">
                  Dentro da Caixa tem mais de{' '}
                  <span className="text-yellow-500 font-bold">R$ 5.000</span> em itens
                </p>
              </div>
              <div className="pt-4">
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="flex flex-col items-end">
                      <span>12x</span>
                      <span>R$</span>
                    </div>
                    <span className="text-6xl font-extrabold">&nbsp;29,90</span>
                    <div className="flex flex-col">
                      <Image
                        src="/images/discount_stamp_25.svg"
                        width={56}
                        height={40}
                        alt="Icon Check"
                      />
                    </div>
                  </div>
                  <span className="pt-3 text-xs text-gray-300">ou à vista 132,00</span>
                </div>
              </div>
            </div>
            <div className="pb-5 pt-3">
              <button>QUERO COMPRAR</button>
            </div>
          </div>
          <div className="pl-7 pt-3">
            <ul>
              <li>
                <Image src="/images/check.svg" width={14} height={14} alt="Icon Check" />
                <span className="ml-2">Criação de cadernos com questões</span>
              </li>
              <li>
                <Image src="/images/check.svg" width={14} height={14} alt="Icon Check" />
                <span className="ml-2">Resolução de questões</span>
              </li>
              <li>
                <Image src="/images/check.svg" width={14} height={14} alt="Icon Check" />
                <span className="ml-2">Criação e resolução de simulados</span>
              </li>
              <li>
                <Image src="/images/check.svg" width={14} height={14} alt="Icon Check" />
                <span className="ml-2">5 Ano de Acesso</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-center mt-6 pb-9">
            <h1 className="mb-2">Tire suas dúvidas</h1>
            <p className="text-gray-400 font-medium text-lg">
              Fique tranquilo, nós podemos ajudar. Separamos algumas questões que você pode estar se
              perguntando!
            </p>
          </div>
        </div>
      </div>
      <footer className="pt-9 pb-16">
        <div className="container">
          <h3>
            Divulgue com seus amigos e não deixe eles perderem o MAIOR desconto da história do
            Qconcursos
          </h3>
        </div>
      </footer>
    </div>
  )
}
