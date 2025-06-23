pipeline{
    agent any
    stages{
        stage('Build Stage'){
            agent{
                docker{
                    image 'node:18-alpine'
                    args '-u root:root'
                    reuseNode true //Reuse the node for the next stages

                }
            }
            environment{
                CI = 'true'
            }
            steps{
                sh '''
                    ls -l
                    node --version
                    npm --version
                    npm ci
                    npm run build
                    ls -l
                '''
            }
        }
    }
}