import Link from "next/link";
import React from "react";
import aboutImage1 from "../../../public/about-image-1.jpg";
import aboutImage2 from "../../../public/about-image-2.jpg";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12">
      <div className="flex sm:flex-row flex-col items-center gap-6">
        <div className="flex-[1.5] sm:order-2">
          <Image
            src={aboutImage1}
            alt=""
            className="shadow-[0_0_6px_1px_#ddd] rounded-xl aspect-[1.6] object-cover"
          ></Image>
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <h1 className="font-bold text-2xl sm:text-4xl">About Estate Haven</h1>
          <p className="sm:text-lg">
            Our platform offers the best opportunity to find the best real
            estate possible. We make this process easy and comfortable
          </p>
          <Link
            href={"/contact"}
            className="block bg-accent-green-100 hover:bg-accent-green-200 px-4 sm:px-6 p-2 sm:p-3 rounded-md w-fit font-bold text-white sm:text-lg duration-300"
          >
            Contact us
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-center text-xl sm:text-3xl">
          Why choose us?
        </h2>
        <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-4 text-center">
          <div className="flex-col flex-center gap-2 shadow-[#eee] shadow-[0_0_10px_1px] p-6 rounded-xl">
            <svg
              height={40}
              width={40}
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>safety_certificate_line</title>
                <g
                  id="页面-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="System"
                    transform="translate(-430.000000, -192.000000)"
                    fillRule="nonzero"
                  >
                    <g
                      id="safety_certificate_line"
                      transform="translate(430.000000, 192.000000)"
                    >
                      <path
                        d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                        id="MingCute"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M11.2978,2.19533 C11.6939125,2.0467725 12.1254734,2.02820281 12.530448,2.13962094 L12.7022,2.19533 L19.7022,4.82033 C20.4308533,5.09354467 20.9298818,5.76181693 20.9931804,6.52752646 L21,6.69299 L21,12.0557 C21,15.3644353 19.185628,18.397435 16.2910032,19.9669788 L16.0249,20.1056 L12.6708,21.7826 C12.2954222,21.9703333 11.8610222,21.9911926 11.4725284,21.8451778 L11.3292,21.7826 L7.97508,20.1056 C5.01569824,18.6258412 3.11426678,15.6466349 3.00497789,12.3557015 L3,12.0557 L3,6.69299 C3,5.91487933 3.45049511,5.21294733 4.14521784,4.88481434 L4.29775,4.82033 L11.2978,2.19533 Z M12,4.06799 L5,6.69299 L5,12.0557 C5,14.61872 6.39981647,16.9691539 8.63528667,18.1940401 L8.8695,18.3167 L12,19.882 L15.1305,18.3167 C17.42295,17.1705233 18.8991628,14.8673176 18.9950298,12.3200442 L19,12.0557 L19,6.69299 L12,4.06799 Z M15.4329,8.62909 C15.8235,8.23856 16.4566,8.23856 16.8471,8.62909 C17.2076538,8.98957 17.2353888,9.55680503 16.9303047,9.9490935 L16.8471,10.0433 L11.6127,15.2778 C11.2137857,15.6767143 10.5847383,15.7052082 10.1529478,15.3632816 L10.057,15.2778 L7.65285,12.8736 C7.26233,12.4831 7.26233,11.8499 7.65285,11.4594 C8.01333923,11.0989385 8.58056645,11.0712107 8.97286152,11.3762166 L9.06707,11.4594 L10.8348,13.2272 L15.4329,8.62909 Z"
                        id="形状"
                        fill="#09244B"
                        className="fill-accent-green-100"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <h3 className="font-bold text-lg sm:text-xl">Trusted Platform</h3>
            <p className="text-zinc-500">
              Reliable and secure platform with verified listings for peace of
              mind in your property search.
            </p>
          </div>
          <div className="flex-col flex-center gap-2 shadow-[#eee] shadow-[0_0_10px_1px] p-6 rounded-xl">
            <svg
              className="fill-accent-green-100"
              width={40}
              height={40}
              viewBox="0 0 19.00 19.00"
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="0"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="m13.842 11.52-4.389 4.388a1.112 1.112 0 0 1-1.567 0l-6.28-6.28a3.027 3.027 0 0 1-.771-1.892l.043-3.681A1.141 1.141 0 0 1 2 2.935L5.67 2.9a3.04 3.04 0 0 1 1.892.773l6.28 6.28a1.112 1.112 0 0 1 0 1.567zM3.826 5.133a.792.792 0 1 0-.792.792.792.792 0 0 0 .792-.792zm6.594 7.348a.554.554 0 0 0 0-.784l-.401-.401a2.53 2.53 0 0 0 .35-.83 1.565 1.565 0 0 0-.397-1.503 1.59 1.59 0 0 0-1.017-.46 2.14 2.14 0 0 0-.75.085h-.002a2.444 2.444 0 0 0-.59.277H7.61a2.677 2.677 0 0 0-.438.357 2.043 2.043 0 0 1-.259.22 1.29 1.29 0 0 1-.329.17h-.002a.835.835 0 0 1-.338.038h-.002a.53.53 0 0 1-.314-.136.539.539 0 0 1-.106-.534 1.54 1.54 0 0 1 .41-.71 1.632 1.632 0 0 1 .23-.165l.03-.019a1.783 1.783 0 0 1 .322-.155.942.942 0 0 1 .325-.06.554.554 0 0 0 0-1.108h-.001a2.058 2.058 0 0 0-.717.132 2.846 2.846 0 0 0-.529.26l-.01.006-.398-.4a.554.554 0 1 0-.784.785l.388.387a2.513 2.513 0 0 0-.347.803 1.644 1.644 0 0 0 .404 1.561 1.622 1.622 0 0 0 .983.456 1.922 1.922 0 0 0 .805-.089 2.372 2.372 0 0 0 .624-.319 3.142 3.142 0 0 0 .398-.339 1.569 1.569 0 0 1 .256-.208 1.381 1.381 0 0 1 .32-.151 1.023 1.023 0 0 1 .348-.038.485.485 0 0 1 .308.139c.05.049.165.165.097.488a1.558 1.558 0 0 1-.413.729 2.476 2.476 0 0 1-.28.219 1.727 1.727 0 0 1-.306.157.687.687 0 0 1-.32.042.554.554 0 1 0-.08 1.106c.052.004.103.005.152.005a1.723 1.723 0 0 0 .685-.134 2.678 2.678 0 0 0 .507-.27l.01-.007.397.398a.555.555 0 0 0 .783 0z"></path>
              </g>
            </svg>
            <h3 className="font-bold text-lg sm:text-xl">Affordable Prices</h3>
            <p className="text-zinc-500">
              Discover competitive pricing on a wide range of properties to fit
              your budget.
            </p>
          </div>
          <div className="flex-col flex-center gap-2 shadow-[#eee] shadow-[0_0_10px_1px] p-6 rounded-xl">
            <svg
              height={40}
              width={40}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.261 1.03462C12.6971 1.15253 13 1.54819 13 1.99997V8.99997H19C19.3581 8.99997 19.6888 9.19141 19.8671 9.50191C20.0455 9.8124 20.0442 10.1945 19.8638 10.5038L12.8638 22.5038C12.6361 22.8941 12.1751 23.0832 11.739 22.9653C11.3029 22.8474 11 22.4517 11 22V15H5C4.64193 15 4.3112 14.8085 4.13286 14.498C3.95452 14.1875 3.9558 13.8054 4.13622 13.4961L11.1362 1.4961C11.3639 1.10586 11.8249 0.916719 12.261 1.03462ZM6.74104 13H12C12.5523 13 13 13.4477 13 14V18.301L17.259 11H12C11.4477 11 11 10.5523 11 9.99997V5.69889L6.74104 13Z"
                  fill="#000000"
                  className="fill-accent-green-100"
                ></path>
              </g>
            </svg>
            <h3 className="font-bold text-lg sm:text-xl">Quick Process</h3>
            <p className="text-zinc-500">
              Streamlined procedures to help you find and secure your ideal
              property swiftly.
            </p>
          </div>
          <div className="flex-col flex-center gap-2 shadow-[#eee] shadow-[0_0_10px_1px] p-6 rounded-xl">
            <svg
              height={40}
              width={40}
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#000000"
              className="fill-accent-green-100"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <style type="text/css"> </style>
                <g>
                  <path d="M512,216.906c-0.031-29.313-23.781-53.078-53.094-53.094h-75.891c-3.531,0-43.578,0-47.219,0 c-6.953,0.063-13.328,1.094-17.969,1.031c-1.859,0-3.328-0.156-4.188-0.344L313,164.313l-0.156-0.469 c-0.141-0.609-0.281-1.625-0.281-3.094c0-0.906,0.141-2.188,0.25-3.438l30.281-74.875c2.906-7.188,4.281-14.656,4.281-21.969 c0.031-23.188-13.844-45.156-36.656-54.406c-7.156-2.891-14.641-4.281-21.984-4.281c-23.203-0.016-45.141,13.875-54.391,36.672 l-0.047,0.078l-51.359,129.313h0.031c-3.438,8.063-6.203,15.625-8.906,22.156c-4.078,10.031-8.063,17.25-12.766,21.438 c-2.359,2.125-4.922,3.719-8.484,4.969c-3.531,1.219-8.172,2.047-14.391,2.047c-3.781-0.016-7.375,0.422-10.891,1.078H44.5 c-24.594,0-44.5,19.922-44.5,44.5v201.703c0,24.578,19.906,44.484,44.5,44.484h61.578c13.641,0,24.719-11.063,24.719-24.719 v-20.484c4.328,2.531,8.891,4.828,13.797,6.672c17.156,6.5,37.531,9.219,62.063,9.219h191.25c29.313,0,53.094-23.719,53.094-53.047 c0-6.891-1.406-13.453-3.828-19.453c21.156-7,36.453-26.875,36.453-50.375c0.016-9.594-2.688-18.547-7.141-26.25 c6.422-5.25,10.781-12.156,13.266-19.375c2.719-7.75,3.656-15.906,3.656-24.203c0-5.141-1.094-10.141-2.969-15.016 c-1.375-3.469-3.172-6.891-5.375-10.125C501.125,253.938,511.984,236.703,512,216.906z M458.938,243.797h-8.844 c-3.469,0-6.813,1.391-9.25,3.828s-3.844,5.813-3.844,9.25s1.406,6.813,3.844,9.25s5.781,3.844,9.25,3.844 c2.516,0,4.578,0.563,6.594,1.609c2.969,1.516,5.797,4.375,7.75,7.719c1.969,3.281,2.875,7.047,2.813,8.906 c0.031,8.297-1.438,15.078-3.719,19.078c-1.156,2.031-2.391,3.453-3.906,4.594c-1.531,1.125-3.438,2.063-6.344,2.688 c-4.938,1-8.813,4.734-10.031,9.625c-1.234,4.906,0.438,10.031,4.344,13.25c6.094,5.094,9.875,12.313,9.875,20.594 c-0.031,14.844-12.047,26.875-26.922,26.906h-6.234c-5.438,0-10.313,3.344-12.219,8.438c-1.938,5.094-0.531,10.813,3.563,14.438 c5.688,5.078,9.172,12.063,9.172,20.047c-0.016,14.844-12.047,26.859-26.922,26.891h-191.25 c-20.063,0.016-36.031-2.063-48.313-5.969c-9.25-2.938-16.391-6.828-22.172-11.688c-1.938-1.656-3.703-3.469-5.375-5.359V245.5 c2.109-0.531,4.547-0.875,7.625-0.875c11.328,0,21.156-2.047,29.453-6.25c6.188-3.109,11.375-7.406,15.5-12.172 c6.188-7.203,10.219-15.297,13.719-23.484c3.5-8.219,6.5-16.625,10.031-24.906l0.156-0.313l51.328-129.281 c5.109-12.625,17.281-20.266,30.125-20.281c4.047,0,8.172,0.766,12.172,2.391c12.656,5.094,20.297,17.266,20.313,30.141 c0,4.047-0.75,8.156-2.375,12.172l-31,76.672c-0.422,1.016-0.688,2.047-0.844,3.125c-0.391,2.906-0.594,5.656-0.594,8.313 c0,4.875,0.688,9.484,2.484,13.781c1.313,3.219,3.297,6.203,5.734,8.563c3.656,3.594,8.078,5.594,12.031,6.625 c4,1.063,7.719,1.281,11.172,1.297c7.422-0.047,14.109-1.094,17.969-1.031c3.641,0,43.688,0,47.219,0h75.891 c14.844-0.016,26.938,12.047,26.938,26.922C485.813,231.75,473.781,243.781,458.938,243.797z"></path>
                </g>
              </g>
            </svg>
            <h3 className="font-bold text-lg sm:text-xl">Easy To Find</h3>
            <p className="text-zinc-500">
              User-friendly search features make finding your perfect property
              simple and efficient.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8 bg-zinc-100 p-8 sm:p-10 rounded-xl">
        <div className="flex flex-col flex-1 gap-4">
          <h2 className="font-bold text-xl sm:text-3xl">
            Buy properties with confidence, sell without pressure
          </h2>
          <p className="sm:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            sit numquam magnam enim ratione necessitatibus delectus quo
            recusandae. Eveniet, modi.
          </p>
          <Link
            href={"/properties"}
            className="flex items-center gap-2 bg-accent-green-100 hover:bg-accent-green-200 px-4 sm:px-6 p-2 sm:p-3 rounded-md w-fit font-bold text-white sm:text-lg duration-300"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            Find Property
          </Link>
        </div>
        <div className="sm:block flex-1 hidden">
          <Image
            src={aboutImage2}
            alt=""
            className="shadow-[0_0_6px_2px_#ddd] rounded-xl aspect-[1.6] object-cover"
          ></Image>
        </div>
      </div>
    </div>
  );
}
