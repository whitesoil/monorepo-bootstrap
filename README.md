# monorepo-bootstrap
모노레포 초기 구성을 위한 Bootstrap 입니다.

## 개요
- 이 레포는 npm 저장소를 사용하지 않습니다.
- yarn workspaces 를 사용하기 위해 yarn이 필요합니다.

## 사용 방법
- lerna.json 을 사용 목적에 맞게 수정합니다.
- package.json 을 사용 목적에 맞게 수정합니다.
- ```lerna bootstrap```을 사용하면 ```yarn workspaces```가 packages의 하위 패키지들을 node_modules에 올려줘서 패키지간 상호 참조가 가능합니다.

## References
- https://geonlee.tistory.com/215
- https://musma.github.io/2019/04/02/yarn-workspaces.html
- https://kdydesign.github.io/2020/08/27/mono-repo-lerna-example/