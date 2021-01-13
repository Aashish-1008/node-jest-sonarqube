**This repository provides the quick start guide to start with unit testing with jest framework with SonarQube integrated to check code coverage.**

1. Start Sonarqube server `docker-compose -f docker-compose.sonar.yml ps`
2. To perform the tests
`npm run test`
3. For executing the pipeline and committing SonarQube `npm run sonar`

Visit: http://0.0.0.0:9000/
To check code coverage metrics.