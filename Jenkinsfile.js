pipeline {
    agent any

    stages {
        stage("Build") {
            steps {
                echo "Building the code using Maven"
            }
        }

        stage("Unit and Integration Tests") {
            steps {
                echo "Running unit tests with JUnit"
                echo "Running integration tests with Selenium"
            }
        }

        stage("Code Analysis") {
            steps {
                echo "Running code analysis with SonarQube"
            }
        }

        stage("Security Scan") {
            steps {
                echo "Running security scan with OWASP ZAP"
            }
        }

        stage("Deploy to Staging") {
            steps {
                echo "Deploying the application to staging server using AWS CodeDeploy"
            }
        }

        stage("Integration Tests on Staging") {
            steps {
                echo "Running integration tests on the staging environment with Selenium"
            }
        }

        stage("Deploy to Production") {
            steps {
                echo "Deploying the application to production server using AWS CodeDeploy"
            }
        }
    }

    post {
        success {
            emailext(
                to: 'jyothikasunil006@gmail.com',
                subject: 'Build Success: ${currentBuild.fullDisplayName}',
                body: """
                <p>Build was successful!</p>
                <p>Check the attached logs for details.</p>
                """,
                attachLog: true
            )
        }
        failure {
            emailext(
                to: 'jyothikasunil006@gmail.com',
                subject: 'Build Failed: ${currentBuild.fullDisplayName}',
                body: """
                <p>Build failed!</p>
                <p>Check the attached logs for details.</p>
                """,
                attachLog: true
            )
        }
    }
}
