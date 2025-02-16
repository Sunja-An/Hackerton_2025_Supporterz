"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LectureController = void 0;
const common_1 = require("@nestjs/common");
const createLecture_dto_1 = require("../dto/createLecture.dto");
const lecture_service_1 = require("../service/lecture.service");
let LectureController = class LectureController {
    constructor(lectureService) {
        this.lectureService = lectureService;
    }
    createLecture(request) {
        return this.lectureService.createLecture(request);
    }
    getLectureList() {
        return this.lectureService.getLectureList();
    }
    getLecture(id) {
        return this.lectureService.getLecture(parseInt(id));
    }
};
exports.LectureController = LectureController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createLecture_dto_1.CreateLectureDTO]),
    __metadata("design:returntype", void 0)
], LectureController.prototype, "createLecture", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LectureController.prototype, "getLectureList", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LectureController.prototype, "getLecture", null);
exports.LectureController = LectureController = __decorate([
    (0, common_1.Controller)('lecture'),
    __metadata("design:paramtypes", [lecture_service_1.LectureService])
], LectureController);
//# sourceMappingURL=lecture.controller.js.map