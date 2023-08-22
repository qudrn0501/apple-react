import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);


  // 숙제: 따봉갯수 개별로 기록하기
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>
      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉 + 1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p> 
        
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal)}}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      
      <button onClick={()=>{
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
      }}>제목 변경</button>
      <button onClick={()=>{
          let array = [...글제목];
          array = array.sort();
          글제목변경(array)
      }}>가나다순 정렬</button>

      {
        modal == true ? <Modal/> : null
      }
      {
        글제목.map(function(a, i){
          return (
            <div className='list'>
              <h4>{글제목[i]} 
                <span onClick={()=>{
                  let copy따봉 = [...따봉];
                  copy따봉[i] = copy따봉[i] + 1;
                  따봉변경(copy따봉);
                }}>👍</span> {따봉[i]} 
              </h4>
              <p>2월 17일 발행</p> 
            </div> 
          )
        })
      }
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}



export default App;
