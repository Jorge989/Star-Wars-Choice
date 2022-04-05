import React, { useState, useEffect, useCallback } from "react";
import ReactLoading from "react-loading";
import StarWarsText from "../../assets/starwarstext.png";
import { useDropzone } from "react-dropzone";
import "./home.scss";
import ImperioIcon from "../../assets/imperio.svg";
import JediOreder from "../../assets/jediorder.svg";
import LigthSaber from "../../assets/ligthsaber.png";
export default function Home() {
  const [active, setActive] = useState("active");
  const [step1, setStep1] = useState(0);
  const [loading, setLoading] = useState(true);
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // function handleNextStep() {
  //   console.log("step0", step1);
  //   if (step1 >= 1) {
  //     console.log("step1", step1);
  //     setActive((active = 1));
  //     setStep1(1);
  //   } else {
  //     console.log("step2", step1);
  //     setActive(active + 1);
  //     setStep1(step1 + 1);
  //   }
  // }
  // function handlePrevStep() {
  //   if (step1 <= 0) {
  //     console.log("entrou");
  //     setStep1(-1);
  //     console.log("active 1", step1);
  //   } else {
  //     console.log("entrou2");

  //     setStep1(step1 - 1);
  //     console.log("active 2", step1);
  //   }
  // }
  return (
    <>
      {loading ? (
        <div className="container-loader">
          <div className="box-animation">
            <div className="container-ligthsaber">
              <img src={LigthSaber} />
              <div className="star-wars-text">
                <img src={StarWarsText} />
              </div>
            </div>
            <div className="wrapper-spinner">
              <ReactLoading
                className="spinner"
                type={"spinningBubbles"}
                color={"#03A2FA"}
                height={50}
                width={50}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="split left"></div>

          <div className="split right"></div>
          <div className="header-text">
            <p>
              desperte
              <span> a força </span>de dentro
            </p>
          </div>
          <div className="container-button-links">
            <h1>escolha seu lado</h1>
            <p>ou clique abaixo para voltar à sua experiência normal</p>

            <div
              className={
                step1 >= 1
                  ? "progress-active"
                  : step1 <= -1
                  ? "progress-active2"
                  : step1 == 0
                  ? "progress-buttons"
                  : "progress-buttons"
              }
            ></div>
            <div className="wrapper-buttons" loading="lazy">
              <button
                className="button light-side"
                disabled={active === 0}
                onClick={() => setStep1(-1)}
              >
                <img src={JediOreder} />
              </button>
              <button className="button default-side" loading="lazy">
                <a>oi</a>
              </button>
              <button
                className="button dark-side"
                onClick={() => setStep1(1)}
                disabled={active === 3}
              >
                <img src={ImperioIcon} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
