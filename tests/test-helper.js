import Application from 'fastboot-repro-802/app';
import config from 'fastboot-repro-802/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
