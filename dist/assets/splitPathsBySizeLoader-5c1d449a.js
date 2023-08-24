import { _ as __awaiter, a as __generator, b as __vitePreload, p as pascalCase, I as IconSize } from './index-bdf8bba0.js';

/**
 * A dynamic loader for icon paths that generates separate chunks for the two size variants.
 */
var splitPathsBySizeLoader = function (name, size) { return __awaiter(void 0, void 0, void 0, function () {
    var key, pathsRecord;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                key = pascalCase(name);
                if (!(size === IconSize.STANDARD)) return [3 /*break*/, 2];
                return [4 /*yield*/, __vitePreload(() => import(
                    /* webpackChunkName: "blueprint-icons-16px-paths" */
                    './index-d42fb5ef.js').then(n => n.I),true?[]:void 0,import.meta.url)];
            case 1:
                pathsRecord = _a.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, __vitePreload(() => import(
                /* webpackChunkName: "blueprint-icons-20px-paths" */
                './index-fdb5ddf7.js').then(n => n.I),true?[]:void 0,import.meta.url)];
            case 3:
                pathsRecord = _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/, pathsRecord[key]];
        }
    });
}); };

export { splitPathsBySizeLoader };
//# sourceMappingURL=splitPathsBySizeLoader-5c1d449a.js.map
