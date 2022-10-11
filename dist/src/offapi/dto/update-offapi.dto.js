"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOffapiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_offapi_dto_1 = require("./create-offapi.dto");
class UpdateOffapiDto extends (0, mapped_types_1.PartialType)(create_offapi_dto_1.CreateOffapiDto) {
}
exports.UpdateOffapiDto = UpdateOffapiDto;
//# sourceMappingURL=update-offapi.dto.js.map