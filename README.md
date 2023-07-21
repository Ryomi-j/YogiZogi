<p align='center'><img alt='logo' src='https://github.com/YOGIZOGI-Zerobase-2023/FE/assets/116236689/a508c41e-90d7-4cd5-868f-b760d519a916'></p>
<h1 align='center'>원하는 숙소와 방을 비교할 수 있는 숙박 이커머스, <br /> <a href='https://ryomi-j.github.io/YogiZogi/' color='red'>YogiZogi</a></h1>

## ♦️ Contents
- [Introduce](#introduce)
- [My Role](#my-role)
- [Tech Stacks](#tech-stacks)
- [Team-Repo](#team-repo)
- [Install & Run](#install--run)
<br />

## 🎉Introduce
프로젝트 'YogiZogi'는 user가 원하는 숙소를 선택하고 비교할 수 있는 기능을 가진 <strong>숙박 이커머스</strong>입니다.    
숙박 이커머스(agoda)를 사용할때, 원하는 숙소가 아닌 추천 알고리즘을 기반으로 추천된 숙소만 비교할 수 점이 항상 아쉽게 느껴졌습니다.    
이번 팀 프로젝트를 기회로 평소 숙박 이커머스를 사용할 때 아쉽게 느껴졌던 부분을 보완하고자 해당 기능을 추가하여 프로젝트를 구현했습니다.        
해당 프로젝트는 <strong><em>23년 5월 25일 부터 7월 6일</em></strong>까지 진행된 프로젝트이며, 3명의 프론트엔드 개발자와 2명의 백엔드 개발자가 협업한 프로젝트 입니다.    
**현재 서버가 내려간 상태이므로, 위 링크를 통해 <strong>홈, 검색 결과, 숙소 상세 페이지</strong>만 사용할 수 있습니다.
<br />
<br />

## ✨My Role
- <strong>프로젝트 초기 빌드</strong> : 기획단계에서 논의한 내용을 바탕으로 초기 개발 환경을 빌드했습니다.
- <strong>msw를 사용한 개발환경 구현</strong> : 서버가 구현 되기 전, 프론트에서 작업을 진행하기 위해 <strong>msw를 사용해 mock data 생성 및 server/browser test code</strong>를 작성했습니다.
- <strong>Git 협업 환경 구현</strong> : 프론트 개발자간 협업을 위해 issue card templet 작성 및 issue card 사용 제안, Github project 생성 등 협업 환경을 빌드했습니다.
- <strong>디자인 시안 구매</strong> : 보다 완성된 프로젝트 구현을 위해 프로젝트와 관련된 디자인 시안 구매 제안 및 Envato에서 시안 구매 후 개발을 진행했습니다.
- <strong>Main page 구현</strong>
- <strong>search bar 구현</strong> : 사용자의 현재 위치 받아오기/기간선택/인원 선택 기능을 지닙니다.
- <strong>객실/숙소 비교하기 기능 구현</strong>
   - <strong>비교함</strong>   
      - Recoil과 localstorage를 사용해, user가 비교함에 담은 상품을 검색 결과 페이지와 숙소 상세 페이지에서 확인할 수 있게 구현했습니다.
      - localstorage를 사용해, user가 현재 페이지에서 벗어날 때, 비교함의 데이터를 localstorage에 저장하고,
        이동된 페이지에서 localstorage의 데이터를 받아오는 형태로 구현했습니다.
      - 비교함에서는 담긴 상품의 CRUD 작업이 가능합니다.
      - 비교함의 데이터는 따로 서버에 요청하지 않고 검색 결과 페이지에서 사용한 데이터를 사용합니다.
      - 비교함의 `비교하기` 버튼을 눌렀을 때, 서버에 comparison 관련 데이터를 요청합니다. 

   - <strong>비교모달</strong>    
      - Promise.all()을 사용해 모든 데이터를 받아왔을 때에만 user에게 데이터를 보여주도록 구현했습니다.
      - user는 선택한 객실 또는 숙소의 가격 추이, 가격, 별점, 편의시설 등을 확인할 수 있습니다.
      - 크롤링한 데이터를 사용하여 7, 8, 9월의 해당 객실 또는 숙소의 가격추이를 차트로 보여줍니다.
      - Drag & Drop을 사용해 기준이 되는 객실이나 숙소를 가장 왼쪽에 위치시킬 수 있습니다.
- <strong>숙소 상세페이지</strong>
    - 숙소 또는 객실의 이미지 클릭시, carousel이 나타나며 user는 더 많은 이미지를 확인할 수 있습니다.
    - 숙소 정보
        - 숙소의 정보는 아코디언 형태를 사용해 보다 편리하게 각각의 내용을 확인하게 구현했습니다.
        - 크롤링한 source 코드인 `여기어때`의 generalization된 숙소정보 데이터 형태를 확인한 후 크롤링된 html 형태의 데이터를 적절히 가공해 코드를 작성했습니다.
<br />

## 🔧Tech Stacks

<div align=center>
  <img src='https://github.com/Ryomi-j/YogiZogi/assets/116236689/4d1cd37d-484a-4534-95f5-20da66aacc4b' height='30px'>
  <img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white">
  <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/githubpages-222222?style=for-the-badge&logo=githubpages&logoColor=white">
</div>
<br />

## 👩‍👧‍👦Team Repo
<a href='https://github.com/YOGIZOGI-Zerobase-2023/FE' color='red'>YogiZogi Team Repository 바로가기</a>
<br />
<br />

# 🔨Install & Run

```bash
git clone https://github.com/YOGIZOGI-Zerobase-2023/FE.git
cd FE
npm i
npm run dev
```
