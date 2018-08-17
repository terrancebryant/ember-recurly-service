import { run } from '@ember/runloop';
import { Promise as EmberPromise } from 'rsvp';

/*
 * loadScript will load a JavaScript asset.
 * Idea taken from: 
 * Thank you https://github.com/code-corps/ember-stripe-service/blob/master/addon/utils/load-script.js
 */

let loadedScripts = {};

export default function loadScript(url) {
  let promise = loadedScripts[url];
  if (!promise) {
    promise = new EmberPromise((resolve, reject) => {
      let element = document.createElement('script');
      element.type = 'text/javascript';
      element.async = false;
      element.addEventListener('load', () => {
        run(() => {
          resolve();
        });
      }, false);
      element.addEventListener('error', () => {
        let error = new Error(`Could not load script ${url}`);
        run(() => {
          reject(error);
        });
      }, false);

      element.src = url;
      let firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(element, firstScript);
    });

    loadedScripts[url] = promise;
  }

  return promise;
}
