# patternier-test

patternier의 규칙/호환성 테스트를 위한 모노레포입니다.

## 실행

- 전체 검사
  - `pnpm check`
- JSON 출력
  - `pnpm check:json`
- SARIF 출력
  - `pnpm check:sarif`

## 패키지

- `packages/fsd-ts`: FSD + TypeScript 케이스
- `packages/fsd-js`: FSD + JavaScript 케이스
- `packages/next-app`: Next(app router) + "use client" 케이스
- `packages/alias-paths`: tsconfig paths/alias 케이스
- `packages/mixed-imports`: 상대경로/alias 혼합 케이스
