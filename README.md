# 이명재
## 23.03.30 5주차  
### 학습내용  
### 4장 엘리먼트 렌더링  

- 엘리먼트의 정의  
  리액트 앱을 구성하는 요소이며, 리액트앱의 가장 작은 빌딩블록들이다.  
  웹사이트는 DOM 엘리먼트(전부를 가지고있어 무겁다)이며 HTML요소를 의미한다.  
  리액트 엘리먼트는 Virtual Dom 형태이며 변화된 부분만 갖고 있어 가볍다.  

- 엘리먼트의 생김새  
  자바스크립트의 객체형태로 존재한다.  
  이 객체는 마음대로 변경할수 없는 불변성을 가지고있다.   
  내부적으로 자바스크립트 객체를 만드는 역할을 하는 함수가 createElement() 이다.  

- 앨리먼트의 특징  
  불변성(엘리먼트 생성 후에는 Children이나 attributes를 바꿀수 없다.)  
  만약에 내용이 바뀐다면 새로운 엘리먼트를 생성하고 그 다음에   
  이전 엘리먼트와 교체를 하는 방법을 이용하여 내용을 바꾼다. 그렇기에 Virtual Dom을 사용.  
  
- 엘리먼트 렌더링하기  
  render() 함수(리엑트 엘리먼트를 HTML엘리먼트에 렌더링하는 역할)를 사용한다.  
  렌더링되는 과정은 Virtual DOM에서 실제 DOM으로 이동하는 과정이다.  

- 렌더링 된 엘리먼트 업데이트하기  
  엘리먼트를 업데이트려면 변경이 불가한 것으로써 다시 생성해야한다.  
  기존 엘리먼트를 변경하는것이 아니라 새로운 엘리먼트를 생성해서 바꿔치기하는것이다.  
  *워킹 디렉토리 'babeltest'폴더에 html파일을 간단하게 react,babel을 임포트해서 사용하는 파일 생성 참조*  

- 시계 만들기  
  *chpater_04, index.js 참조*  

### 5장 컴포넌트와 props  

- 리액트 컴포넌트  
  컴포넌트 기본 구조 : 작은 컴포넌트들이 모여서 하나의 컴포넌트를 구상하고 이러한 컴포넌트들이 모여서 전체페이지를 구성한다.  
  개념적으로는 자바스크립트의 함수와 비슷(속성들을 입력받아 리엑트엘리먼트를 생성하여 리턴함)  
  
- props의 개념  
  리엑트 컴포넌트의 속성이다.  
  컴포넌트에 전달할 당야한 정보를 담고 있는 자바스크립트 객체이다.  
    
- props의 특징  
  읽기전용이다.  
  속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면된다.  
    
- pure함수 vs impure함수  
  pure함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수이며, impure함수는 변하는 함수이다.  
  

- props의 사용법  
  *148p ~ 150p 참조*  
    
- 컴포넌트 만들기  
  클래스컴포넌트와 함수컴포넌트로 나뉜다. 최근에는 함수형컴포넌트를 사용한다.  
  예전에 작성된 코드들이 클래스컴포넌트형으로 만들어져서 클래스컴포넌트도 공부를해야한다.  
  *152p 코드참조*  

  컴포넌트의 이름은 항상 대문자로 시작해야한다. 소문자로 시작하면 DOM태그로 인식하기때문이다.  
  컴포넌트 렌더링 - *154p 참조*  
    
- 컴포넌트 합성  
  여러개의 컴포넌트를 합쳐서 또 다른 컴포넌트를 만드는것.
#### 작성코드  
```
-1- 

```
---
---
---
## 23.03.23 4주차  

#### 학습내용  
- JSX란 무엇인가.  
  JS와 xml,Html이 결합되어 선언이 가능하다. ( 예시 : 작성 코드 -1- 참조) 

- JSX의 특징  
  br,img 태그등 html에서의 싱글태그들은 JSX에서는 뒤에 / 를 붙여서 태그를 처리해야 정상작동한다.  
  JSX는 자식을 포함할수있다.  
  JSX는 Babel을 이용해서 parsing을 한다.

- JSX의 역할  
  createElemnet라는 함수를 호출하여 자바스크립트로 변환  
  만일 JS작업을 할경우에는 직접 createElement 함수를 사용해야한다  
  JSX는 가독성을 높여주는 역할을한다.  

- JSX의 장점  
코드가 간결해지며, 가독성이 향상된다.  
인젝션 공격(injection Attack)이라 불리는 해킹밥을 방어함으로써 보안에 강하다.   

- JSX 실습  
-2- 참조



#### 작성코드  
```
-1- 
const name = "Josh";
const element = <h1>Hello, {name}</h1>;

-2-


```

---
---
---
## 23.03.16 3주차  

#### 학습내용    
- 개발환경 설치하기  
  Windows 환경설정  
  Node.js , npm(패키지매니저) 설치  
  nodejs 설치 후 , 터미널에서 'node -- version'을 적어 설치가 잘 되었는지 확인한다.  
  vscode 설치
          

- 리액트란 무엇인가.  
  React : 사용자 인터페이스를 만들기 위한 '자바스크립트 라이브러리'  

- 리엑트 개념  
  복잡한 사이틀르 쉽고 빠르게 만들고 관리하기 위해 만들어진것  
  SPA를 쉽고 빠르게 만들수 있도록 해주는 도구  
    
- 동기식과 비동기식  
  동기화의 느낌으로 이해하면 편함.  
  동기식 : 클라이언트가 A를 요청했을때 서버에서 A자체를 내주는 과정  
  비동기식 : 클라이언트가 A의 일부분의 변경을 요청했을때 바뀐 A자체를주는게아니라 바뀌어야하는 일부분을 내주는 과정으로 속도가 빠르다.  

- 리엑트의 장점   
  빠른 업데이트와 렌더링 속도 ( Virtual DOM - 비동기식 방법 렌더링 )  
  컴포넌트 기반의 구조 ( 재사용성이 뛰어나다. )  
  재사용성 ( 반복작업을 줄여준다. 유지보수가 용이, 모듈에 의존성이 없다. )  
  든든한 지원군 ( 메타에서 오픈소스 프로젝트로 관리하고있다. )  
  활발한 지식 공유 & 커뮤니티  
  모바일 앱 개발 가능( 리엑트 네이티브라는 프레임워크를 사용하면 크로스플랫폼 모바일앱을 개발 가능하다. )  


- 리엑트의 단점  
  방대한 학습량  ( 자바스크립트를 공부한 경우 빠르게 학습 가능 )  
  높은 상태 관리 복잡도 ( life cycle : 어떤앱이 디스플레이되기까지 과정중에 언제 랜더링을 해줄것인지 )  

- 리엑트 시작하기  
  create-react-app 설치  
  ( npx create-react-app 'my-app' [예시: npx create-react-app my-app] )  
  ( 설치 시 파일이 자동 생성 됨으로 파일을 따로 만들필요없다. )  
  cd 'my-app' [예시 cd my-app]  
  npm start 하면 리엑트 웹 페이지가 뜸



#### 작성코드(선택)  
```

이번주 xxx


```

---
---
---
## 23.03.09 2주차
Git 설정 및 기초 설명

---
---
---
## 23.03.02 1주차
OT
# h1태그
## h2태그
###### h6태그
1. adadadad
2. dadadada

* dadadadadadadadada
- dadadadadadadaadad

``` html
<html>
    <div id = 'aaa' class="222">
    </div>
</html> 
```