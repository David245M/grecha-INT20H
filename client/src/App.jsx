import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AppBar from './components/AppBar'
import useLazyRequest from './hooks/useLazyRequest'

const tabs = {
  bread: 'bread',
  buckwheat: 'buckwheat',
  butter: 'butter',
  egg: 'egg',
  milk: 'milk'
}

const RootComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #010120;
`
const Main = styled.main`
  padding-top: 120px;
  width: 100%;
  height: 100%;
  display: flex;
  place-items: center;
  place-content: center;
`

const Table = styled.table`
  min-width: 400px;
  table-layout: auto;
  border: 4px solid #CF00CF;
  box-shadow: 0 0 12px rgba(255,255,255, 0.25);
  color: white;
  border-spacing: 0;
  text-shadow: 0px 4px 4px rgba(131, 76, 76, 0.25), 0px 0px 10px rgba(139, 17, 215, 0.78);

  th, td {
    border: 1px solid #CF00CF;
    box-shadow: 0 0 12px rgba(255,255,255, 0.25);
    padding: 5px;
    text-align: center;
  }

`

const App= () => {
  const [tab, setTab] = useState(tabs.buckwheat)
  // const { get, data, loading, errors } = useLazyRequest('http://localhost:8090/api/product')

  // useEffect(() => {
  //   get({ productName: tab })
  // }, [tab])

  return (
    <RootComponent >
      <AppBar selected={tab} setSelected={setTab} />
      <Main>
        <Table border="1px">
          <thead>
            <tr>
              <th>Название</th>
              <th>Вес</th>
              <th>Цена</th>
              <th>Магазин</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Гречка</td>
              <td>800 г</td>
              <td>26.88</td>
              <td>Fozzy</td>
            </tr>
          </tbody>
        </Table>
      </Main>
    </RootComponent>
  )
}

export default App
export { tabs }