/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/portrait2.png";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "nopCommerce Developer",
    "B2B E-commerce Specialist",
    "Full-Stack Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((preDelta) => preDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>
              {`Hi, I'm `}
              <span className="myName">Kaiyi Wu</span>
              {` — a`}
            </h1>
            <div className="wrap">{text}</div>
            <p>
              I build and customise B2B e-commerce solutions — from complex
              nopCommerce plugins to ERP integrations. Based in Montréal, with
              hands-on experience shipping production stores and automating
              business workflows with Python and C#.
            </p>
            <HashLink smooth to="#projects" className="button-link">
              <button>
                See My Work <ArrowRightCircle size={25} />
              </button>
            </HashLink>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Kaiyi Wu" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
