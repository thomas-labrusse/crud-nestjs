"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffapiModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const offapi_service_1 = require("./offapi.service");
const offapi_controller_1 = require("./offapi.controller");
let OffapiModule = class OffapiModule {
};
OffapiModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule, common_1.CacheModule.register()],
        controllers: [offapi_controller_1.OffapiController],
        providers: [offapi_service_1.OffapiService],
    })
], OffapiModule);
exports.OffapiModule = OffapiModule;
//# sourceMappingURL=offapi.module.js.map