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
  }
}
