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
exports.LectureService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../../user/entities");
const lecture_entity_1 = require("../entities/lecture.entity");
const guard_1 = require("../../common/guard");
let LectureService = class LectureService {
    constructor(userRepository, lectureRepository) {
        this.userRepository = userRepository;
        this.lectureRepository = lectureRepository;
    }
    async addLectureToUser(userId, lectureId) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
            relations: ['lectures'],
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${userId} not found`);
        }
        const lecture = await this.lectureRepository.findOne({
            where: { lecture_id: lectureId },
        });
        if (!lecture) {
            throw new common_1.NotFoundException(`Lecture with ID ${lectureId} not found`);
        }
        if (user.lectures.some((lecture) => lecture.lecture_id === lectureId)) {
            throw new common_1.BadRequestException(`Lecture with ID ${lectureId} is already added to the user`);
        }
        user.lectures.push(lecture);
        return await this.userRepository.save(user);
    }
    async getLecture(id) {
        if (!id)
            return null;
        return this.lectureRepository.findOneBy({ lecture_id: id });
    }
    async getLectureList() {
        return this.lectureRepository.query('SELECT * FROM lectures;');
    }
    createLecture(data) {
        const lecture = this.lectureRepository.create({
            lecture_name: data.lecture_name,
            lecture_teacher: data.lecture_teacher,
            lecture_day: data.lecture_day,
            lecture_start_time: data.lecture_start_time,
            lecture_end_time: data.lecture_end_time,
        });
        return this.lectureRepository.save(lecture);
    }
};
exports.LectureService = LectureService;
exports.LectureService = LectureService = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.UseGuards)(guard_1.AuthGuard),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(lecture_entity_1.Lecture)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], LectureService);
//# sourceMappingURL=lecture.service.js.map