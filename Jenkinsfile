#!groovy

pipeline {
  agent none
  stages {
    stage('Node Install') {
      agent {
        docker {
          image 'node:16'
        }
      }
      steps {
        sh 'npm install'
      }
    }
    stage('Docker Build') {
      agent any
      steps {
        sh 'docker build -t liatrio_exercise .'
      }
    }
    stage('Docker push') {
      agent any
      steps {
        sh 'aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 389566217404.dkr.ecr.us-east-1.amazonaws.com'
        sh 'docker tag liatrio_exercise:latest 389566217404.dkr.ecr.us-east-1.amazonaws.com/liatrio_exercise:latest'
        sh 'docker push 389566217404.dkr.ecr.us-east-1.amazonaws.com/liatrio_exercise:latest'
      }
    }
  }
}
