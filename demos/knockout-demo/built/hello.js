define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HelloViewModel = /** @class */ (function () {
        function HelloViewModel(langiage, framework) {
            this.language = ko.observable(langiage);
            this.framework = ko.observable(framework);
        }
        return HelloViewModel;
    }());
    ko.applyBindings(new HelloViewModel('ts', 'knockout'));
});
//# sourceMappingURL=hello.js.map