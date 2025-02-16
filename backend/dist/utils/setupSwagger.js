"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = setupSwagger;
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('JIKANWARI')
        .setDescription('The JIKANWARI API description')
        .setVersion('0.1.0')
        .addTag('Nest.js')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('swagger-ui', app, document);
}
//# sourceMappingURL=setupSwagger.js.map