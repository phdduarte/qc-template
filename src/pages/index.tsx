/* eslint-disable @next/next/no-img-element */
import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="news-festival-container">
      <div className="container">
        <div className="flex">
          <div className="flex-1">
            <div>
              <h1 className="font-bold text-4xl rainbow-border">Festival de Novidades</h1>
              <p className="font-medium text-base pt-4 pb-6">
                Chegou a maior inovação da nossa história no preparo para carreiras públicas. Pode
                acreditar!
              </p>
            </div>
          </div>
          <div className="flex-1">LUGAR PARA COLOCAR O CONTADORs</div>
        </div>
      </div>
      <section className="mystery-box pt-4 pb-6">
        <div className="container">
          <div className="flex">
            <div className="flex-1">
              <div>
                <h1>Sua aprovação pode estar nesta caixa!</h1>
                <p className="font-medium text-base pt-4 pb-6">
                  Você não precisa saber o que tem dentro da Caixa para entender que essa
                  oportunidade é única. Aproveite!
                </p>
              </div>
              <div>
                <span>ALERTA DE SPOILER</span>
                <ul>
                  <li>
                    <Image src="/images/check.svg" width={14} height={14} alt="Icon Check" />
                    <span className="ml-2">4 anos de acesso ao novo plano a partir de 25/11</span>
                  </li>
                  <li>
                    <Image src="/images/check.svg" width={14} height={14} alt="Icon Check" />
                    <span className="ml-2">Acesso imediato ao Premium Plus</span>
                  </li>
                </ul>
              </div>
              <div className="d-flex">
                <div>
                  <span>De: 5.895,23</span>
                  <span>Por:</span>
                  <span>12x R$</span>
                  <span className="text-6xl font-extrabold">29,90</span>
                  <span>ou R$ 299,00 à vista</span>
                </div>
                <div>
                  <svg
                    width="92"
                    height="93"
                    viewBox="0 0 92 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd_311_2504)">
                      <path
                        d="M42.1415 3.9787C44.2531 1.80134 47.7469 1.80134 49.8585 3.9787L53.5732 7.80907C54.8875 9.16427 56.8164 9.73064 58.6547 9.30112L63.8505 8.08712C66.8041 7.39702 69.7433 9.28594 70.3425 12.2593L71.3966 17.4899C71.7696 19.3405 73.0861 20.8598 74.8648 21.4923L79.8921 23.2801C82.7499 24.2964 84.2013 27.4745 83.0979 30.2998L81.1568 35.27C80.4701 37.0285 80.7561 39.0183 81.9105 40.5121L85.1732 44.7341C87.0279 47.134 86.5307 50.5923 84.075 52.3726L79.755 55.5043C78.2265 56.6123 77.3914 58.441 77.5549 60.3217L78.0171 65.6374C78.2799 68.6591 75.9919 71.2996 72.9635 71.4696L67.6361 71.7686C65.7513 71.8744 64.0601 72.9613 63.1809 74.6318L60.6958 79.3536C59.2832 82.0377 55.9308 83.022 53.2913 81.5277L48.648 78.8991C47.0052 77.969 44.9948 77.969 43.352 78.8991L38.7087 81.5277C36.0692 83.022 32.7168 82.0377 31.3042 79.3536L28.8191 74.6318C27.9399 72.9613 26.2487 71.8744 24.3639 71.7686L19.0365 71.4696C16.0081 71.2996 13.7201 68.6591 13.9829 65.6374L14.4451 60.3217C14.6086 58.441 13.7735 56.6123 12.245 55.5043L7.925 52.3726C5.4693 50.5923 4.97207 47.134 6.82675 44.7341L10.0895 40.5121C11.2439 39.0183 11.5299 37.0285 10.8432 35.27L8.90209 30.2998C7.79868 27.4745 9.25008 24.2964 12.1079 23.2801L17.1352 21.4923C18.9139 20.8598 20.2304 19.3405 20.6034 17.4899L21.6575 12.2593C22.2567 9.28595 25.1959 7.39702 28.1495 8.08712L33.3453 9.30112C35.1836 9.73064 37.1125 9.16427 38.4268 7.80908L42.1415 3.9787Z"
                        fill="url(#paint0_linear_311_2504)"
                      />
                      <path
                        d="M42.5273 4.3529C44.4278 2.39327 47.5722 2.39327 49.4727 4.35289L53.1874 8.18327C54.633 9.67399 56.7548 10.297 58.777 9.82453L63.9728 8.61052C66.631 7.98943 69.2763 9.68946 69.8156 12.3655L70.8697 17.5961C71.28 19.6318 72.7281 21.303 74.6847 21.9988L79.712 23.7866C82.284 24.7012 83.5903 27.5615 82.5972 30.1043L80.6562 35.0745C79.9007 37.0088 80.2154 39.1976 81.4852 40.8407L84.7479 45.0627C86.4172 47.2227 85.9697 50.3352 83.7595 51.9374L79.4395 55.0691C77.7582 56.288 76.8396 58.2995 77.0194 60.3683L77.4817 65.684C77.7181 68.4035 75.6589 70.78 72.9334 70.9329L67.606 71.2319C65.5327 71.3483 63.6724 72.5439 62.7052 74.3815L60.2202 79.1033C58.9488 81.5189 55.9317 82.4048 53.5561 81.06L48.9128 78.4313C47.1057 77.4083 44.8943 77.4083 43.0872 78.4313L38.4439 81.06C36.0683 82.4048 33.0512 81.5189 31.7799 79.1033L29.2948 74.3815C28.3276 72.5439 26.4673 71.3483 24.394 71.2319L19.0666 70.9329C16.3411 70.78 14.2819 68.4035 14.5184 65.684L14.9806 60.3683C15.1604 58.2995 14.2418 56.288 12.5605 55.0691L8.24048 51.9374C6.03034 50.3352 5.58284 47.2227 7.25205 45.0627L10.5148 40.8407C11.7846 39.1976 12.0993 37.0088 11.3439 35.0745L9.40276 30.1043C8.40969 27.5615 9.71595 24.7012 12.288 23.7866L17.3153 21.9988C19.2719 21.303 20.72 19.6318 21.1303 17.5961L22.1844 12.3655C22.7237 9.68947 25.369 7.98943 28.0272 8.61052L33.223 9.82453C35.2452 10.297 37.3669 9.67399 38.8126 8.18327L42.5273 4.3529Z"
                        stroke="#00DFFF"
                        strokeWidth="1.075"
                      />
                    </g>
                    <path
                      d="M30.9571 40.2343C29.6239 40.2343 28.433 40.0223 27.3843 39.5984C26.3412 39.1689 25.5213 38.5888 24.9244 37.858C24.3332 37.1217 24.0375 36.2906 24.0375 35.3646C24.0375 34.6562 24.2076 34.0064 24.5479 33.4151C24.8882 32.8239 25.3484 32.333 25.9285 31.9425C26.5142 31.5465 27.1668 31.2927 27.8864 31.1811V31.0472C26.9437 30.8743 26.1711 30.4364 25.5687 29.7336C24.9718 29.0308 24.6734 28.208 24.6734 27.2653C24.6734 26.3728 24.9439 25.578 25.485 24.8807C26.0317 24.1835 26.7763 23.634 27.719 23.2324C28.6673 22.8308 29.7466 22.63 30.9571 22.63C32.1675 22.63 33.2441 22.8308 34.1868 23.2324C35.135 23.634 35.8797 24.1835 36.4208 24.8807C36.9674 25.578 37.2407 26.3728 37.2407 27.2653C37.2407 28.2136 36.9367 29.0392 36.3287 29.742C35.7263 30.4392 34.9593 30.8743 34.0278 31.0472V31.1811C34.7418 31.2927 35.3888 31.5465 35.9689 31.9425C36.5546 32.333 37.0176 32.8239 37.3579 33.4151C37.7037 34.0064 37.8766 34.6562 37.8766 35.3646C37.8766 36.2906 37.5782 37.1217 36.9814 37.858C36.3845 38.5888 35.5645 39.1689 34.5214 39.5984C33.4839 40.0223 32.2958 40.2343 30.9571 40.2343ZM30.9571 37.2974C31.4647 37.2974 31.9109 37.2026 32.2958 37.013C32.6807 36.8177 32.9819 36.5472 33.1994 36.2014C33.4226 35.8555 33.5341 35.4651 33.5341 35.03C33.5341 34.5837 33.4226 34.1877 33.1994 33.8418C32.9763 33.496 32.6695 33.2255 32.2791 33.0302C31.8942 32.8294 31.4535 32.729 30.9571 32.729C30.4662 32.729 30.0255 32.8294 29.6351 33.0302C29.2446 33.2255 28.9378 33.496 28.7147 33.8418C28.4916 34.1877 28.38 34.5837 28.38 35.03C28.38 35.4651 28.4888 35.8555 28.7063 36.2014C28.9295 36.5416 29.2335 36.8094 29.6183 37.0046C30.0088 37.1998 30.4551 37.2974 30.9571 37.2974ZM30.9571 29.8089C31.3922 29.8089 31.777 29.7197 32.1117 29.5412C32.452 29.3627 32.7169 29.1145 32.9066 28.7965C33.1018 28.4786 33.1994 28.1188 33.1994 27.7172C33.1994 27.3155 33.1018 26.9613 32.9066 26.6545C32.7169 26.3477 32.4548 26.1079 32.1201 25.935C31.7854 25.7565 31.3977 25.6672 30.9571 25.6672C30.522 25.6672 30.1343 25.7565 29.7941 25.935C29.4538 26.1079 29.1888 26.3477 28.9992 26.6545C28.8095 26.9613 28.7147 27.3155 28.7147 27.7172C28.7147 28.1188 28.8095 28.4786 28.9992 28.7965C29.1944 29.1089 29.4622 29.3571 29.8024 29.5412C30.1427 29.7197 30.5276 29.8089 30.9571 29.8089ZM45.2303 40.2343C43.8971 40.2343 42.7062 40.0223 41.6575 39.5984C40.6144 39.1689 39.7945 38.5888 39.1976 37.858C38.6064 37.1217 38.3107 36.2906 38.3107 35.3646C38.3107 34.6562 38.4808 34.0064 38.8211 33.4151C39.1614 32.8239 39.6216 32.333 40.2017 31.9425C40.7874 31.5465 41.44 31.2927 42.1596 31.1811V31.0472C41.2169 30.8743 40.4443 30.4364 39.8419 29.7336C39.245 29.0308 38.9466 28.208 38.9466 27.2653C38.9466 26.3728 39.2171 25.578 39.7582 24.8807C40.3049 24.1835 41.0495 23.634 41.9922 23.2324C42.9405 22.8308 44.0198 22.63 45.2303 22.63C46.4407 22.63 47.5173 22.8308 48.46 23.2324C49.4082 23.634 50.1529 24.1835 50.694 24.8807C51.2406 25.578 51.5139 26.3728 51.5139 27.2653C51.5139 28.2136 51.2099 29.0392 50.6019 29.742C49.9995 30.4392 49.2325 30.8743 48.301 31.0472V31.1811C49.015 31.2927 49.662 31.5465 50.2421 31.9425C50.8278 32.333 51.2908 32.8239 51.6311 33.4151C51.9769 34.0064 52.1498 34.6562 52.1498 35.3646C52.1498 36.2906 51.8514 37.1217 51.2546 37.858C50.6577 38.5888 49.8377 39.1689 48.7946 39.5984C47.7571 40.0223 46.569 40.2343 45.2303 40.2343ZM45.2303 37.2974C45.7379 37.2974 46.1841 37.2026 46.569 37.013C46.9539 36.8177 47.2551 36.5472 47.4726 36.2014C47.6958 35.8555 47.8073 35.4651 47.8073 35.03C47.8073 34.5837 47.6958 34.1877 47.4726 33.8418C47.2495 33.496 46.9427 33.2255 46.5523 33.0302C46.1674 32.8294 45.7267 32.729 45.2303 32.729C44.7394 32.729 44.2987 32.8294 43.9083 33.0302C43.5178 33.2255 43.211 33.496 42.9879 33.8418C42.7648 34.1877 42.6532 34.5837 42.6532 35.03C42.6532 35.4651 42.762 35.8555 42.9795 36.2014C43.2027 36.5416 43.5067 36.8094 43.8915 37.0046C44.282 37.1998 44.7283 37.2974 45.2303 37.2974ZM45.2303 29.8089C45.6654 29.8089 46.0502 29.7197 46.3849 29.5412C46.7252 29.3627 46.9901 29.1145 47.1798 28.7965C47.375 28.4786 47.4726 28.1188 47.4726 27.7172C47.4726 27.3155 47.375 26.9613 47.1798 26.6545C46.9901 26.3477 46.728 26.1079 46.3933 25.935C46.0586 25.7565 45.6709 25.6672 45.2303 25.6672C44.7952 25.6672 44.4075 25.7565 44.0673 25.935C43.727 26.1079 43.462 26.3477 43.2724 26.6545C43.0827 26.9613 42.9879 27.3155 42.9879 27.7172C42.9879 28.1188 43.0827 28.4786 43.2724 28.7965C43.4676 29.1089 43.7354 29.3571 44.0756 29.5412C44.4159 29.7197 44.8008 29.8089 45.2303 29.8089ZM62.4068 36.787V35.8834C62.4068 35.1806 62.5575 34.5307 62.8587 33.9339C63.1655 33.337 63.6089 32.8573 64.189 32.4947C64.7691 32.1322 65.4776 31.9509 66.3143 31.9509C67.1677 31.9509 67.8845 32.1322 68.4646 32.4947C69.0503 32.8517 69.491 33.3287 69.7866 33.9255C70.0878 34.5168 70.2384 35.1694 70.2384 35.8834V36.787C70.2384 37.4899 70.0878 38.1397 69.7866 38.7366C69.4854 39.3334 69.0419 39.8131 68.4562 40.1757C67.8705 40.5383 67.1565 40.7196 66.3143 40.7196C65.4664 40.7196 64.7524 40.5383 64.1723 40.1757C63.5922 39.8131 63.1515 39.3334 62.8503 38.7366C62.5547 38.1397 62.4068 37.4899 62.4068 36.787ZM65.0759 35.8834V36.787C65.0759 37.144 65.1624 37.4871 65.3353 37.8162C65.5138 38.1453 65.8401 38.3099 66.3143 38.3099C66.7996 38.3099 67.1259 38.1509 67.2932 37.8329C67.4606 37.5094 67.5442 37.1608 67.5442 36.787V35.8834C67.5442 35.5097 67.4633 35.1583 67.3016 34.8292C67.1454 34.4945 66.8163 34.3271 66.3143 34.3271C65.8457 34.3271 65.5222 34.4945 65.3437 34.8292C65.1652 35.1583 65.0759 35.5097 65.0759 35.8834ZM53.521 26.9809V26.0772C53.521 25.3632 53.6744 24.7106 53.9812 24.1193C54.2936 23.5225 54.7398 23.0455 55.3199 22.6886C55.9001 22.326 56.6029 22.1447 57.4284 22.1447C58.2819 22.1447 58.9987 22.326 59.5788 22.6886C60.1645 23.0455 60.6079 23.5225 60.9091 24.1193C61.2104 24.7106 61.361 25.3632 61.361 26.0772V26.9809C61.361 27.6948 61.2076 28.3475 60.9008 28.9387C60.5996 29.53 60.1561 30.0014 59.5704 30.3528C58.9847 30.7042 58.2707 30.8799 57.4284 30.8799C56.5862 30.8799 55.8722 30.7014 55.2865 30.3444C54.7064 29.9874 54.2657 29.5133 53.9645 28.922C53.6688 28.3307 53.521 27.6837 53.521 26.9809ZM56.2152 26.0772V26.9809C56.2152 27.3546 56.3017 27.7032 56.4746 28.0267C56.6531 28.3447 56.971 28.5037 57.4284 28.5037C57.9193 28.5037 58.2456 28.3447 58.4074 28.0267C58.5747 27.7032 58.6584 27.3546 58.6584 26.9809V26.0772C58.6584 25.7035 58.5803 25.3521 58.4241 25.023C58.2679 24.6883 57.936 24.5209 57.4284 24.5209C56.9599 24.5209 56.6392 24.6911 56.4662 25.0313C56.2989 25.3716 56.2152 25.7202 56.2152 26.0772ZM54.7845 40L66.5653 22.8643H68.8495L57.0687 40H54.7845ZM40.2361 54.4321C40.2361 56.3008 39.8819 57.8905 39.1735 59.2014C38.4707 60.5122 37.5113 61.5135 36.2953 62.2051C35.0848 62.8912 33.7238 63.2343 32.2121 63.2343C30.6893 63.2343 29.3227 62.8884 28.1123 62.1968C26.9018 61.5051 25.9452 60.5038 25.2424 59.193C24.5395 57.8821 24.1881 56.2952 24.1881 54.4321C24.1881 52.5635 24.5395 50.9737 25.2424 49.6629C25.9452 48.3521 26.9018 47.3536 28.1123 46.6675C29.3227 45.9758 30.6893 45.63 32.2121 45.63C33.7238 45.63 35.0848 45.9758 36.2953 46.6675C37.5113 47.3536 38.4707 48.3521 39.1735 49.6629C39.8819 50.9737 40.2361 52.5635 40.2361 54.4321ZM36.563 54.4321C36.563 53.2217 36.3817 52.2009 36.0191 51.3698C35.6622 50.5387 35.1573 49.9083 34.5047 49.4788C33.8521 49.0493 33.0879 48.8346 32.2121 48.8346C31.3364 48.8346 30.5722 49.0493 29.9196 49.4788C29.2669 49.9083 28.7593 50.5387 28.3968 51.3698C28.0398 52.2009 27.8613 53.2217 27.8613 54.4321C27.8613 55.6426 28.0398 56.6633 28.3968 57.4945C28.7593 58.3256 29.2669 58.9559 29.9196 59.3854C30.5722 59.8149 31.3364 60.0297 32.2121 60.0297C33.0879 60.0297 33.8521 59.8149 34.5047 59.3854C35.1573 58.9559 35.6622 58.3256 36.0191 57.4945C36.3817 56.6633 36.563 55.6426 36.563 54.4321ZM41.2706 63V45.8643H52.6163V48.8513H44.8935V52.9344H51.8633V55.9215H44.8935V63H41.2706ZM53.4039 63V45.8643H64.7496V48.8513H57.0268V52.9344H63.9966V55.9215H57.0268V63H53.4039Z"
                      fill="#0D0D0D"
                    />
                    <defs>
                      <filter
                        id="filter0_dd_311_2504"
                        x="0.574415"
                        y="2.34375"
                        width="90.8512"
                        height="90.1441"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_311_2504"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="5.13066" />
                        <feGaussianBlur stdDeviation="2.56533" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow_311_2504"
                          result="effect2_dropShadow_311_2504"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_311_2504"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_311_2504"
                        x1="46"
                        y1="0"
                        x2="72.875"
                        y2="73.1"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#00DFFF" />
                        <stop offset="1" stopColor="#10A3B8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <button>QUERO ABRIR MINHA CAIXA MISTERIOSA</button>
            </div>
            <div className="flex-1">
              <div>
                <Image src="/images/mystery_box.png" width={594} height={476} alt="Caixa" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div>
          <h1>Outros planos com descontos imperdíveis</h1>
          <p className="">Ofertas exclusivas para o 1º lote</p>
        </div>
        <div className="price-wrapper flex pt-6 px-9 pb-9">
          <div className="flex-1">
            <div>
              <div>
                <h1 className="text-yellow-500 font-medium text-3xl text-center">Premium Anual</h1>
                <p className="text-center">
                  Para você que quer praticar, mas precisa de um direcionamento
                </p>
              </div>
              <div>
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="flex flex-col">
                      <span>12x</span>
                      <span>R$</span>
                    </div>
                    <span className="text-6xl font-extrabold">&nbsp;13,20</span>
                  </div>
                  <span>ou à vista 132,00</span>
                </div>
                <div>
                  <svg
                    width="92"
                    height="93"
                    viewBox="0 0 92 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd_311_2504)">
                      <path
                        d="M42.1415 3.9787C44.2531 1.80134 47.7469 1.80134 49.8585 3.9787L53.5732 7.80907C54.8875 9.16427 56.8164 9.73064 58.6547 9.30112L63.8505 8.08712C66.8041 7.39702 69.7433 9.28594 70.3425 12.2593L71.3966 17.4899C71.7696 19.3405 73.0861 20.8598 74.8648 21.4923L79.8921 23.2801C82.7499 24.2964 84.2013 27.4745 83.0979 30.2998L81.1568 35.27C80.4701 37.0285 80.7561 39.0183 81.9105 40.5121L85.1732 44.7341C87.0279 47.134 86.5307 50.5923 84.075 52.3726L79.755 55.5043C78.2265 56.6123 77.3914 58.441 77.5549 60.3217L78.0171 65.6374C78.2799 68.6591 75.9919 71.2996 72.9635 71.4696L67.6361 71.7686C65.7513 71.8744 64.0601 72.9613 63.1809 74.6318L60.6958 79.3536C59.2832 82.0377 55.9308 83.022 53.2913 81.5277L48.648 78.8991C47.0052 77.969 44.9948 77.969 43.352 78.8991L38.7087 81.5277C36.0692 83.022 32.7168 82.0377 31.3042 79.3536L28.8191 74.6318C27.9399 72.9613 26.2487 71.8744 24.3639 71.7686L19.0365 71.4696C16.0081 71.2996 13.7201 68.6591 13.9829 65.6374L14.4451 60.3217C14.6086 58.441 13.7735 56.6123 12.245 55.5043L7.925 52.3726C5.4693 50.5923 4.97207 47.134 6.82675 44.7341L10.0895 40.5121C11.2439 39.0183 11.5299 37.0285 10.8432 35.27L8.90209 30.2998C7.79868 27.4745 9.25008 24.2964 12.1079 23.2801L17.1352 21.4923C18.9139 20.8598 20.2304 19.3405 20.6034 17.4899L21.6575 12.2593C22.2567 9.28595 25.1959 7.39702 28.1495 8.08712L33.3453 9.30112C35.1836 9.73064 37.1125 9.16427 38.4268 7.80908L42.1415 3.9787Z"
                        fill="url(#paint0_linear_311_2504)"
                      />
                      <path
                        d="M42.5273 4.3529C44.4278 2.39327 47.5722 2.39327 49.4727 4.35289L53.1874 8.18327C54.633 9.67399 56.7548 10.297 58.777 9.82453L63.9728 8.61052C66.631 7.98943 69.2763 9.68946 69.8156 12.3655L70.8697 17.5961C71.28 19.6318 72.7281 21.303 74.6847 21.9988L79.712 23.7866C82.284 24.7012 83.5903 27.5615 82.5972 30.1043L80.6562 35.0745C79.9007 37.0088 80.2154 39.1976 81.4852 40.8407L84.7479 45.0627C86.4172 47.2227 85.9697 50.3352 83.7595 51.9374L79.4395 55.0691C77.7582 56.288 76.8396 58.2995 77.0194 60.3683L77.4817 65.684C77.7181 68.4035 75.6589 70.78 72.9334 70.9329L67.606 71.2319C65.5327 71.3483 63.6724 72.5439 62.7052 74.3815L60.2202 79.1033C58.9488 81.5189 55.9317 82.4048 53.5561 81.06L48.9128 78.4313C47.1057 77.4083 44.8943 77.4083 43.0872 78.4313L38.4439 81.06C36.0683 82.4048 33.0512 81.5189 31.7799 79.1033L29.2948 74.3815C28.3276 72.5439 26.4673 71.3483 24.394 71.2319L19.0666 70.9329C16.3411 70.78 14.2819 68.4035 14.5184 65.684L14.9806 60.3683C15.1604 58.2995 14.2418 56.288 12.5605 55.0691L8.24048 51.9374C6.03034 50.3352 5.58284 47.2227 7.25205 45.0627L10.5148 40.8407C11.7846 39.1976 12.0993 37.0088 11.3439 35.0745L9.40276 30.1043C8.40969 27.5615 9.71595 24.7012 12.288 23.7866L17.3153 21.9988C19.2719 21.303 20.72 19.6318 21.1303 17.5961L22.1844 12.3655C22.7237 9.68947 25.369 7.98943 28.0272 8.61052L33.223 9.82453C35.2452 10.297 37.3669 9.67399 38.8126 8.18327L42.5273 4.3529Z"
                        stroke="#00DFFF"
                        strokeWidth="1.075"
                      />
                    </g>
                    <path
                      d="M30.9571 40.2343C29.6239 40.2343 28.433 40.0223 27.3843 39.5984C26.3412 39.1689 25.5213 38.5888 24.9244 37.858C24.3332 37.1217 24.0375 36.2906 24.0375 35.3646C24.0375 34.6562 24.2076 34.0064 24.5479 33.4151C24.8882 32.8239 25.3484 32.333 25.9285 31.9425C26.5142 31.5465 27.1668 31.2927 27.8864 31.1811V31.0472C26.9437 30.8743 26.1711 30.4364 25.5687 29.7336C24.9718 29.0308 24.6734 28.208 24.6734 27.2653C24.6734 26.3728 24.9439 25.578 25.485 24.8807C26.0317 24.1835 26.7763 23.634 27.719 23.2324C28.6673 22.8308 29.7466 22.63 30.9571 22.63C32.1675 22.63 33.2441 22.8308 34.1868 23.2324C35.135 23.634 35.8797 24.1835 36.4208 24.8807C36.9674 25.578 37.2407 26.3728 37.2407 27.2653C37.2407 28.2136 36.9367 29.0392 36.3287 29.742C35.7263 30.4392 34.9593 30.8743 34.0278 31.0472V31.1811C34.7418 31.2927 35.3888 31.5465 35.9689 31.9425C36.5546 32.333 37.0176 32.8239 37.3579 33.4151C37.7037 34.0064 37.8766 34.6562 37.8766 35.3646C37.8766 36.2906 37.5782 37.1217 36.9814 37.858C36.3845 38.5888 35.5645 39.1689 34.5214 39.5984C33.4839 40.0223 32.2958 40.2343 30.9571 40.2343ZM30.9571 37.2974C31.4647 37.2974 31.9109 37.2026 32.2958 37.013C32.6807 36.8177 32.9819 36.5472 33.1994 36.2014C33.4226 35.8555 33.5341 35.4651 33.5341 35.03C33.5341 34.5837 33.4226 34.1877 33.1994 33.8418C32.9763 33.496 32.6695 33.2255 32.2791 33.0302C31.8942 32.8294 31.4535 32.729 30.9571 32.729C30.4662 32.729 30.0255 32.8294 29.6351 33.0302C29.2446 33.2255 28.9378 33.496 28.7147 33.8418C28.4916 34.1877 28.38 34.5837 28.38 35.03C28.38 35.4651 28.4888 35.8555 28.7063 36.2014C28.9295 36.5416 29.2335 36.8094 29.6183 37.0046C30.0088 37.1998 30.4551 37.2974 30.9571 37.2974ZM30.9571 29.8089C31.3922 29.8089 31.777 29.7197 32.1117 29.5412C32.452 29.3627 32.7169 29.1145 32.9066 28.7965C33.1018 28.4786 33.1994 28.1188 33.1994 27.7172C33.1994 27.3155 33.1018 26.9613 32.9066 26.6545C32.7169 26.3477 32.4548 26.1079 32.1201 25.935C31.7854 25.7565 31.3977 25.6672 30.9571 25.6672C30.522 25.6672 30.1343 25.7565 29.7941 25.935C29.4538 26.1079 29.1888 26.3477 28.9992 26.6545C28.8095 26.9613 28.7147 27.3155 28.7147 27.7172C28.7147 28.1188 28.8095 28.4786 28.9992 28.7965C29.1944 29.1089 29.4622 29.3571 29.8024 29.5412C30.1427 29.7197 30.5276 29.8089 30.9571 29.8089ZM45.2303 40.2343C43.8971 40.2343 42.7062 40.0223 41.6575 39.5984C40.6144 39.1689 39.7945 38.5888 39.1976 37.858C38.6064 37.1217 38.3107 36.2906 38.3107 35.3646C38.3107 34.6562 38.4808 34.0064 38.8211 33.4151C39.1614 32.8239 39.6216 32.333 40.2017 31.9425C40.7874 31.5465 41.44 31.2927 42.1596 31.1811V31.0472C41.2169 30.8743 40.4443 30.4364 39.8419 29.7336C39.245 29.0308 38.9466 28.208 38.9466 27.2653C38.9466 26.3728 39.2171 25.578 39.7582 24.8807C40.3049 24.1835 41.0495 23.634 41.9922 23.2324C42.9405 22.8308 44.0198 22.63 45.2303 22.63C46.4407 22.63 47.5173 22.8308 48.46 23.2324C49.4082 23.634 50.1529 24.1835 50.694 24.8807C51.2406 25.578 51.5139 26.3728 51.5139 27.2653C51.5139 28.2136 51.2099 29.0392 50.6019 29.742C49.9995 30.4392 49.2325 30.8743 48.301 31.0472V31.1811C49.015 31.2927 49.662 31.5465 50.2421 31.9425C50.8278 32.333 51.2908 32.8239 51.6311 33.4151C51.9769 34.0064 52.1498 34.6562 52.1498 35.3646C52.1498 36.2906 51.8514 37.1217 51.2546 37.858C50.6577 38.5888 49.8377 39.1689 48.7946 39.5984C47.7571 40.0223 46.569 40.2343 45.2303 40.2343ZM45.2303 37.2974C45.7379 37.2974 46.1841 37.2026 46.569 37.013C46.9539 36.8177 47.2551 36.5472 47.4726 36.2014C47.6958 35.8555 47.8073 35.4651 47.8073 35.03C47.8073 34.5837 47.6958 34.1877 47.4726 33.8418C47.2495 33.496 46.9427 33.2255 46.5523 33.0302C46.1674 32.8294 45.7267 32.729 45.2303 32.729C44.7394 32.729 44.2987 32.8294 43.9083 33.0302C43.5178 33.2255 43.211 33.496 42.9879 33.8418C42.7648 34.1877 42.6532 34.5837 42.6532 35.03C42.6532 35.4651 42.762 35.8555 42.9795 36.2014C43.2027 36.5416 43.5067 36.8094 43.8915 37.0046C44.282 37.1998 44.7283 37.2974 45.2303 37.2974ZM45.2303 29.8089C45.6654 29.8089 46.0502 29.7197 46.3849 29.5412C46.7252 29.3627 46.9901 29.1145 47.1798 28.7965C47.375 28.4786 47.4726 28.1188 47.4726 27.7172C47.4726 27.3155 47.375 26.9613 47.1798 26.6545C46.9901 26.3477 46.728 26.1079 46.3933 25.935C46.0586 25.7565 45.6709 25.6672 45.2303 25.6672C44.7952 25.6672 44.4075 25.7565 44.0673 25.935C43.727 26.1079 43.462 26.3477 43.2724 26.6545C43.0827 26.9613 42.9879 27.3155 42.9879 27.7172C42.9879 28.1188 43.0827 28.4786 43.2724 28.7965C43.4676 29.1089 43.7354 29.3571 44.0756 29.5412C44.4159 29.7197 44.8008 29.8089 45.2303 29.8089ZM62.4068 36.787V35.8834C62.4068 35.1806 62.5575 34.5307 62.8587 33.9339C63.1655 33.337 63.6089 32.8573 64.189 32.4947C64.7691 32.1322 65.4776 31.9509 66.3143 31.9509C67.1677 31.9509 67.8845 32.1322 68.4646 32.4947C69.0503 32.8517 69.491 33.3287 69.7866 33.9255C70.0878 34.5168 70.2384 35.1694 70.2384 35.8834V36.787C70.2384 37.4899 70.0878 38.1397 69.7866 38.7366C69.4854 39.3334 69.0419 39.8131 68.4562 40.1757C67.8705 40.5383 67.1565 40.7196 66.3143 40.7196C65.4664 40.7196 64.7524 40.5383 64.1723 40.1757C63.5922 39.8131 63.1515 39.3334 62.8503 38.7366C62.5547 38.1397 62.4068 37.4899 62.4068 36.787ZM65.0759 35.8834V36.787C65.0759 37.144 65.1624 37.4871 65.3353 37.8162C65.5138 38.1453 65.8401 38.3099 66.3143 38.3099C66.7996 38.3099 67.1259 38.1509 67.2932 37.8329C67.4606 37.5094 67.5442 37.1608 67.5442 36.787V35.8834C67.5442 35.5097 67.4633 35.1583 67.3016 34.8292C67.1454 34.4945 66.8163 34.3271 66.3143 34.3271C65.8457 34.3271 65.5222 34.4945 65.3437 34.8292C65.1652 35.1583 65.0759 35.5097 65.0759 35.8834ZM53.521 26.9809V26.0772C53.521 25.3632 53.6744 24.7106 53.9812 24.1193C54.2936 23.5225 54.7398 23.0455 55.3199 22.6886C55.9001 22.326 56.6029 22.1447 57.4284 22.1447C58.2819 22.1447 58.9987 22.326 59.5788 22.6886C60.1645 23.0455 60.6079 23.5225 60.9091 24.1193C61.2104 24.7106 61.361 25.3632 61.361 26.0772V26.9809C61.361 27.6948 61.2076 28.3475 60.9008 28.9387C60.5996 29.53 60.1561 30.0014 59.5704 30.3528C58.9847 30.7042 58.2707 30.8799 57.4284 30.8799C56.5862 30.8799 55.8722 30.7014 55.2865 30.3444C54.7064 29.9874 54.2657 29.5133 53.9645 28.922C53.6688 28.3307 53.521 27.6837 53.521 26.9809ZM56.2152 26.0772V26.9809C56.2152 27.3546 56.3017 27.7032 56.4746 28.0267C56.6531 28.3447 56.971 28.5037 57.4284 28.5037C57.9193 28.5037 58.2456 28.3447 58.4074 28.0267C58.5747 27.7032 58.6584 27.3546 58.6584 26.9809V26.0772C58.6584 25.7035 58.5803 25.3521 58.4241 25.023C58.2679 24.6883 57.936 24.5209 57.4284 24.5209C56.9599 24.5209 56.6392 24.6911 56.4662 25.0313C56.2989 25.3716 56.2152 25.7202 56.2152 26.0772ZM54.7845 40L66.5653 22.8643H68.8495L57.0687 40H54.7845ZM40.2361 54.4321C40.2361 56.3008 39.8819 57.8905 39.1735 59.2014C38.4707 60.5122 37.5113 61.5135 36.2953 62.2051C35.0848 62.8912 33.7238 63.2343 32.2121 63.2343C30.6893 63.2343 29.3227 62.8884 28.1123 62.1968C26.9018 61.5051 25.9452 60.5038 25.2424 59.193C24.5395 57.8821 24.1881 56.2952 24.1881 54.4321C24.1881 52.5635 24.5395 50.9737 25.2424 49.6629C25.9452 48.3521 26.9018 47.3536 28.1123 46.6675C29.3227 45.9758 30.6893 45.63 32.2121 45.63C33.7238 45.63 35.0848 45.9758 36.2953 46.6675C37.5113 47.3536 38.4707 48.3521 39.1735 49.6629C39.8819 50.9737 40.2361 52.5635 40.2361 54.4321ZM36.563 54.4321C36.563 53.2217 36.3817 52.2009 36.0191 51.3698C35.6622 50.5387 35.1573 49.9083 34.5047 49.4788C33.8521 49.0493 33.0879 48.8346 32.2121 48.8346C31.3364 48.8346 30.5722 49.0493 29.9196 49.4788C29.2669 49.9083 28.7593 50.5387 28.3968 51.3698C28.0398 52.2009 27.8613 53.2217 27.8613 54.4321C27.8613 55.6426 28.0398 56.6633 28.3968 57.4945C28.7593 58.3256 29.2669 58.9559 29.9196 59.3854C30.5722 59.8149 31.3364 60.0297 32.2121 60.0297C33.0879 60.0297 33.8521 59.8149 34.5047 59.3854C35.1573 58.9559 35.6622 58.3256 36.0191 57.4945C36.3817 56.6633 36.563 55.6426 36.563 54.4321ZM41.2706 63V45.8643H52.6163V48.8513H44.8935V52.9344H51.8633V55.9215H44.8935V63H41.2706ZM53.4039 63V45.8643H64.7496V48.8513H57.0268V52.9344H63.9966V55.9215H57.0268V63H53.4039Z"
                      fill="#0D0D0D"
                    />
                    <defs>
                      <filter
                        id="filter0_dd_311_2504"
                        x="0.574415"
                        y="2.34375"
                        width="90.8512"
                        height="90.1441"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_311_2504"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="5.13066" />
                        <feGaussianBlur stdDeviation="2.56533" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow_311_2504"
                          result="effect2_dropShadow_311_2504"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_311_2504"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_311_2504"
                        x1="46"
                        y1="0"
                        x2="72.875"
                        y2="73.1"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#00DFFF" />
                        <stop offset="1" stopColor="#10A3B8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <button>QUERO ASSSINAR</button>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <ul>
                <li>
                  <Image src="/images/check.svg" width={14} height={14} alt="Icon Check" />
                  <span className="ml-2">Criação de cadernos com questões</span>
                </li>
                <li>
                  <Image src="/images/check.svg" width={14} height={14} alt="Icon Check" />
                  <span className="ml-2">Resolu</span>ção de questões
                </li>
                <li>
                  <Image src="/images/check.svg" width={14} height={14} alt="Icon Check" />
                  <span className="ml-2">Resolu</span>ção de questões
                </li>
                <li>
                  <Image src="/images/check.svg" width={14} height={14} alt="Icon Check" />
                  <span className="ml-2">Gabari</span>tos comentados por professores
                </li>
                <li>
                  <Image src="/images/check.svg" width={14} height={14} alt="Icon Check" />
                  <span className="ml-2">Coment</span>ários em questões
                </li>
                <li>
                  <Image src="/images/check.svg" width={14} height={14} alt="Icon Check" />
                  <span className="ml-2">Estatí</span>sticas de desempenho
                </li>
                <li>
                  <Image src="/images/check.svg" width={14} height={14} alt="Icon Check" />
                  <span className="ml-2">Mais d</span>e 8.000 videoaulas
                </li>
                <li>
                  <Image src="/images/check.svg" width={14} height={14} alt="Icon Check" />
                  <span className="ml-2">Todos</span>os Raio-X e Guias de Estudo
                </li>
                <li>
                  <Image src="/images/check.svg" width={14} height={14} alt="Icon Check" />
                  <span className="ml-2">1 Ano de Acesso</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1>Tire suas dúvidas</h1>
          <p className="text-gray-400">
            Fique tranquilo, nós podemos ajudar. Separamos algumas questões que você pode estar se
            perguntando!
          </p>
        </div>
      </div>
      <footer>
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
