# 챌린지 4: 솔루션 모니터링
몇 가지 피드백에 따라 웹 포털의 안정성을 높이고자 합니다. 빠른 해결 지원을 위해서는 적합한 도구가 반드시 필요하며, 또한 문제가 감지되면 자동 롤백도 지원해야 합니다.
## 1단계: 유용한 리소스 참고
- [Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)
- [진단 로그 설정](https://docs.microsoft.com/en-us/azure/app-service/troubleshoot-diagnostic-logs)

## 2단계: App service 최적화
Azure 포탈에서 web app을 설정합니다. Diagnose and troubleshoot를 통해 앱설정을 최적화 할 수 있습니다.

- Azure 포탈에서 배포된 webapp의 `Diagnose and solve problems` 메뉴를 통해 App Service의 다양한 성능 옵션을 안내하고 있습니다.
- 키워드를 통해 원하는 옵션을 검색할 수 있습니다.
- 어플리케이션의 고가용성을 위한 지표와 옵션을 검색할 수 있습니다.
- 어플리케이션의 성능을 향상시키기 위해 Best Practices 옵션을 검색할 수 있습니다. 
 
 ### 유용한 리소스
 - [Azure App Service diagnostics 문서](https://docs.microsoft.com/en-us/azure/app-service/overview-diagnostics)

## 3단계: 로그 활성화
App Service logs를 통해 로그를 활성화 할 수 있습니다.

- `App Service logs` 메뉴를 통해 어플리케이션 로그를 저장할 수 있습니다.
- `Log stream`을 통해 AppService의 Log를 실시간으로 볼 수 있습니다.

### 힌트
- 어플리케이션의 특성에 맞게 로그를 설정할 수 있습니다.
- 로깅 수준을 설정할 수있습니다.

### 유용한 리소스
 - [AppService Enable diagnostics logging 문서](https://docs.microsoft.com/en-us/azure/app-service/troubleshoot-diagnostic-logs)

## 4단계: 모니터링 알람 설정
App Service metric을 모니터링하면서 알람을 설정할 수 있습니다.

- `Alerts` 메뉴를 통해 특정 지표를 기반으로 한 푸시알람 설정을 할 수 있습니다.
- `Create rule` 버튼을 통해 설정합니다.
- `Condition` 항목에서 CPU Time, Http error 등을 추가하고 `Alert logic`을 통해 수치를 정합니다.
- `Actions Groups`를 통해 푸시알람을 받을 그룹을 정할 수 있습니다.

### 유용한 리소스
 - [Azure App Service Monitor 문서](https://docs.microsoft.com/en-us/azure/app-service/web-sites-monitor)
 - [Azure App Service Performance Monitoring 문서](https://docs.microsoft.com/en-us/azure/azure-monitor/app/azure-web-apps?tabs=net)

## 5단계: 슬롯 배포
스테이징 환경 슬롯을 활용해 안정적인 배포를 할 수 있습니다. 

- `Deployment` 메뉴의 `Deployment slots`를 통해 slot을 만들 수 있습니다.
- 어플리케이션 배포를 위한 스테이징 슬롯을 만들 수 있습니다.
- Traffic 조절을 통한 배포를 할 수 있습니다.
- 상단 Swap 버튼을 통해, Production으로 배포할 수 있습니다.

### 힌트
- Azure Devops의 배포 파이프라인에서 slot 배포가 가능합니다.
- Production 환경과 유사한 스테이징 환경을 통해 배포 테스트가 가능합니다. 

### 유용한 리소스
- [Azure App Service에서 스테이징 환경 설정 문서](https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots)