pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-u root' // Allows Docker commands if running as root is required
            reuseNode true
        }
    }


    stages {
        stage('Install & Build') {
            steps {
                sh '''
                    echo "Installing dependencies..."
                    node --version
                    npm --version
                    npm install

                    echo "Building React app..."
                    npx vite build

                    echo "✅ Build artifacts:"
                    ls -l
                '''
            }
        }
    }
}