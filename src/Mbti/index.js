import { useEffect, useState } from 'react'
import './mbti.css'
import { useNavigate } from 'react-router-dom';
import ENTP from '../resource/imge/ENTP.svg'
import INTP from '../resource/imge/INTP.svg'
import ESFJ from '../resource/imge/ESFJ.svg'
import ESTP from '../resource/imge/ESTP.svg'
import ISFJ from '../resource/imge/ISFJ.svg'
import ISTP from '../resource/imge/ISTP.svg'
import ENFJ from '../resource/imge/ENFJ.svg'
import INFJ from '../resource/imge/INFJ.svg'
import ENTJ from '../resource/imge/ENTJ.svg'
import INTJ from '../resource/imge/INTJ.svg'
import ENFP from '../resource/imge/ENFP.svg'
import INFP from '../resource/imge/INFP.svg'
import ESFP from '../resource/imge/ESFP.svg'
import ISFP from '../resource/imge/ISFP.svg'
import ESTJ from '../resource/imge/ESTJ.svg'
import ISTJ from '../resource/imge/ISTJ.svg'
import logo from '../resource/myLogo.svg'
import icKakao from '../resource/icKakao.svg'
import icLink from '../resource/icLink.svg'

const Mbti =  (()=> {

  const setOneVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setOneVh()

  useEffect(()=>{
    setOneVh();

    function onResize(){ 
        setOneVh();
    }
    window.addEventListener('resize',onResize);
  },[])

 


  const navigate = useNavigate()
  const [page,setPage] = useState(0)
  const [mbtiContents,setMbtiContents] = useState([])
  const [mbtiList,setMbtiList] = useState([
    {name:'I',count:0},{name:'E',count:0},{name:'S',count:0},{name:'N',count:0},
    {name:'F',count:0},{name:'T',count:0},{name:'P',count:0},{name:'J',count:0}
  ])
  const handleEdd = () => {
    window.open('https://link.coupang.com/a/bjcAMz')
    navigate('./mbtiResult',{state:{contents:mbtiContents}})
  }


  const questionList = [
    {q:['2024년 1월 나의 모습은?'],
    a:[{type:'E',text:'만나지 못한 친구들과 신년회 약속으로 보낸다'},{type:'I',text:'새로운 한 해 시작이다! 시간을 가지며 에너지를 충전한다.'}]},
      
    {q:['여행에서 선호하는 유형이 있다면?'],
    a:[{type:'E',text:'아쉽지 않게 여행지 구석구석을 돌아다니기! '},{type:'I',text:'조용한 숙소에서 우리끼리 휴식 취하기!'}]},      
   
    {q:['일에 대한 고민이 생겼다, 나는 누구에게 고민 상담을 할까?'],
    a:[{type:'E',text:'내가 생각지도 못한 결과물이 나올 수 있기에 여러명에게 고민 상담을 최대한 한다.'},{type:'I',text:'아주 가까운 친구 1명에게만 고민 상담을 한다.'}]},
      
    {q:['2024년 친구들과 일출을 보러 간 나의 모습은?'],
    a:[{type:'T',text:'오늘 해는 7시 25분에 뜬다고 했어! 사진 찍어서 SNS에 올려야지! '},{type:'F',text:'1년이라는 시간을 참 길었구나.. 올해에는 무슨 소원을 빌지?'}]}, 
   
    {q:['연인의 생일 날이 돌아온다 나는?'],
    a:[{type:'J',text:'전에 얘기 했었던 연인이 원했던 선물로 찾아보고 있어.'},{type:'P',text:'빽을 살까? 아 아이패드 살까? 오 이 옷도 이쁜데?'}]},
       
    {q:['친구들과 새해 모임통장을 하기로 하였다! 가장 먼저 하고 싶은 일은?'],
    a:[{type:'S',text:'누구 계좌에 각자 얼마를 넣을지 먼저 얘기한다. '},{type:'N',text:'모임 통장으로 앞으로 어떻게 쓸 것인지 먼저 얘기한다.'}]},
     
    {q:['2024년의 새 프로젝트를 시작한다. 프로젝트 방향을 설정 할 때 나는?'],
    a:[{type:'N',text:'미래에 유행할 것 같은 아이디어를 생각한다.'},{type:'S',text:'지금 유행하는 것을 프로젝트 방향을 정한다.'}]},
      
    {q:['2024년 애인이 나를 위해 새해 이벤트를 준비했다면 그에 대한 나의 반은은?'],
    a:[{type:'T',text:'고마워 요즘 바쁠 텐데 언제 이런 걸 생각했어? '},{type:'F',text:'사랑해 최고야 너밖에 없어 나 정말 감동했어...'}]},
   
    {q:['연인과 싸운 나 친구들에게 애인에 대한 불만을 친구들에게 어떻게 또로했을까?'],
    a:[{type:'F',text:'내 마음을 몰라주네~ 내가 이런 마음은 왜 몰라?ㅠㅠ '},{type:'T',text:'문제가 있을 때 어떤 문제인지 해결해줬는데 왜 화는거야?'}]},
      
    {q:['2024년 신년 계획을 세워본다면 나는?'],
    a:[{type:'J',text:'1월부터 12월까지 월단위로 계획을 세운다'},{type:'P',text:'언제까지 “이건 꼭 해야지” 정도의 기한만 정해둔다'},]},
   
    {q:['내일 SNS명소를 가기로 약속했다. 내일 입을 옷을 고를 때의 나의 선택은?'],
    a:[{type:'J',text:'전날에 머리부터 발끝까지 세팅해둔다.'},{type:'P',text:'나가기 직전 마음에 드는 옷을 입는다.'}]},
   
    {q:['2024년 어느 날, 갑자기 오늘 밤에 세상이 멸망한다고 하면 오늘 하고 싶은 데이트는?'],
    a:[{type:'S',text:'지금까지 지냈던 추억들이 소중해! 소소하게 평소처럼 보낸다. '},{type:'N',text:'지금까지 못해봤던 거! 시도해 보지 않았던 특별한 데이트로 꽉꽉 채운다!'},]},

       
  ]


  const handleCkAnswer = (idx,vv) => { 
    let ls = mbtiList

    for(let i = 0; i < ls.length; i++) {
      if(ls[i].name === vv){ 
        ls[i].count = ls[i].count + 1
      }
    }
 
    setMbtiList(ls)
    setPage(page+1)

    if(idx+1===questionList.length){
      setMbti()
    } 
  } 
 

  function setMbti() {
    let ls = mbtiList
    let mc = [
      {mbti:'ENFP',img:ENFP,animal:'솔직하고 단호한',animal2:'안돼용',contents:['인간관계에서 삶의 에너지와 활력을 얻기 때문에 대인관계를 중요하게 생각해요','안정적인 영역을 넘어 모험하는 것을 두려워하지 않아요','감정에 솔직해서 감정 변화가 얼굴에 그대로 나타나요','겉모습은 밝지만 자신만의 깊은 내면을 가지고 있어요','눈치가 마하 급을 빨라 그 상황을 빠르게 파악해요','새로운 도전하는 거 좋아하지만 쉽게 질려 새로운 것을 찾아요','반복되는 일상에는 흥미를 느끼지 못하고 열정도 없어요','인생을 재미있고 다채롭게 살고 싶어요','넓은 스펙트럼의 관심사를 가지고 있어요']},

      {mbti:'ENFJ',img:ENFJ,animal:'노는게 가장 좋은',animal2:'노라용',contents:['감정 표현이 직설적이고 솔직해요(자기주장이 강해요)','자기 자신을 신뢰하면 인생을 살아요','감성팔이 절대 안 먹히는 단호박 중에 단호박이예요','일 처리를 확실하고 완벽하게 하는 편이예요','일 못하고 무능한 것을 싫어해 내가 답답해서 그냥 내가 해요','내 일은 내 일 니 일은 니 일이예요','남이 이래라 저래라 하는 것을 극혐해요','은혜는 10배로 원수는 100배로 되값아줘요','열등감을 잘 느끼지 않아 세상 별의별 욕 다 들어도 별로 타격 없어요']},
      
      {mbti:'ENTJ',img:ENTJ,animal:'솔직하고 단호한',animal2:'안돼용',contents:['인간관계에서 삶의 에너지와 활력을 얻기 때문에 대인관계를 중요하게 생각해요','안정적인 영역을 넘어 모험하는 것을 두려워하지 않아요','감정에 솔직해서 감정 변화가 얼굴에 그대로 나타나요','겉모습은 밝지만 자신만의 깊은 내면을 가지고 있어요','눈치가 마하 급을 빨라 그 상황을 빠르게 파악해요','새로운 도전하는 거 좋아하지만 쉽게 질려 새로운 것을 찾아요','반복되는 일상에는 흥미를 느끼지 못하고 열정도 없어요','인생을 재미있고 다채롭게 살고 싶어요','넓은 스펙트럼의 관심사를 가지고 있어요']},
      
      {mbti:'ENTP',img:ENTP,animal:'돌격이닷!',animal2:'나폴래용',contents:['말이 너무 많아요', '한번 토론하면 3시간은 기본이예요','하고 싶은 것은 꼭 해야하고, 갖고 싶은 것은 꼭 가져야 직성이 풀려요','겉으로 보이는 모습과 다르게 은근 여린 마음을 가지고 있어 쉽게 상처받아요','내 마음을 표현하는 것에 있어 거리낌이 없어요','환불, 컴플레인 같은 거를 잘함 말싸움 진짜 잘해요','공감 능력은 있지만 논리적으로 납득이 안가면 공감이 안되요','인터넷 유행어를 너무 많이 써서 넷팡인이란 소리 듣고 다녀요','다양한 분야의 지식을 넓게 알고 있어요','인생에 변화가 없으면 지루해서 살 수가 없어요']},
      
      {mbti:'ESFJ',img:ESFJ,animal:'공감 박사',animal2:'마자용',contents:['인간관계가 틀어지면 하루 종일 스트레스 받아요','사람과의 관계가 가장 우선으로 생각해 자체 필터링을 통해 불편한 말을 안해요','사랑하는 사람을 챙겨주는 것을 좋아해요','리액션 자판기라서 그냥 누르기만 하면 나와요','모임의 중심이어야 행복함을 느껴요','계획을 많이 짬 그 계획이 틀어지면 힘들어해요','사람들 관계 속에서 중재자 역할을 잘해요','주변 사람들의 말에 따라 하루의 기분이 달라져요','칭찬을 해주면 능력이 극대화되요']},
      
      {mbti:'ESFP',img:ESFP,animal:'사랑 폭발',animal2:'사랑해용',contents:['주변 사람이나 주변 상황에 대해 관심이 많아요','절친들에게만 개인적인 감정을 드러내요','책보단 경험을 통해 배움을 얻는 것에 더 적극적이고 즐거움을 추구하는 경향이 있어요','텐션이 높고 흥이 많아서 관종이라는 말을 잘 들어요','사랑하는 사람에게 뭐든지 다해주고 싶어해요','해야 할 일을 미루고 하고 싶은 일부터 먼저해요','성격이 급해서 가끔 보면 불도저급으로 일도 사랑도 해요','본인의 이야기를 상대방에게 잘 털어 놓어요','집에 있는 것보다 밖에 나가서 노는 것을 더 선호해요']},
      
      {mbti:'ESTJ',img:ESTJ,animal:'담백함이 매력인',animal2:'노력해용',contents:['하루라도 잔소리를 안 하면 입에 가시 돋아요','목표를 설정하면, 이룰 때까지 한 우물만 파서 그 분야의 탑이되요','싸움을 싫어하지만, 싸운다면 어디서 맞고 다니지 않아요','자신만의 방식으로 살아가려고 노력해요','논리적이고 분석적여서 그 상황을 분석하는 것을 좋아해요','팩폭하는 젊은 꼰대이예요','프로젝트를 계획하고 내가 맡은 일은 끝까지 하는 스타일이예요','시간 약속을 엄청 중요하게 생각해서 내가 늦는거 절대 허용금지예요','리더 역할을 먼저 할려고 하지는 않지만 막상 하면 잘해요']},
      
      {mbti:'ESTP',img:ESTP,animal:'불도저 일단',animal2:'질러용',contents:['하고 싶은 일은 꼭해야해요','모르는 사람과도 5분 만에 절친이 되는 핵인싸예요','남의 눈치를 보지 않고 애정표현이나 스킨십도 적극적인 표현을 잘해요','얽매이기 싫어하는 자유영혼의 소유자예요','자기애도 강하고 자신감이 항상 철철 넘쳐요','경쟁하는 거 좋아하고 승부욕이 강해 1등을 꼭 해야 해요','잔머리 잘 굴리고 돌직구 잘 던져요','돈 쓰는게 너무 재밌어요(사고 싶은게 있으면 바로사요)','웃기도 잘하지만 화도 잘냄 걸리면 뼈도 못추려요']},
      
      {mbti:'INFJ',img:INFJ,animal:'배려심 많은',animal2:'부끄러워용',contents:['자기 속마음 절대 말을 하지 않아 비밀이 너무 많아요','고민 진짜 잘 들어주는데 남에게 자기 얘기는 안 하는 편이예요','말 한마디나 행동 하나하나에 의미 부여를 많이해요','속으론 행복해 해도 겉은 차갑게 반응하는 부끄럼쟁이예요','사람의 인상이나 대화를 통해 사람에 대한 파악이 빨라요','다 같이 노는 것보단 단둘이 노는 거 선호해요','나의 내면을 간파하고 이해해주는 사람을 만나면 그 사람에게 모든 것을 오픈해요','계획은 엄청 잘 세우는 데 막상 실천은 못할 경우가 많아요','실수했던 사건이나 경험이 머리 속에서 안떠나요']},
      
      {mbti:'INFP',img:INFP,animal:'망상가',animal2:'상상해용',contents:['배려 있는척하지만 사실은 자기중심적이예요','온종일 망상에 빠지는 일이 좋아해 하루 종일 상상 할 수 있어요','행복할 일, 싸울 일, 우울할 일을 그 상황을 미리 상상하고 기뻐하고 걱정해요','좁고 깊은 인간관계를 선호해 20년지기 이상이예요','조용한 관종 st 은근 명예욕을 관심이 있어요','감정 기복이 있는 편이라 의심이 많은 편이예요','다른 사람을 도와야 한다는 사명감과 책임감 강해요','지나가기만 해도 그 상황 속에서 망상을 많이 해요','아이디어가 많으나 실행에 옮기지 못해 아쉬워해요']},
      
      {mbti:'INTJ',img:INTJ,animal:'자존감 뿜뿜',animal2:'자기만족해용',contents:['다수보다는 소수로 만나는 것을 좋아해 1:1로 많이 대화해요','하루를 초 단위로 계산해서 계획을 세울 정도로 철두철미해요','머릿속에서 수없이 시뮬레이션 돌려보는 거 좋아해요','자기 기대에 미치지 못하는 사람에게 관심 1도 없어요','개그코드가 남들과 달라 나만 재밌으면 아주 좋아해요','본인에 대한기준이 너무 높아요','누가 나랑 비꽂는 말을 하면 혐오해 하고 인간관계를 손절해요','자기계발을 많이 하는 편이라 성취감이 삶의 원동력으로 작용해요','혼자 하는 일을 잘해서 혼자 내버려두면 알아서 성과를내요']},
      
      {mbti:'INTP',img:INTP,animal:'사랑에 약하지만',animal2:'만능이지용',contents:['공감 할 필요가 없다고 느끼지만 본인은 최강 공감러라고 생각해요','다른 사람 고민 들어주는척하지만 속으론 다른 생각을 함 인간관계 계산적이예요','자기가 원하는 것이 아니면 애초에 관심이 없어요','싫어하는 사람이 너무 명확함, 멍청하고 논리력 없는 사람 극혐해요','건설적인 대화 좋아하고 부지런쟁이여서 자기 계발에 힘쓰는 편이예요','본인 욕구에 지극히 열정적으로 충실한 편이예요','감정적이지 않은 편이지만 감성적인 면도 더러 있어요','관심사가 한번 꽂히면, 전문가 수준의 지식을 가질 정도로 깊게 파고들어요','표현력은 떨어지지만 마음씨는 따뜻한 로봇이예요']},
      
      {mbti:'ISFJ',img:ISFJ,animal:' 난 항상',animal2:'조심스러워용',contents:['처음 만난 사람에 대한 파악이 빨라 대화를 잘해요','굉장히 사려 깊고 이타적이어서 헌신이 기본 매너를 갖췄어요','기분에 따라 행동하는 사람을 정말 싫어해요','내가 원하는 것에 계획적이지만 원하지 않으면 무계획이예요','진짜 내 편인 사람이라는 생각이 들면 모든지 다 해줘요','인간관계에 굉장히 상처를 많이 받아서 조심스러운 면이 있어요','인사 중에서 아싸, 아사 중에서 인싸이예요','인간관계에서 자신만의 선이 딱있어서 그 선을 넘으면 손절해요','한번 마음에 안들면 영원히 마음에 안들어요']},
      
      {mbti:' ISFP',img: ISFP,animal:'그럴 수도 있겠다',animal2:'그러쿤용',contents:['게으르고 집에 있으면 누워있는 시간이 많아요','집돌, 집순이 모든 일이 귀찮아서 가끔 연애도 귀찮아해요','사람들 사이에서는 빛과 소금 같은 성격으로 공감능력이 아주 높아요','속마음을 드러내지 않고 불만을 쌓아두는 경우가 있어요','분쟁이나 갈등 상황을 싫어해서 웬만한 일은 그냥 넘어가는 편이예요','한 번 칭찬받으면 하루 종일 그 생각으로 기분 좋아해요','배려심은 많은데 내가 원하는 게 있으면 개인주의 면이 있어요','일을 미룰 수 있을 때까지 미루는데 신기하게 기간까지 끝내 놓아요','싫은 티를 크게 내지 않고 내가 왜 싫어했는지 지나가는 편이예요']},
      
      {mbti:'ISTJ',img:ISTJ,animal:'제가 많이',animal2:'느려용',contents:['다른 사람과의 소통에 능숙하지 못함 융통성이 없어요','모든 일을 할 때 체계적으로 진행하는 스타일이예요','친해지려면 충분한 시간이 필요해요','리액션 고장 나서 표현에 서툴러 감정을 숨기는게 어려움을 느껴요','조용한데 조용함을 즐기는 편이예요','모든 일을 냉정하고 객관적으로 바라보는 경향 있어요','계획과 틀이 잡혀 있는 것을 좋아해요','자기 사람이 아닌 사람에게는 말을 아낌 친한 사람에게는 말이 많아요','일에 대한 책임감이 강해 스스로 스트레스를 많이 받아요']},
      
      {mbti:'ISTP',img:ISTP,animal:'뭐든지 무엇이든',animal2:'다잘해용',contents:['누가 시키지 않아도 혼자서 뭐든 척척해내는 척척박사예요','연애도 인생도 일관성 있게 "마이웨이"이예요','내 사람이 되었다고 생각하면 박찬호급 투 머치 토커예요','쓸데없는 것에도 의외로 계획적으로 하는 편이예요','세상만사가 귀찮음. 새로운 사람 만나면 무미건조하고 시크해요','일할 때 필요한 대화가 아니면 대화를 안하고 묵묵히 내 할 일을해요','미움받을 용기가 너무 과해 할 말은 하고 살아요','남의 시선을 신경을 크게 안써 생각보다 인간관계로 스트레스 잘 안 받아서 편해요','뭐든 한 번 꽂히면 질릴 때까지 끝까지 밤을 세워가면서 해요']},
      

 
    ]

 


    let IorE = ls.find(function(data){return data.name === 'I'}).count > ls.find(function(data){return data.name === 'E'}).count?'I':'E'
    let SorN = ls.find(function(data){return data.name === 'S'}).count > ls.find(function(data){return data.name === 'N'}).count?'S':'N'
    let ForT = ls.find(function(data){return data.name === 'F'}).count > ls.find(function(data){return data.name === 'T'}).count?'F':'T'
    let PorJ = ls.find(function(data){return data.name === 'P'}).count > ls.find(function(data){return data.name === 'J'}).count?'P':'J'
     
    let mbti = IorE+SorN+ForT+PorJ

 
    setMbtiContents(mc.filter(val=>val.mbti===mbti)[0])
 
    
  }

 
  function linkCopy(){
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = 'https://ahnhyeoungki.github.io/dragontest/';
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("링크가 복사되었습니다. 필요하신 곳에 붙여넣기 하세요!")
 };

const shareKakao = () => {
  window.Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '나의 용용 스타일은?',
      description: '친구와 대화하면서 나의 용용이를 알아보자!',
      imageUrl: logo,
      link: {
        webUrl : 'https://ahnhyeoungki.github.io/dragontest/',
        mobileWebUrl : 'https://ahnhyeoungki.github.io/dragontest/',
      },
    },
    buttons: [
      {
        title: '웹으로 이동',
        link: {
          webUrl : 'https://ahnhyeoungki.github.io/dragontest/',
          mobileWebUrl : 'https://ahnhyeoungki.github.io/dragontest/',
        },
      },
    ]
  })
}


  return (
    <div className='mbtiLayout'>

        {page===0?
          //시작화면
          <div className='startPageLayout'>
            <div style={{height:130,minHeight:130,maxHeight:130}}/>

            <div  className='startItem'>
              <img className="phoneImage" alt="iPhone_01" src="img/dragonLogo.gif"/>
              <p className='name1' onClick={()=>setPage(1)}>용용테스트</p>
              <div onClick={()=>setPage(1)} className='startButton'>시작하기</div>

            </div>
            <div style={{maxHeight:130,height:130,paddingBottom:20,boxSizing:'border-box'}}>
              
                <img src={icKakao} onClick={()=>shareKakao()}  style={{width:50,height:'auto',margin:'0px 9px 0px 9px'}} alt=''/>            
                <img src={icLink} onClick={()=>linkCopy()}  style={{width:50,height:'auto',margin:'0px 9px 0px 9px'}} alt=''/>

            </div> 
            <div style={{height:50,minHeight:50,maxHeight:50,}}>
              제작 : 용용이마스터
            </div>

            <div style={{height:30,minHeight:30,maxHeight:30,}} onClick={()=>handleEdd()} >
              쿠팡의 수수료로 운용이 됩니다
            </div>
          </div>
          :
          //진행화면
          page<=questionList.length?
            <div className='questionLayout'>
              
              <div className='mbtiTitle'>
                <div>용용 테스트</div>
                <div>{`${page} / ${questionList.length}`}</div>
              </div>
            
              {questionList.map((val,idx)=>
                  <div key={idx} className='questionList' style={{display:page===idx+1?'flex':'none'}}>
                    
                    <div className='questionItemLayout'>
                      <div className='qProfileImg'>
                        <div/> <div/>
                      </div>

                      <div className='chatListLayout'>
                        {val.q.map((qval,qidx)=>
                        <div className='qChatbox' key={qidx}>
                          <div>◀</div> <div>{qval}</div>
                        </div>
                        )}
                        
                      </div>
                    </div> 
                    <div className='answerItem'>
                      <div className='aChatbox'>
                        <div>+</div> <div>#</div>
                      </div>
                      {val.a.map((aval,aidx)=>
                        <div key={aidx} className='answerBox' onClick={()=>handleCkAnswer(idx,aval.type)}>
                          {aval.text}
                        </div>
                      )}
                    </div>
                  </div>
                )
              }
        
            </div>
            :
            //결과화면
            <div className='questionLayout'>
              
              <div className='mbtiTitle'>
                <div>용용 테스트</div>
              </div>
              
              <div className='questionList' style={{display:'flex'}}>
          
                <div className='questionItemLayout'>
                  <div className='qProfileImg'>
                    <div/> <div/>
                  </div>
                  <div className='chatListLayout'>
                    <div style={{width:220,height:66,position:'relative',overflow:'hidden',margin:'0px 5px 10px 5px'}}>
                        
                        <img onClick={()=>handleEdd()} style={{position:'absolute',width:'224px',height:'70px',left:-2,top:-2,}}
                            src="https://ads-partners.coupang.com/banners/662644?subId=&traceId=V0-301-879dd1202e5c73b2-I662644&w=320&h=100" alt=""/>
                  
                    </div>

                    <div className='qChatbox' onClick={()=>handleEdd()} >
                      <div>◀</div> <div>쿠팡 보고 결과 확인하기</div>
                    </div>

                    <div className='qChatbox'>          
                      <div>◀</div> <div>* 쿠팡 파트너스 활동의 일환으로 이에 따른 일정액의 수수료를 제공받습니다.</div>
                    </div>

                    <div className='qChatbox'>          
                      <div>◀</div> <div>* 원치 않을 경우 뒤로가기를 눌러주세요.</div>
                    </div>
                    
                  </div>
                </div> 
                
                <div className='answerItem'>
                  <div className='aChatbox'>
                    <div>+</div> <div>#</div>
                  </div>
                  <div className='answerBox' onClick={()=>handleEdd()}>
                      쿠팡 보고 결과 확인하기  
                  </div>
                </div>

              </div>
          
            </div>
          }
      </div>
  );
})

export default Mbti;