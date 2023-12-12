import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import '../App.css'
import './mbti.css'
import logo from '../resource/myLogo.png'

 
const shareKakao = () => {
  window.Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '나의 용용 스타일은?',
      description: '친구와 대화하면서 나의 용용이를 알아보자!',
      imageUrl: logo,
      link: {
        webUrl : 'https://ahnhyeoungki.github.io/gragontest/',
        mobileWebUrl : 'https://ahnhyeoungki.github.io/gragontest/',
      },
    },
    buttons: [
      {
        title: '웹으로 이동',
        link: {
          webUrl : 'https://ahnhyeoungki.github.io/gragontest/',
          mobileWebUrl : 'https://ahnhyeoungki.github.io/gragontest/',
        },
      },
    ]
  })
}

const MbtiResult =  (()=> {

  const location = useLocation();
  const mbtiContents = location?.state?.contents!==undefined?
  location.state.contents:
  {mbti:'',img:'',animal:'',animal2:'',contents:['']}

  const navigate = useNavigate()
 
  const setOneVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setOneVh()

  useEffect(()=>{
    if(location?.state?.contents===undefined){
      navigate('../mbti')
    }
    setOneVh();

    function onResize(){ 
        setOneVh();
    }
    window.addEventListener('resize',onResize);
  },[])

  return (
    <div className='mbtiLayout'>
          <div className='questionLayout'>
              
              <div className='mbtiTitle'>
                <div>용용 테스트</div>
                <div onClick={()=>navigate(-1)} style={{cursor:'pointer'}}>
                    다시하기
                </div>
                
              </div>
              
              <div className='questionList' style={{display:'flex'}}>
                  
                  
                  <div className='questionItemLayout'>
                    <div className='qProfileImg'>
                      <div/> <div/>
                    </div>

                    <div className='chatListLayout'>
                      <div style={{width:'auto',height:'auto',backgroundColor:'#fff',borderRadius:10,margin:'5px 5px 15px 5px',}}>
                        <img src={mbtiContents.img} alt='' style={{width:130,height:130,marginTop:10}}/>
                        <div style={{padding:'0px 15px 0px 15px'}}>
                          {mbtiContents.animal}
                        </div>
                        <div style={{padding:'5px 5px 20px 5px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                          <div style={{fontWeight:700,fontSize:18}}>{mbtiContents.animal2}</div>
                          <div style={{marginLeft:2}}>유형</div>
                        </div>
                      </div>
                      <div className='qChatbox'>
                        <div>◀</div> <div>당신의 용용이는 '{mbtiContents.mbti}' 입니다.</div>
                      </div>
                      
 

                      <div className='qChatbox'>
                        <div>◀</div> <div>{mbtiContents.mbti}는요</div>
                      </div>

                      {mbtiContents.contents.map((val,idx)=>
                        <div className='qChatbox' key={idx}>
                          <div>◀</div> <div>{val}</div>
                        </div>
                      )}

                    </div>
                    </div>
                      <div className='answerItem'>
                        <div className='aChatbox'>
                        <div>+</div> <div>#</div>
                      </div>
                      <div className='answerBox' onClick={()=>shareKakao()}>친구한테 공유하기 </div>
                  </div> 

              </div>
          
            </div>
          
     

    
    </div>
  );
})

export default MbtiResult;
