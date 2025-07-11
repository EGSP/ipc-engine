"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vision_image_classifier_service = exports.vision_image_classifier = exports.vision_image = exports.vision_service = exports.vision_text_detection = exports.vision_primitives = exports.vision_image_copy_search = exports.vision_face_detection = exports.vision_classification = exports.tts_service = exports.tts = exports.translate_translation_service = exports.translate_translation = exports.stt_service = exports.ocr_service = exports.ocr = void 0;
exports.ocr = __importStar(require("./ocr/v1/ocr"));
exports.ocr_service = __importStar(require("./ocr/v1/ocr_service"));
exports.stt_service = __importStar(require("./stt/v2/stt_service"));
exports.translate_translation = __importStar(require("./translate/v2/translation"));
exports.translate_translation_service = __importStar(require("./translate/v2/translation_service"));
exports.tts = __importStar(require("./tts/v3/tts"));
exports.tts_service = __importStar(require("./tts/v3/tts_service"));
exports.vision_classification = __importStar(require("./vision/v1/classification"));
exports.vision_face_detection = __importStar(require("./vision/v1/face_detection"));
exports.vision_image_copy_search = __importStar(require("./vision/v1/image_copy_search"));
exports.vision_primitives = __importStar(require("./vision/v1/primitives"));
exports.vision_text_detection = __importStar(require("./vision/v1/text_detection"));
exports.vision_service = __importStar(require("./vision/v1/vision_service"));
exports.vision_image = __importStar(require("./vision/v2/image"));
exports.vision_image_classifier = __importStar(require("./vision/v2/image_classifier"));
exports.vision_image_classifier_service = __importStar(require("./vision/v2/image_classifier_service"));
