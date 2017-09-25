import shared from './shared';
import * as actions from './actions';
import { CONFIG_EVENTS, } from './constants';

const config = (common = shared(), event) =>
  CONFIG_EVENTS.has(event) ? actions[event](common) : common;

export default env => (config(shared(env), process.env.npm_lifecycle_event));
