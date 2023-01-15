import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '스타벅스 가야지';

  let [글제목, 글제목변경] = useState(['스타벅스', '투썸', '메가커피']); //()안에는 현재 상태를 나타냄
  let [좋아요, 좋아요증가] = useState(0);
  let [좋아요1, 좋아요증가1] = useState(0);
  let [좋아요2, 좋아요증가2] = useState(0);
  let [modal, setModal] = useState(false);

  [1,2,3].map(function(){ //array 갯수만큼 함수안의 코드를 실행해주는것.

  })

  function 함수() {

  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>StarBucks </h4>
      </div>
      
      {
        글제목.map(function(a,i) {
          return(
          <div className='list' key={i}>
              <h4 onClick={() => {setModal(true)}} >{ 글제목[i] } <span onClick={() => { 좋아요증가(좋아요+1) }}>❤️</span>{좋아요}</h4>
              <p>1월 15일 발행</p>
          </div>
          )
        })
      }
      

{/* 
      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>                                                                                                                                                                                                                                                                                                                                                  

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] ='아메리카노';
        글제목변경(copy);
      }}>글수정</button>
      
      <div className="list">
        <h4>{글제목[0]} <span onClick={() => {좋아요증가(좋아요+1)}}>❤️</span>{좋아요}</h4>
        <p>1월 15일 발행</p>
      </div>
      
      <div className='list'>
        <h4>{글제목[1]}<span onClick={() => {좋아요증가1(좋아요1+1)} }>❤️</span>{좋아요1}</h4>
        <p>1월 15일 발행</p>
      </div>
      

      <div className='list'>
        <h4 onClick={() => { setModal(!modal)}}>{글제목[2]}</h4>
       
        <p>1월 15일 발행</p>
      </div> */}

      {
      modal === true ? <Modal 글제목1={글제목}/> : null
    }
    
   
    </div>
  );
}
  function Modal(props) { //function 뒤 ()앞에것을 컴포넌트라고함(component)
    return (
      <div className='modal'>
        <h4> {props.글제목1}</h4>
        <p>날짜</p>
        <p>상세내용</p>
     </div>
    )
  }


export default App;