import { I as IconSvgPaths16 } from './index-d42fb5ef.js';
import { I as IconSvgPaths20 } from './index-fdb5ddf7.js';
import { p as pascalCase, I as IconSize } from './index-bdf8bba0.js';

/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
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
/**
 * Get the list of vector paths that define a given icon. These path strings are used to render `<path>`
 * elements inside an `<svg>` icon element. For full implementation details and nuances, see the icon component
 * handlebars template and `generate-icon-components` script in the __@blueprintjs/icons__ package.
 *
 * Note: this function loads all icon definitions __statically__, which means every icon is included in your
 * JS bundle. Only use this API if your app is likely to use all Blueprint icons at runtime. If you are looking for a
 * dynamic icon loader which loads icon definitions on-demand, use `{ Icons } from "@blueprintjs/icons"` instead.
 */
function getIconPaths(name, size) {
    var key = pascalCase(name);
    return size === IconSize.STANDARD ? IconSvgPaths16[key] : IconSvgPaths20[key];
}
/**
 * Type safe string literal conversion of snake-case icon names to PascalCase icon names.
 * This is useful for indexing into the SVG paths record to extract a single icon's SVG path definition.
 *
 * @deprecated use `getIconPaths` instead
 */
function iconNameToPathsRecordKey(name) {
    return pascalCase(name);
}

export { IconSvgPaths16, IconSvgPaths20, getIconPaths, iconNameToPathsRecordKey };
//# sourceMappingURL=allPaths-cc30a96c.js.map
