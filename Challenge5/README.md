# 챌린지 5: 컨테이너 구축 및 배송
코드 배포 방식에는 여러 가지가 있으며, 솔루션의 이식성과 관리 용이성을 높일 수 있는 컨테이너에 대한 DevOps 적용 가능성을 확인해 보고자 합니다.
## 1단계: 유용한 리소스 참고
- [Web App for Containers 문서](https://azure.microsoft.com/en-us/services/app-service/containers/)


## 2단계: 릴리즈 파이프라인 앤드노드 만들기
이 단계에서는 배포에 사용될 Web App For Container을 생성 합니다.
제공된 자격 증명을 사용하여 [Azure Portal](https://portal.azure.com)에 로그인 합니다.
### 기존에 생성된 App Service Plan을 사용 합니다.
### Web App for Containers를 생성 합니다.
```
임의 생성된 Resource Group에서 Add를 눌러 Web App for Containers을 검색
Project Details에서
Resource Group : 임의로 생성 했던 리소스 그룹을 재사용
Instance Details에서
Name: 임의 생성 (*도메인 이름이 제공됨으로 유니크한 값을 가져야 합니다)
Publish : Docker Container
Operating System : Linux
Region : Korea Central
App Service Plan에서
Windows Plan (Korea Central) : 기존에 생성된 Service Plan 사용
```
## 유용한 리소스
- [Manage an App Service Plan 문서](https://docs.microsoft.com/en-us/azure/app-service/app-service-plan-manage)
## 힌트 
- Azure의 Resource들은 자유롭게 생성 및 삭제가 가능합니다. 실수로 생성한 리소스들은 삭제 하셔도 무방 합니다.
- Azure Portal의 사용이 어렵다면 담당 코치에게 도움을 청하십시오. 

## 3단계: 컨테이너 저장소 생성
이 단계에서는 Docker를 저장할 Azure Container Registry를 생성합니다.
제공된 자격 증명을 사용하여 Azure Portal[Azure Portal](https://portal.azure.com)에 로그인 합니다.

### Azure Container Registry를 생성합니다.
```
Project Details 에서
Resource Group : 임의 생성 또는 기존 리소스 그룹 선택
Registry name : 임의 생성
Location : Korea Central
Admin user : Enable
SKU : Basic 또는 Standard
```
## 유용한 리소스
- [Azure Container Registry 문서](https://docs.microsoft.com/en-us/azure/container-registry/)

## 4단계: 컨테이너용 빌드 파이프라인 생성
이 단계에서는 어플리케이션을 빌드하고 컨테이너 작업을 합니다.
[Challenge2](../Challenge2/README.md) 의 빌드 환경 구성과 유사합니다.
```
빌드 파이프라인을 새로 만듭니다.
어플리케이션 구동 환경인 Node, NPM 설치 과정을 추가합니다. Challenge2 를 참고하세요.
이어서 Docker를 검색하고 추가합니다. Docker Build와 Push 과정이 필요합니다.
이전 단계에서 만든 Container Registry를 등록합니다.
Push 단계에서 include Latest Tag를 체크하고, Latest버전을 기록합니다.
완료되었다면 빌드를 실행합니다.
```

## 유용한 리소스
- [Azure Devops에서의 Docker build, push](https://docs.microsoft.com/en-us/azure/devops/pipelines/ecosystems/containers/acr-template?view=azure-devops)

## 5단계: 컨테이너용 배포 파이프라인 생성
이 단계에서는 빌드 파이프라인을 통해 만들어진 Docker 이미지를 릴리즈 파이프라인을 통해 배포 하는 과정에 대해 알아 봅니다.

Azure DevOps에서
```
왼쪽 메뉴의 Pipeline >> New Pipeline을 선택 합니다.
Select a Templete 메뉴에서 'AzureApp Service Deployment'를 선택 합니다.
App Service Type을 `Web App for Containers (Linux)`로 선택합니다.
3단계에서 만든 Container Registry 정보를 입력합니다.
- 인증을 위해 아래 `Application and Configuration Settings`의 `App settings`에 
     -DOCKER_REGISTRY_SERVER_URL {URL}
     -DOCKER_REGISTRY_SERVER_USERNAME {USER_NAME}
     -DOCKER_REGISTRY_SERVER_PASSWORD {PASSWORD}
  3가지를 추가합니다.
```

우측위 SAVE를 해준후, SAVE 아이콘 옆의 'Create Release'를 눌러 줍니다.
그 즉시 'Release Release-#N has been created'라는 팝업이 보이고 팝업을 누르면 릴리즈 파이프 라인이 작동 하는것을 확인 할 수 있습니다.

### 힌트 
- Azure DevOps에서 Azure Subscription과의 연동이 어렵다면 담당 코치에게 도움을 청하십시오.

## 6단계: 릴리즈 파이프라인을 통해 배포된 자산을 WebApp에서 확인
Azure Portal에서 생성한 WebApp-Container의 URL을 확인 합니다.

본 예제에서 WebApp의 이름을 problemsolving-webapp-container과 같이 설정하여 최종 URL주소는 다음과 같이 생성 되었습니다. https://problemsolving-webapp-container.azurewebsites.net/

### 힌트
- 배포가 실패했다면 담당 코치에게 도움을 청하십시오.