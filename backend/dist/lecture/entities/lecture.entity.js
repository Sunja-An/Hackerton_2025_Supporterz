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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lecture = void 0;
const entities_1 = require("../../user/entities");
const typeorm_1 = require("typeorm");
let Lecture = class Lecture {
};
exports.Lecture = Lecture;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Lecture.prototype, "lecture_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: '' }),
    __metadata("design:type", String)
], Lecture.prototype, "lecture_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Lecture.prototype, "lecture_teacher", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: '月' }),
    __metadata("design:type", String)
], Lecture.prototype, "lecture_day", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: '1' }),
    __metadata("design:type", Number)
], Lecture.prototype, "lecture_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: '2' }),
    __metadata("design:type", Number)
], Lecture.prototype, "lecture_end_time", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => entities_1.User, (user) => user.lectures),
    __metadata("design:type", Array)
], Lecture.prototype, "students", void 0);
exports.Lecture = Lecture = __decorate([
    (0, typeorm_1.Entity)({ name: 'lectures' })
], Lecture);
//# sourceMappingURL=lecture.entity.js.map