// import logo from './logo.svg';
import './App.css';
import { HashRouter,Routes,Route } from 'react-router-dom';


function App() {

  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh',`${vh}px`)
  }  

  useEffect(() => {
    setVh()

    function onResize() {
      setVh()
    }

    window.addEventListener('resize', onResize)
  },[])

  const [page,setPage] = useState(0)

  const questionList = [
    {q:['질문1'],
    a: [{type: 'I',text: '답변1'},
        {type: 'E',text: '답변2'}]},
    {q:['질문2'],
    a: [{type: 'I',text: '답변3'},
        {type: 'E',text: '답변4'}]},
    {q:['질문3'],
    a: [{type: 'S',text: '답변5'},
        {type: 'N',text: '답변6'}]},
    {q:['질문4'],
    a: [{type: 'S',text: '답변7'},
        {type: 'N',text: '답변8'}]},
    {q:['질문5'],
    a: [{type: 'F',text: '답변9'},
        {type: 'T',text: '답변10'}]},
    {q:['질문6'],
    a: [{type: 'F',text: '답변11'},
        {type: 'T',text: '답변12'}]},
    {q:['질문7'],
    a: [{type: 'P',text: '답변13'},
        {type: 'J',text: '답변14'}]},
    {q:['질문8'],
    a: [{type: 'P',text: '답변15'},
        {type: 'J',text: '답변16'}]},
    {q:['테스트 끝. 결과 보러 갈래?'],
    a: [{type: '',text: '결과 보러 가기'}]}

  ]

  const [mbtiList, setMbtiList] = useState([
    {name:'I', count: 0},{name:'E', count: 0},{name:'S', count: 0},{name:'N', count: 0},
    {name:'F', count: 0},{name:'T', count: 0},{name:'P', count: 0},{name:'J', count: 0}
  ])

  const handleCheck = (type,idx) => {
    let ls = mbtiList
    for(let i = 0; i< ls.length; i++) {
      if(ls[i].name===type) {
        ls[i].count = ls[i].count+1
      }
    }
    setMbtiList(ls)
    setPage(page+1)
    if(idx+1 === questionList.length) {
      setMbti()
    }
  } 

  const [mbtiContents, setMbtiContents] = useState([])

  function setMbti() {

    let mc = [
      {mbti:'ENTP', contents: ['11111','2222222','3333333']},
      {mbti:'INTP', contents: ['11111','2222222','3333333']},
      {mbti:'ESFJ', contents: ['11111','2222222','3333333']},
      {mbti:'ESTP', contents: ['11111','2222222','3333333']},
      {mbti:'ISFJ', contents: ['11111','2222222','3333333']},
      {mbti:'ISTP', contents: ['11111','2222222','3333333']},
      {mbti:'ENFJ', contents: ['11111','2222222','3333333']},
      {mbti:'INFP', contents: ['11111','2222222','3333333']},
      {mbti:'ENTJ', contents: ['11111','2222222','3333333']},
      {mbti:'INTJ', contents: ['11111','2222222','3333333']},
      {mbti:'ENFP', contents: ['11111','2222222','3333333']},
      {mbti:'INFP', contents: ['11111','2222222','3333333']},
      {mbti:'ESFP', contents: ['11111','2222222','3333333']},
      {mbti:'ISFP', contents: ['11111','2222222','3333333']},
      {mbti:'ESTJ', contents: ['11111','2222222','3333333']},
      {mbti:'ISTJ', contents: ['11111','2222222','3333333']},
    ]

    let IorE = 
        mbtiList.find(function(data){return data.name=== 'I'}).count >
        mbtiList.find(function(data){return data.name=== 'E'}).count? 'I' : 'E'
    let SorN = 
        mbtiList.find(function(data){return data.name=== 'S'}).count >
        mbtiList.find(function(data){return data.name=== 'N'}).count? 'S' : 'N'
    let ForT = 
        mbtiList.find(function(data){return data.name=== 'F'}).count >
        mbtiList.find(function(data){return data.name=== 'T'}).count? 'F' : 'T'
    let PorJ = 
        mbtiList.find(function(data){return data.name=== 'P'}).count >
        mbtiList.find(function(data){return data.name=== 'J'}).count? 'P' : 'J' 
    let mbti = IorE+ SorN + ForT + PorJ
    
    setMbtiContents(mc.filter(val=>val.mbti ===mbti)[0])
        
  }

  return (
    <div className="mbtiLayout">
      {page===0?
        <div className='startPageLyout'>
          <div className='startLogo'>
          <img className="phoneImage" alt="iPhone_01" src="img/dragon5.png"/>
          </div>
          <p className='name1'>용용테스트</p>
         <div onClick={()=>setPage(1)} className='startButton'>시작하기</div>
        </div>
        :page <= questionList.length?
        <div className='questionLayout'>
          <div className='mbtiTitle'>
            <div> 용용 테스트</div>
            <div> {`${page} / ${questionList.length}`}</div>
          </div>

          {questionList.map((val,idx) => 
            <div className='questionList' style={{display:page===idx+1? 'flex' : 'none'}} key={idx}>
              {console.log(mbtiList)}
              <div className='qua'>
                <div className='profileImg'>
                  <div></div>
                  <div></div>
                </div>

                <div className='chatList'>
                  {val.q.map((qval,qidx)=>
                   <div key={qidx} className='chatBox'>
                    <div>◀</div> <div>{qval}</div>
                   </div>
                  )}
                </div>
              </div>
              <div className='answer'>
                <div className='aChatBox'>
                  <div>+</div> <div>#</div>
                </div>
                
                {val.a.map((aval,aidx)=>
                  <div key={aidx} className='answerBox' onClick={() =>handleCheck(aval.type,idx)}>
                    {aval.text}
                  </div>
                )}    
              </div>
            </div>
          )}
        </div>
        :
        <div className='questionLayout'>

          <div className='mbtiTitle'>
            <div> MBTI 테스트</div>
            <div onClick={() => window.location.reload()}>다시하기</div>

          </div>

          <div className='questionList' style={{display:'flex'}}>
            <div className='qua'>
              <div className='profileImg'>
                <div></div>
                <div></div>
              </div>

              <div className='chatList'>
                <div className='chatBox'>
                  <div>◀</div> <div>{mbtiContents.mbti}</div>
                </div>

                <div className='chatBox'>
                  <div>◀</div> <div>당신의 MBTI는 {mbtiContents.mbti}입니다</div>
                </div>

                <div className='chatBox'>
                  <div>◀</div> <div>{mbtiContents.mbti}는요</div>
                </div>

                {mbtiContents.contents.map((val,idx)=>
                  <div className='chatBox' key={idx}>
                    <div>◀</div> <div>{val}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      }
    </div>
  );
}

export default App;
