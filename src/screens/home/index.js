/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import presentationImage from '../../assets/images/presentation.png'
import Header from '../../components/header'
import { Column, Section, Title, Container } from 'rbx'
import '../../styles/home.scss'
import { Link } from 'react-router-dom'

const HomeScreen = () => (
  <Fragment>
    <Header />
    <Section size="medium" className="home">
      <Container>
        <Column.Group>
          <Column size={5}>
            <Title size={2} spaced className="has-text-white">
              O JavaScript Notes ajuda você a capturar notas e encontrá-las rapidamente.
            </Title>
            <Title size={5} spaced className="has-text-light" subtitle>
              <p>TRABALHE DE QUALQUER LUGAR </p><br></br>
              Mantenha informações importantes à mão ao sincronizar suas notas em todos os seus dispositivos.<br></br>
            </Title>
            <Title size={5} spaced className="has-text-light" subtitle>
              <p>SUAS NOTAS, DO SEU JEITO</p><br></br>
              Expresse a si mesmo com ferramentas de formatação que ajudam você a escrever como você pensa.<br>
              </br>
            </Title>
            <Link to='/register' className="button is-outlined is-white is-large">
              <strong>Cadastre-se Gratuitamente</strong>
            </Link>
          </Column>
          <Column size={6} offset={1}>
            <img src={presentationImage} />
          </Column>

        </Column.Group>
      </Container>
    </Section >

  </Fragment >
)

export default HomeScreen