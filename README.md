# cursor-demo

이메일 유틸 모듈과 Node.js 내장 테스트를 사용하는 데모 프로젝트입니다.

## 설치 및 실행

```bash
npm test
```

## API

`src/email.js`에서 제공하는 함수:

| 함수 | 설명 |
|------|------|
| `isValidEmail(email)` | 이메일 형식 검증 |
| `extractEmails(users)` | 사용자 배열에서 이메일 필드 추출 |
| `getValidEmails(users)` | 유효한 이메일만 필터링 |
| `getUniqueValidEmails(users)` | 유효한 이메일 중복 제거 |

---

# Release Notes — v1.0.0

**이메일 유틸 모듈 분리, 테스트 환경 구성, ESM 전환을 포함한 첫 기능 릴리스입니다.**

## ✨ 기능

- **`src/email.js` 모듈 추가** — 이메일 관련 유틸을 독립 모듈로 분리
  - `isValidEmail` — 이메일 형식 검증
  - `extractEmails` — 사용자 배열에서 이메일 필드 추출
  - `getValidEmails` — 유효한 이메일만 필터링
  - `getUniqueValidEmails` — 유효한 이메일 중복 제거
- **테스트 추가** — `src/email.test.js` (Node.js 내장 `node:test`, 6개 테스트)
- **프로젝트 코딩 규칙** — `.cursor/rules/coding-style.mdc` 추가 (한국어 주석, ESM, JSDoc 등)

## 🐛 버그 수정

- `src/index.js`의 `console.log` 문법 오류 수정 (문자열로 감싸져 실행되지 않던 문제)

## 🧹 기타

- `package.json`을 **ES Modules**(`"type": "module"`)로 전환
- `npm test` 스크립트를 `node --test src/**/*.test.js`로 설정

## 테스트 결과

```
✔ 6 passed, 0 failed
```
