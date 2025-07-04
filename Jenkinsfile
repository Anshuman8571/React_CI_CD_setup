pipeline {
    agent any  

    environment {
        NODE_ENV = 'test'
        VERCEL_TOKEN = credentials('VERCEL_TOKEN')
    }
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
        // Ask for Should we Deploy
        stage('Test Input') {
            steps {
                input message: 'Do you want to continue?'
                echo 'Approval received!'
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
        stage('Test'){
            agent {
                docker{
                    image 'node:22.11.0-alpine3.20'
                    args '-u root'
                    reuseNode true
                }
            }
            steps{
                sh '''
                    npm run test
                    test -f dist/index.html
                '''
            }
        }
        stage('Deploy'){
            agent{
                docker{
                    image 'node:22.11.0-alpine3.20'
                    args '-u root'
                    reuseNode true
                }
            }
            steps{
                sh '''
                    npm install -g vercel
                    echo $NODE_ENV
                    vercel --prod --token=$VERCEL_TOKEN --confirm --name=cicdproject
                '''
            }
        }
    }
}