import EmberRouter from '@ember/routing/router';
import config from 'browsers/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('resume-templates');
  this.route('cover-letter-templates');
  this.route('how-to-write-a-resume');
  this.route('blog');
  this.route('faq');
  this.route('app');
  this.route('login');
  this.route('sign-up');
});
