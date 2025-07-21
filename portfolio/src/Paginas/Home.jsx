import React from "react";
import estilos from './Home.module.css';
import { Fundo } from '../Componentes/Fundo';
import flor from '../assets/flor.png';
import python from "../assets/python.png";
import java from "../assets/java.png";
import axios from "../assets/axios.png";
import bootstrap from "../assets/bootstrap.png";
import canva from "../assets/canva.png";
import css from "../assets/css.png";
import django from "../assets/django.png";
import docsaurus from "../assets/docsaurus.png";
import fastapi from "../assets/fastapi.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import intellij from "../assets/intellij.png";
import javascript from "../assets/javascript.png";
import jwt from "../assets/jwt.png";
import mysql from "../assets/mysql.png";
import nodejs from "../assets/nodejs.png";
import notion from "../assets/notion.png";
import pandas from "../assets/pandas.png";
import postman from "../assets/postman.png";
import react from "../assets/react.png";
import personagem from "../assets/personagens.png"
import pagina from "../assets/pagina_inicial.png"
import githubimg from "../assets/githubrede.png"
import linkedin from "../assets/linkedin.png"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 1400, disableOnInteraction: false }}
      modules={[Autoplay, Pagination]}
      className={estilos.swiperContainer} // classe para estilizar
    >
      <SwiperSlide><img src={python} alt="Python" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={java} alt="Java" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={axios} alt="Axios" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={bootstrap} alt="bootstrap" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={canva} alt="canva" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={css} alt="Axcssios" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={django} alt="django" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={docsaurus} alt="docsaurus" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={fastapi} alt="fastapi" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={figma} alt="figma" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={git} alt="git" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={github} alt="github" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={html} alt="html" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={intellij} alt="intellij" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={javascript} alt="Axios" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={jwt} alt="Axios" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={mysql} alt="Axios" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={nodejs} alt="Axios" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={notion} alt="Axios" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={pandas} alt="Axios" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={postman} alt="Axios" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={python} alt="Axios" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={react} alt="Axios" className={estilos.img} /></SwiperSlide>
      <SwiperSlide><img src={axios} alt="Axios" className={estilos.img} /></SwiperSlide>

    </Swiper>
  );
}

export function Home() {
  return (
    <>
      <Fundo />
      <header className={estilos.header_home}>
        <div className={estilos.links}>
          <a href="/"><p>HOME</p></a>
          <a href="#sobremim" ><p>SOBRE MIM</p></a>
          <a href="#projetos"><p>PROJETOS</p></a>
          <a href="#contato"><p>CONTATO</p></a>
        </div>
      </header>

      <main className={estilos.main_home}>
        <div className={estilos.texto_inicial}>
          <h1 className={estilos.nome}>Olá. Meu Nome é Kamila.</h1>
          <h2 className={estilos.fullstack}>FullStack</h2>
          <p className={estilos.frase}>Curiosa por natureza, criativa por paixão, digital por escolha.</p>
        </div>

        <section id="tecnologias" className={estilos.tec}>
          <div className={estilos.tecnologias}>
            <div className={estilos.tituloesub}>
              <p className={estilos.titulo}>Tecnologias.</p>
              <p className={estilos.subtitulo}>Technologies.</p>
            </div>

            <section className={estilos.principal_carrossel}>
              <div className={estilos.carrossel}>
                <Carousel />
              </div>
            </section>

            <div className={estilos.botao}>
              <a href="">
                <button className={estilos.tecbut}>Ver Todos</button>
              </a>
            </div>
          </div>

          <div className={estilos.flor}>
            <img className={estilos.florimg} src={flor} alt="flor branca com o centro laranja" />
          </div>
        </section>




        

        <section id="sobremim" className={estilos.section_sobremim}>
          <div className={estilos.sobremim}>
            <div className={estilos.tituloesub}>
              <p className={estilos.titulo}>Sobre Mim.</p>
              <p className={estilos.subtitulo}>About Me.</p>
            </div>

            <section className={estilos.principal_carrossel}>
              <div className={estilos.personagem}>
               <img src={personagem} alt="Boneca com blusa rosa e óculos bege" />
              </div>
            </section>

            <div className={estilos.botao}>
              <a href="">
                <button className={estilos.sobremim_botao}>Ver Todos</button>
              </a>
            </div>
          </div>
        </section>



        <section id="projetos" className={estilos.section_projetos}>
            <div className={estilos.projetos}>
                <div className={estilos.tituloesub}>
                    <p className={estilos.titulo}>Projetos.</p>
                    <p className={estilos.subtitulo}>Projects.</p>
                </div>

                <section className={estilos.principal_carrossel}>
                    <div className={estilos.projeto}>
                        <a href="">
                            <img className={estilos.pagina} src={pagina} alt="icone de pagina" />
                        </a>
                    </div>
                </section>
            </div>
        </section>

      </main>


      <footer id="contato">
        <section className={estilos.section_footer}>
            <div className={estilos.rodape}>
                <p className={estilos.titulo_footer}>Entre em Contato.</p>
                <p className={estilos.email}>kamilavitoria.contato@gmail.com</p>

                <p className={estilos.frase_final}>Da lógica do backend ao detalhe do design, desenvolvo soluções que unem inovação, estética e uma experiência de usuário memorável.</p>

                <p className={estilos.meunome}>Kamila V. de S. Cardozo</p>
                <p className={estilos.local}>São Paulo, Brasil</p>
                

                <div className={estilos.redes}>
                    <a href="https://github.com/CodeByKamis">
                        <img src={githubimg} alt="Link do meu GitHub pessoal" />
                    </a>

                    <a href="https://www.linkedin.com/in/kamila-vit%C3%B3ria/">
                        <img src={linkedin} alt="Link do meu Linkedin pessoal" />
                    </a>

                </div>             
            </div>
            
        </section>
      </footer>
    </>
  );
}
