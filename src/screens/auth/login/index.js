/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import Header from '../../../components/header'
import { Column, Section, Title, Container, Card } from 'rbx';
import logoImage from '../../../assets/images/logo.png'
import '../../../styles/auth.scss'
import LoginForm from '../../../components/auth/login_form'
const LoginScreen = () => (
  <Fragment>
    <Header />
    <Section size="medium" className="auth">
      <Container>
        <Column.Group centered>
          <Column size={4}>
            <Card>
              <Card.Content>
                <Section>
                  <Column.Group centered>
                    <Column size={12}>
                      <img src={logoImage} />
                    </Column>
                  </Column.Group>
                  <Column.Group>
                    <Column size={12}>
                      <Title size={6} className="has-textgrey has-text-centered">
                        Suas Notas nas Nuvem
                      </Title>
                    </Column>
                  </Column.Group>
                  <LoginForm />
                </Section>
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </Fragment>
)
export default LoginScreen;