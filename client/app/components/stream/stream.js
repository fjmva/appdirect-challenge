import angular from 'angular';
import uiRouter from 'angular-ui-router';
import streamComponent from './stream.component';

let streamModule = angular.module('stream', [
  uiRouter
])

.component('stream', streamComponent);

export default streamModule;
