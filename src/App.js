import './App.css';
import { useState } from 'react';

function App() {
  const [pass,setpass]=useState('');
  const [min,setMin]=useState(1);
  const [sec,setSec]=useState(59);
  const [timeId,setTimeId]=useState(0);

  if(min==0 &&sec==0){
    if(pass!=''){
      setpass(pre=>'');
      setTimeout(()=>{alert('you exhausted TIME LIMIT !')},1000)
    }
    clearInterval(timeId);
  }
  else if(sec==0){
    setMin(nmin=>nmin-1)
    setSec(59)
  }

  const addTime=()=>{setSec(nsec=>nsec-1);}
  
  
  const submit=(e)=>{
    e.preventDefault();
    const password=e.target['0'].value;
    if(password=='1234'){
      setpass('true');
      setTimeId(setInterval(addTime,1000))
    }else setpass(pre=>'false');
  }

const logout=()=>{
  setpass(pre=>'');
  setTimeout(()=>{
    alert(`You Took    ${1-min}min : ${60-sec}sec   to complete !!`)
  },1000)
  clearInterval(timeId);
}

  return (
    <div className="App">
      <div className='nav-bar'>Login Page </div>
      <div className={(pass=='true')?'blockDisplay fullOpacity loggedIn ':'loggedIn nullOpacity noneDisplay'}>
        successfully logged in ....
        <div className={'logout-wrapper'}>
          <button className='logout' onClick={logout}>close</button>
        </div>
        <div className='timeLeft-wrapper'>
            <div className={'displayTime-wrapper'}>
              <div className='displayTime'>{(min<10)?`0${min}`:min}:{(sec<10)?`0${sec}`:sec}</div>
            </div>
            <div className={(pass=='true')?'time animat':'time'}></div>
        </div>
      </div>
      <div className='loginPage'>
          <div className={(pass=='true')?'login-wrapper pass-login-wrapper nullOpacity':'login-wrapper'}>
            <form className='login-form' onSubmit={(e)=>{submit(e)}}>
              <i className={(pass=='false')?'fas fa-fingerprint red':'fas fa-fingerprint'}></i>
              <br/>
              <p className={(pass=='false')?'red blockDisplay':' '}>WRONG PASSWORD</p>
              <label>Enter your pilearning password</label>
              <input type='password' className='password'></input><br/>
              <input type='submit' value={'ENTER LAB'} className='submit'></input>
            </form>
          </div>
          <div className={(pass=='true')?'leftDoor goleft':'leftDoor'}></div>
          <div className={(pass=='true')?'rightDoor goright':'rightDoor'}>
          </div>
      </div>
    </div>
  );
}

export default App;
