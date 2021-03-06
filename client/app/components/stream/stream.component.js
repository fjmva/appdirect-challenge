import template from './stream.html';
import controller from './stream.controller';
import './stream.styl';

let streamComponent = {
  restrict: 'E',
  bindings: {
    userName: '<',
    tweetCount: '<',
    startDate: '<',
    endDate: '<'
  },
  template,
  controller: ['TweetService', controller],
  controllerAs: 'vm'
};

export default streamComponent;
