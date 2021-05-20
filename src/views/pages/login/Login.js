import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import translate from './../../../i18n/translate';
import { FormattedMessage } from 'react-intl';

const Login = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1 className="formTitle">{translate('login.login_title')}</h1>
                    <p className="text-muted">{translate('login.sign_in')}</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <FormattedMessage id="login.name.placeholder">
                        {
                          placeholder => {
                            return <CInput
                              type="text"
                              placeholder={placeholder}
                              autoComplete="username" />
                          }
                        }
                      </FormattedMessage>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <FormattedMessage id="login.password.placeholder">
                        {
                          placeholder => {
                            return <CInput
                              type="password"
                              placeholder={placeholder}
                              autoComplete="current-password" />
                          }
                        }
                      </FormattedMessage>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4">{translate('login.login_btn')}</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">{translate('login.forgot_password')}</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>{translate('login.sign_up')}</h2>
                    <p>{translate('login.infoText')}</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>{translate('login.register')}</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
