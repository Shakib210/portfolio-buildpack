import './App.css';
import NavBar from './Nav/NavBar';
import Header from './Header/header'
import Project from '../src/project'
import Skills from './Skills';
import { useRef } from 'react';

const HomePage=()=> {

  const projectRef=useRef(null)
  const gotoProject=()=>{
    projectRef.current.scrollIntoView() 
  }

  const skillRef=useRef(null)
  const gotoSkill=()=>{
    skillRef.current.scrollIntoView() 
  }

  return (
    <>
    <NavBar
       Projecthandler={gotoProject}
       skillHandler={gotoSkill}
    />
    <Header/>
    <Skills
      refe={skillRef}
    />
    <Project
       refe={projectRef}
    />
    
    </>
  );
}

export default HomePage;