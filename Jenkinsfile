pipeline {
    agent any

    environment {
        GIT_REPO = 'https://github.com/kapil88thakur/Graphqlapi.git'
        GIT_CREDENTIALS_ID = 'github-creds'
        SSH_CREDENTIALS_ID = 'prod-ec2-ssh'
        PROD_SERVER = 'ubuntu@ec2-43-204-116-6.ap-south-1.compute.amazonaws.com'
        DEPLOY_PATH = '/var/www/GraphQLAPI'
    }

    stages {
        stage('Clone from GitHub') {
            steps {
                //git credentialsId: "${GIT_CREDENTIALS_ID}", url: "${GIT_REPO}"
				 git branch: 'main', url: "${GIT_REPO}"
            }
        }

        stage('Deploy to Production EC2') {
            steps {
                sshagent (credentials: [SSH_CREDENTIALS_ID]) {
                     sh '''
                     ssh -o StrictHostKeyChecking=no $PROD_SERVER "sudo mkdir -p $DEPLOY_PATH && sudo chown -R ubuntu:ubuntu $DEPLOY_PATH"

                     echo "Copying files to target EC2..."
                        rsync -avz -e "ssh -o StrictHostKeyChecking=no" ./ $PROD_SERVER:$DEPLOY_PATH
                                                ssh -o StrictHostKeyChecking=no $PROD_SERVER "cd $DEPLOY_PATH && npm install && npm run start &"
                    '''
                }
            }
        }
    }
}
