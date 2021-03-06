/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

goog.provide('shaka.util.MapUtils');


/**
 * @namespace shaka.util.MapUtils
 * @summary A set of map/object utility functions.
 */


/**
 * Returns true if the map is empty; otherwise, returns false.
 *
 * @param {Object.<KEY, VALUE>} object
 * @return {boolean}
 * @template KEY,VALUE
 */
shaka.util.MapUtils.empty = function(object) {
  return !object || Object.keys(object).length == 0;
};


/**
 * Gets the map's values.
 *
 * @param {!Object.<KEY, VALUE>} object
 * @return {!Array.<VALUE>}
 * @template KEY,VALUE
 */
shaka.util.MapUtils.values = function(object) {
  return Object.keys(object).map(function(key) { return object[key]; });
};


/**
 * Converts the values in the given Map to a different value.
 *
 * @param {!Object.<KEY, VALUE>} object
 * @param {function(VALUE, KEY=):OUTPUT} callback
 * @return {!Object.<KEY, OUTPUT>}
 * @template KEY,VALUE,OUTPUT
 */
shaka.util.MapUtils.map = function(object, callback) {
  return Object.keys(object).reduce(function(ret, key) {
    var value = object[key];
    ret[key] = callback(value, key);
    return ret;
  }, {});
};
