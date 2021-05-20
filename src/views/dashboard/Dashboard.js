import React from 'react'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';

import MainChartExample from '../charts/MainChartExample.js'

import { useSelector, useDispatch } from 'react-redux'
import translate from './../../i18n/translate';
import { FormattedMessage } from 'react-intl';

import DashboardFooter from './DashboardFooter'

const Dashboard = () => {
  const dispatch = useDispatch();
  const charts = useSelector(state => state.charts);

  React.useEffect(() => {

  });

  return (
    <>
      <CCard>
        <button
          type="button"
          className="addChartBtn"
          onClick={() => dispatch({ type: 'add-chart' })}>
          {translate('add_chart')}
        </button>
        <div className='grid'>
          {
            charts.map((i, idx) => {
              return (
                <CCardBody key={idx}>
                  <CRow>
                    <CCol sm="7">
                      <FormattedMessage id="chart.input.placeholder">
                        {
                          placeholder => <input value={i.chartTitle} maxLength="15" onChange={
                            e => dispatch({ type: 'find-chart', chartTitle: e.target.value, id: i.id })
                          } className="card-title mb-0 chartTitle" placeholder={placeholder} />
                        }
                      </FormattedMessage>
                      <div className="small text-muted">{translate('months.may')} 2021</div>
                    </CCol>
                    <CCol sm="5" className="d-none d-md-block cloudDownloadBtnGroup">
                      <div className="row mr-1">
                        <CButton color="primary" className="mr-2">
                          <CIcon name="cil-cloud-download" />
                        </CButton>
                        <CButton color="primary" className=""
                          onClick={() => dispatch({ type: 'remove-chart', id: i.id })}>
                          <CIcon name="cil-x" />
                        </CButton>
                      </div>
                      <CButtonGroup className="mt-2 mr-1">
                        <CButton
                          color="outline-secondary"
                          className="mx-0 btn"
                          active={i.day}
                          onClick={() => dispatch({ type: 'set-chart-day', id: i.id })}
                        >
                          {translate('day')}
                        </CButton>

                        <CButton
                          color="outline-secondary"
                          className="mx-0 btn"
                          active={i.month}
                          onClick={() => dispatch({ type: 'set-chart-month', id: i.id })}
                        >
                          {translate('month')}
                        </CButton>

                        <CButton
                          color="outline-secondary"
                          className="mx-0 btn"
                          active={i.year}
                          onClick={() => dispatch({ type: 'set-chart-year', id: i.id })}
                        >
                          {translate('year')}
                        </CButton>
                      </CButtonGroup>
                    </CCol>
                  </CRow>
                  <MainChartExample id={i.id} charttype={i.chartType}
                    style={{ minHeight: '200px', marginTop: '40px' }}
                    className="mr-1" />
                </CCardBody>
              )
            })
          }
        </div>
        <DashboardFooter />
      </CCard>
    </>
  )
}

export default Dashboard
