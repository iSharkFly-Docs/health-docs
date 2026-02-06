pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    tools {
        jdk   'TemurinJDK-17'
        maven 'Maven 3.8.7'
        nodejs  'NodeJS 22.14.0'
    }

    environment {

        PRJ_NAME = 'health-docs'
        PRJ_VERSION = '0.0.1-SNAPSHOT'
		REPO_USERNAME     = credentials('86617b35-b114-4604-b054-082c8638bf8e')
		REPO_PASSWORD     = credentials('c96b3079-b141-43f0-b43a-c9c2adfb14ea')
		NODE_OPTIONS 	  = '--openssl-legacy-provider'

		// AWS
		AWS_ACCOUNT_ID = credentials('stonex_aws_account_id')
		AWS_REGION     = 'us-east-1'
		AWS_ACCESS_KEY_ID = credentials('stonex_aws_access_key_id')
		AWS_SECRET_ACCESS_KEY = credentials('stonex_secret_access_key')

		// AWS - ECR
		IMAGE_REPO_NAME = 'stonex/app-service'
		IMAGE_TAG      = 'latest'
		REPOSITORY_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${IMAGE_REPO_NAME}"

    }

     stages {
// 	    stage("Pull Source Code"){
// 			steps {
// 			    git branch: 'main',
// 			        credentialsId: 'c9d0ec7c-0749-4588-8960-e96cab84d462',
// 			        url: 'https://src.isharkfly.com/iSharkFly-Docs/health-docs.git'
// 			}
// 		}

		stage('Build / Package') {
		    steps {
		        sh 'yarn install'
		        sh 'yarn docs:build'
		    }
		}

		stage('Deploy to Cloudflare') {
            steps {
                // Install Wrangler locally for the project
                sh 'yarn add wrangler --no-save'
                // Deploy
                sh "yarn wrangler pages deploy ./.vitepress/dist --project-name=${PRJ_NAME} --env=production"
            }
        }

//         stage('Build Docker') {
//             steps {
//                 echo 'Build Docker ...'
//                 sh 'docker image prune -f'
// //                 sh 'docker build -f Dockerfile -t ${PRJ_NAME}:${PRJ_VERSION} --label ${PRJ_NAME} .'
//                 sh 'docker build -f Dockerfile -t ${REPOSITORY_URI}:${IMAGE_TAG} --label ${PRJ_NAME} .'
//             }
//         }

//         stage('Docker Deploy - ECR') {
//             steps {
//                 echo 'Deploying To Docker Repo....'
//                 withCredentials([
//                                     [$class: 'AmazonWebServicesCredentialsBinding',
//                                      credentialsId: 'stonex-creds', // The ID from Step 2
//                                      accessKeyVariable: 'AWS_ACCESS_KEY_ID',
//                                      secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']
//                                 ]) {
//                                     // Authenticate Docker with ECR
//                                     sh "aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${REPOSITORY_URI}"
//
//                                                     // Push the built image
//                                                     sh "docker push ${REPOSITORY_URI}:${IMAGE_TAG}"
//                                 }
//
// //                 }
//         	}
//         }


//         stage('Deploy Docker') {
//             steps {
//                 echo 'Deploying To Docker Repo....'
//                 sh 'docker tag ${PRJ_NAME}:${PRJ_VERSION} repo-docker.isharkfly.com/docker-hub/${PRJ_NAME}:${PRJ_VERSION}'
//                 sh 'docker tag ${PRJ_NAME}:${PRJ_VERSION} repo-docker.isharkfly.com/docker-hub/${PRJ_NAME}:latest'
//
//                 sh 'docker login repo-docker.isharkfly.com --username ${REPO_USERNAME} --password ${REPO_PASSWORD}'
//                 sh 'docker push repo-docker.isharkfly.com/docker-hub/${PRJ_NAME}:${PRJ_VERSION}'
//                 sh 'docker push repo-docker.isharkfly.com/docker-hub/${PRJ_NAME}:latest'
// 			}
// 		}
//
//         stage('Deploy Server') {
//             steps {
//                 echo 'Deploying To Server ....'
//                 dir('deploy') {
//                     sh 'ansible-playbook site.yml'
//                 }
// 			}
// 		}
    }
}