pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-u root' // Allows Docker commands if running as root is required
            reuseNode true
        }
    }

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Install & Build') {
            steps {
                sh '''
                    echo "📦 Installing dependencies..."
                    node --version
                    npm --version
                    npm ci

                    echo "🏗️ Building React app..."
                    npm run build

                    echo "✅ Build artifacts:"
                    ls -lh
                '''
            }
        }
    }
}