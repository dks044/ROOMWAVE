# ROOMWAVE [진행중] 🌊

> **공간을 공유하고, 경험을 나누는 플랫폼**

ROOMWAVE는 단순한 룸 렌탈 서비스가 아닌,  
B2C 환경에서의 **실제 사용자를 고려한 경험 중심의 웹 플랫폼** 구축을 목표로 시작된 프로젝트입니다.  

프론트엔드 개발자로서 UI/UX의 가시성과 사용성을 높이는 데 집중했으며,  
**서비스를 실제로 운영한다는 마음가짐**을 바탕으로  
디자인, 성능, 상태 관리, 네트워크 요청, 데이터 모델링 전반에 걸쳐 세심한 설계와 구현을 진행하였습니다.

---

## 🚀 기술 스택

**Frontend**  
- **Next.js 15 (App Router 기반)**  
- **TypeScript**  
- **TailwindCSS + shadcn/ui**  
- **React Query v5 (TanStack)**  
- **Zustand (전역 상태 관리)**  
- **Axios**

**Backend / Infra**  
- **Prisma (ORM)**  
- **Nextjs route Handler**

**기타 도구**  
- **Lottie (애니메이션)**  
- **React Calendar**

---

## 🧠 프로젝트 개요

> ROOMWAVE는 다양한 테마의 룸(파티룸, 회의실, 연습실 등)을  
> 사용자들이 손쉽게 탐색하고 예약할 수 있는 **공간 기반 커뮤니티 플랫폼**입니다.

해당 프로젝트는 단순한 CRUD 수준을 넘어서:

- **B2C 제품 수준의 사용자 흐름 설계**
- **검색 → 필터 → 결과 노출 → 상세 페이지 흐름 최적화**
- **SSR, CSR을 혼합한 데이터 패칭 전략 적용**
- **React Query 기반의 무한스크롤 / 캐싱 최적화**

등을 통해 **제품 수준의 UI/UX 구현 경험과 프론트엔드 시스템 설계 능력을 성장시키기 위해** 기획되었습니다.

---

## 🏗️ 주요 기능

- 실시간 무한스크롤 및 필터링
- 위치, 체크인/아웃, 가격 등 상세 검색 조건 관리
- 사용자 친화적 UI 컴포넌트 (+ shadcn 기반 커스텀)
- 반응형 UI 및 접근성 고려
- 지속적인 리팩토링 및 성능 최적화 중

---

## 🎯 프로젝트 목표

- **비즈니스 관점에서 사용자 여정을 이해하고, 이에 맞춘 제품 흐름을 설계**
- **실제 서비스를 운영한다는 관점에서 UI/UX/상태/네트워크를 종합적으로 고려**
- **최신 프론트엔드 기술 트렌드 (Next.js 15, TanStack v5 등)를 직접 적용하여 학습**

---

## 📌 개발 중인 기능 (진행 중)
- 룸 지도 페이지
- OAuth 기반 인증 및 사용자 등록
- 예약 로직 및 데이터베이스 연동
- 리뷰, 평점 시스템
- 룸 상세페이지
- 룸 찜하기, 댓글, 구매, 예약, 결제, 검색
- E2E 테스트

---

## 📂 프로젝트 구조 예시

<details>
<summary>자세히보기 (토글)</summary>

```bash
src/
├── apis/                      # API 요청 함수 정의 (REST 기반 클라이언트)
│   ├── index.ts               # API 클라이언트 초기화 또는 공통 설정
│   └── room.ts                # Room 관련 API 함수 모음
│
├── app/                       # Next.js 15 App Router 기반 페이지 구성
│   ├── (home)/                # 홈 페이지 라우트
│   │   ├── hooks/             # 홈 전용 훅
│   │   │   └── use-Rooms-Infinite-Scroll.ts
│   │   └── page.tsx           # 홈 메인 페이지
│   ├── api/                   # API Route 핸들러 (Edge / Route Handler)
│   │   ├── faqs/              # FAQs 관련 API 라우트
│   │   │   └── route.ts
│   │   └── rooms/             # Rooms 관련 API 라우트
│   │       └── route.ts
│   ├── faqs/page.tsx          # FAQ 페이지
│   ├── test/page.tsx          # 테스트용 페이지
│   ├── error.tsx              # 에러 핸들링 페이지 (error boundary)
│   ├── favicon.ico            # 파비콘
│   ├── globals.css            # 전역 스타일
│   ├── layout.tsx             # 전체 레이아웃 컴포넌트 (AppRouter 기반)
│   ├── loading.tsx            # 전역 로딩 화면
│   ├── not-found.tsx          # 404 페이지
│   └── providers.tsx          # 전역 Provider 설정 (zustand, react-query 등)
│
├── components/                # 공통 UI 컴포넌트
│   ├── common/                # 범용적 컴포넌트 (예: Logo)
│   │   └── Logo.tsx
│   ├── navbar/                # 네비게이션 관련 컴포넌트
│   │   ├── Is-Just-One-Day-CheckBox.tsx
│   │   ├── Navbar.Filter.tsx
│   │   └── Navbar.tsx
│   ├── RoomList/              # 방 리스트 관련 UI
│   │   └── index.tsx
│   ├── skeleton/              # 로딩용 스켈레톤 컴포넌트
│   │   ├── SkeletonBox.tsx
│   │   └── SkeletonCards.tsx
│   ├── CategoryList.tsx
│   ├── Footer.tsx
│   ├── GridLayout.tsx
│   ├── IsError.tsx
│   ├── Loader.tsx
│   └── LottieAnimation.tsx
│
├── constants/                 # 상수 정의 파일 모음
│   ├── filter.tsx             # 필터 관련 상수
│   ├── index.ts
│   └── lottie.ts              # Lottie 애니메이션 관련 상수
│
├── hooks/                     # 전역에서 사용하는 커스텀 훅
│   ├── room/                  # 방 관련 훅
│   │   └── useRooms.ts
│   ├── useIntersectionObserver.ts  # IntersectionObserver 기반 감지 훅
│   ├── useNav.ts              # 네비게이션 관련 제어
│   ├── useNavFilter.ts        # 필터 네비게이션 관련 훅
│   └── useNavigation.ts       # 페이지 이동 제어 훅
│
├── lib/                       # 외부 라이브러리 초기화 및 유틸성 설정
│   ├── axios.ts               # Axios 인스턴스 설정
│   ├── prismadb.ts            # Prisma DB 클라이언트
│   └── utils.ts               # 범용 유틸 함수
│
├── query/                     # React Query 관련 key 모음
│   └── key.ts                 # queryKey 상수
│
├── store/                     # Zustand 상태관리 모음
│   ├── useFilterModeStore.ts  # 필터 모드 관련 상태
│   └── useFilterStroe.ts      # 필터 값 관련 상태
│
├── types/                     # 전역 타입 정의
│   ├── filter.ts
│   ├── index.ts
│   └── Lottie.d.ts            # Lottie JSON 타입 선언
│
└── util/                      # 간단한 유틸 함수 모음
    └── util.ts


