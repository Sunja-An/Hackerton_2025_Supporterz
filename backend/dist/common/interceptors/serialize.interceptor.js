"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serialize = Serialize;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const class_transformer_1 = require("class-transformer");
function Serialize(dto) {
    return (0, common_1.UseInterceptors)(new SerializerInterceptor(dto));
}
class SerializerInterceptor {
    constructor(dto) {
        this.dto = dto;
    }
    intercept(context, handler) {
        return handler.handle().pipe((0, rxjs_1.map)((data) => {
            return (0, class_transformer_1.plainToClass)(this.dto, data, {
                excludeExtraneousValues: true,
            });
        }));
    }
}
//# sourceMappingURL=serialize.interceptor.js.map