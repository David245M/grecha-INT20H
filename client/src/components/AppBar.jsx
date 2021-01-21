import React from 'react'
import styled from 'styled-components'
import { tabs } from '../App.jsx'
import { ReactComponent as Bread} from '../icons/bread.svg'
import { ReactComponent as Buckwheat} from '../icons/buckwheat.svg'
import { ReactComponent as Butter } from '../icons/butter.svg'
import { ReactComponent as Egg } from '../icons/egg.svg'
import { ReactComponent as Milk } from '../icons/milk.svg'

const Header = styled.header`
  width: 100%;
  height: 120px;
  border-bottom: 3px #766AFF solid;
  position: fixed;
  top: 0;
  background-color: #010120;

  display: flex;
  place-content: center;

  & > div {
    height: 100%;
    width:60%;
    display: flex;
    justify-content: space-evenly;
    place-items:center;
  }

  .choosen {
    filter: drop-shadow( 0px 0px 20px rgba(255, 255, 255, 1));
  }
`

const AppBar = ({ selected, setSelected }) => {
  return (
    <Header>
      <div>
        <Buckwheat 
          className={selected === tabs.buckwheat ? 'choosen' : '' }
          onClick={() => setSelected(tabs.buckwheat)}
        />
        <Bread 
          className={selected === tabs.bread ? 'choosen' : '' }
          onClick={() => setSelected(tabs.bread)}
        />
        <Butter 
          className={selected === tabs.butter ? 'choosen' : '' }
          onClick={() => setSelected(tabs.butter)}
        />
        <Egg 
          className={selected === tabs.egg ? 'choosen' : '' }
          onClick={() => setSelected(tabs.egg)}
        />
        <Milk 
          className={selected === tabs.milk ? 'choosen' : '' }
          onClick={() => setSelected(tabs.milk)}
        />
      </div>
    </Header>
  )
}

export default AppBar
