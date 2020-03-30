# 챌린지 3: 배포 파이프라인 구축
이 챌린지에서는 Azure Pipelines를 활용하여 릴리스를 작성한 후 컴파일된 자산을 배포합니다.

## 1단계: 유용한 리소스 참고
- [Azure App Service Plan](https://docs.microsoft.com/en-us/azure/app-service/overview-hosting-plans)

## 2단계: 릴리즈 파이프라인 앤드노드 만들기
이 단계에서는 배포에 사용될 WebApp을 생성 합니다.
제공된 자격 증명을 사용하여 [Azure Portal](https://portal.azure.com)에 로그인 합니다.
### App Service Plan을 생성 합니다.
```
Project Details 에서
Resource Group : Create New를 통한 임의 생성
App Service Plan Details 에서
Name : 임의 생성
Operating System : Linux
Region : Korea Central
Pricing Tier에서
SKU and size : Standard S1
```
### Web App을 생성 합니다.
```
임의 생성된 Resource Group에서 Add를 눌러 WebApp을 검색
Project Details에서
Resource Group : 임의로 생성 했던 리소스 그룹을 재사용
Instance Details에서
Name: 임의 생성 (*도메인 이름이 제공됨으로 유니크한 값을 가져야 합니다)
Publish : Code
Runtime Stack : Node 12 LTS
Operating System : Linux
Region : Korea Central
App Service Plan에서
Windows Plan (Korea Central) : 임의로 생성된 App Service Plan(S1)
```
### 유용한 리소스
- [Manage an App Service Plan](https://docs.microsoft.com/en-us/azure/app-service/app-service-plan-manage)
### 힌트 
- Azure의 Resource들은 자유롭게 생성 및 삭제가 가능합니다. 실수로 생성한 리소스들은 삭제 하셔도 무방 합니다.
- Azure Portal의 사용이 어렵다면 담당 코치에게 도움을 청하십시오. 

## 3단계: Azure DevOps에서 릴리즈 파이프라인 만들기
이 단계에서는 빌드 파이프라인을 통해 만들어진 아티팩트를 릴리즈 파이프라인을 통해 배포 하는 과정에 대해 알아 봅니다.

Azure DevOps에서
```
왼쪽 메뉴의 Pipeline >> New Pipeline을 선택 합니다.
Select a Templete 메뉴에서 'AzureApp Service Deployment'를 선택 합니다.
Artifacts 항목에서 최신 아티팩트를 적용 받기 위해 Default Version을 'Latest'로 설정 합니다.
```

Azure DevOps의 릴리즈 파이프라인 에디터 에서
```
#Deployment Process 의 Stage1 항목에서 필요한 내용을 작성 합니다.
Azure Subscription : Azure Portal에서 사용했던 Subscription을 선택 합니다.
App Type : Web App On Linux
App Service Name: 2단계에서 생성 했던 WebApp 이름을 확인하여 선택 합니다.
Startup Command : npm install
```

우측위 SAVE를 해준후, SAVE 아이콘 옆의 'Create Release'를 눌러 줍니다.
그 즉시 'Release Release-#N has been created'라는 팝업이 보이고 팝업을 누르면 릴리즈 파이프 라인이 작동 하는것을 확인 할 수 있습니다.

### 힌트 
- Azure DevOps에서 Azure Subscription과의 연동이 어렵다면 담당 코치에게 도움을 청하십시오.


## 4단계: 릴리즈 파이프라인을 통해 배포된 자산을 WebApp에서 확인
Azure Portal에서 생성한 WebApp의 URL을 확인 합니다.

본 예제에서 WebApp의 이름을 problemsolving-webapp과 같이 설정하여 최종 URL주소는 다음과 같이 생성 되었습니다. https://problemsolving-webapp.azurewebsites.net/

(Answer Sheet 추후 공개 예정)