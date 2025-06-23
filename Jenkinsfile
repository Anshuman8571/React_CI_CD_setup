pipeline {
    agent any  
    
    options{
        skipDefaultCheckout(true) // To skip the default checkout
    }
    stages {
        stage('Clean up code'){
            steps{
                cleanWs()  
            }
        }
        stage('Checkout using SCM'){
            steps{
                checkout scm //checkout the code from github
            }
        }
        // code is build from here
        stage('Build'){
            agent{
                docker {
                    image 'node:22.11.0-alpine3.20'
                    args '-u root' // Allows Docker commands if running as root is required
                    reuseNode true //reuse the node for the next stage
                }
            }
            steps {
                sh '''
                    echo "Installing dependencies..."
                    node --version
                    npm --version
                    npm install

                    echo "Building React app..."
                    npm run build

                    echo "✅ Build artifacts:"
                    ls -l
                '''
            }
        }
    }
}