# 챌린지 2: 빌드 파이프라인 생성
코드가 로드되고 나면 이제 코드가 제대로 작동하는지 확인할 시간입니다. Azure Pipelines를 사용하여 코드가 올바로 구축되는지 확인합니다.

## 1단계: 유용한 리소스 참고
- [빌드 파이프라인 문서](https://docs.microsoft.com/ko-kr/azure/devops/pipelines/get-started/what-is-azure-pipelines?view=azure-devops)

## 2단계 : 빌드 파이프라인 작성
이 단계에서는 구축한 코드를 빌드하는 파이프라인을 작성합니다.
 
### 빌드 파이프라인을 구성합니다.
```
왼쪽 메뉴의 pipelines을 통해 새로운 파이프라인을 생성합니다.
하단의 Use the classic editor을 통해 UI 인터페이스를 통해 쉽게 작성할 수 있습니다. 그리고 이번 챌린지에서는 classic editor을 사용합니다.
Challenge1에서 수행했던 Git Repo를 선택합니다.
Choose a template에서 적절한 build template를 고를수 있습니다. 이번 챌린지에서는 상단 Empty job을 통해 직접 만들어봅니다.
Pipeline 메뉴에서 Agent pool을 선택합니다.
Agent job 1 의 우측 + 를 클릭해 build 과정을 선택할 수 있습니다.
예제 소스코드는 Node.js이므로 node 10.x 이상 버전과 npm 설치 과정이 필요합니다.
빌드 과정이 이루어진 후, 빌드시킨 Root folder인 `$(System.DefaultWorkingDirectory)/{Project_root}` 를 Archive 해야합니다.
Archive된 빌드파일을 Artifact로 배포함으로써 어플리케이션의 배포 준비를 마쳤습니다.
```

### 힌트  
- 어플리케이션의 빌드 방법은 아주 다양합니다.
- 빌드 파이프라인은 어플리케이션의 빌드 방법에 맞게 작성할 수 있습니다.
- Agent pool은 배포할 환경에 따라 선택할 수 있습니다.
- 추가적으로 테스트 환경까지 구축 가능합니다.
- 빌드 구성이 어렵다면 담당 코치에게 도움을 청하십시오.
## 유용한 리소스  
- [Nodejs 파이프라인 문서](https://docs.microsoft.com/en-us/azure/devops/pipelines/ecosystems/javascript?view=azure-devops)

## 3단계
이 단계에서는 만들어진 빌드 파이프라인을 원하는 시기에 작동시키는 작업을 합니다.

```
Pipeline 에디터 환경에서 왼쪽 상단의 Triggers 탭을 통해 설정 할 수 있습니다.
- Git branch의 변경이 이루어질때마다 빌드를 실행시키세요.
``` 
### 힌트
- 어플리케이션의 특성에 따라 트리거를 설정할 수 있습니다.
- 스케줄에 따른 빌드구성도 가능합니다.

### 유용한 문서  
- [파이프라인 트리거 문서](https://docs.microsoft.com/en-us/azure/devops/pipelines/build/triggers?view=azure-devops)
 
## 4단계
Build 성공 유무 확인

Pipeline이 작동했다면 결과 로그를 볼 수 있습니다. 작동이 마쳤다면 푸시 알람을 통해 결과를 알려줍니다.
`Pipeline메뉴로 가서 작동을 확인합니다`