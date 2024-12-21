"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePost = exports.updatePost = exports.toggleReadStatus = exports.createPost = exports.findById = exports.getAllPostByUserId = void 0;
const postServices = __importStar(require("../services/posts-services"));
const error_handler_1 = __importDefault(require("../utils/error_handler"));
const post_1 = require("../middlewares/validations/post");
const getAllPostByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const posts = yield postServices.getAllPostByUserId(parseInt(userId, 10));
        res.json(posts);
    }
    catch (error) {
        (0, error_handler_1.default)(res, error);
    }
});
exports.getAllPostByUserId = getAllPostByUserId;
const findById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield postServices.findById(parseInt(req.params.id));
    res.json(posts);
});
exports.findById = findById;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield post_1.createPostSchema.validateAsync(req.body);
    try {
        const userId = res.locals.user.id;
        req.body.userId = userId;
        const post = yield postServices.createPost(req.body);
        res.json({
            message: "post created successfully",
            data: post,
        });
    }
    catch (error) {
        (0, error_handler_1.default)(res, error);
    }
});
exports.createPost = createPost;
const toggleReadStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const updatedPost = yield postServices.toggleReadStatus(Number(id));
        res.status(200).json(updatedPost);
    }
    catch (error) {
        (0, error_handler_1.default)(res, error);
    }
});
exports.toggleReadStatus = toggleReadStatus;
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield postServices.updatePost(parseInt(req.params.id), req.body);
    res.json(posts);
});
exports.updatePost = updatePost;
const removePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield postServices.removePost(parseInt(req.params.id));
    res.status(200).json(posts);
});
exports.removePost = removePost;
