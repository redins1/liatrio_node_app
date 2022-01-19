#!groovy

pipeline {
  agent none
  stages {
    stage('Maven Node') {
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
        docker.withRegistry('https://ec2-3-231-42-49.compute-1.amazonaws.com', 'ecr:us-east-1:redins') {
        docker.image('liatrio_exercise').push('latest')
        }
      }
    }
  }
}
