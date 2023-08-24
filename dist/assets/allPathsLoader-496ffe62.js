import { _ as __awaiter, a as __generator, b as __vitePreload } from './index-bdf8bba0.js';

/**
 * A simple module loader which concatenates all icon paths into a single chunk.
 */
var allPathsLoader = function (name, size) { return __awaiter(void 0, void 0, void 0, function () {
    var getIconPaths;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, __vitePreload(() => import(
                /* webpackChunkName: "blueprint-icons-all-paths" */
                './allPaths-cc30a96c.js'),true?["./allPaths-cc30a96c.js","./index-d42fb5ef.js","./index-fdb5ddf7.js","./index-bdf8bba0.js","./index-5900d265.css"]:void 0,import.meta.url)];
            case 1:
                getIconPaths = (_a.sent()).getIconPaths;
                return [2 /*return*/, getIconPaths(name, size)];
        }
    });
}); };

export { allPathsLoader };
//# sourceMappingURL=allPathsLoader-496ffe62.js.map
