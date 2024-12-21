"use strict";
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
const db_1 = __importDefault(require("../libs/db"));
const getAllPostByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!userId) {
        throw new Error("User not found");
    }
    return yield db_1.default.posts.findMany({ where: { userId } });
});
exports.getAllPostByUserId = getAllPostByUserId;
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.posts.findFirst({
        where: {
            id,
        },
        include: {
            author: true,
        },
    });
});
exports.findById = findById;
const createPost = (post) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = yield db_1.default.posts.create({
        data: post,
    });
    return newPost;
});
exports.createPost = createPost;
const toggleReadStatus = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existingPost = yield db_1.default.posts.findFirst({
        where: {
            id,
        },
    });
    if (!existingPost) {
        throw new Error("Post not found");
    }
    const updatePost = yield db_1.default.posts.update({
        where: { id },
        data: {
            isRead: !existingPost.isRead,
        },
    });
    return updatePost;
});
exports.toggleReadStatus = toggleReadStatus;
const updatePost = (id, post) => __awaiter(void 0, void 0, void 0, function* () {
    const existingPost = yield db_1.default.posts.findFirst({
        where: {
            id,
        },
    });
    if (!existingPost) {
        throw new Error("Post not found");
    }
    const updatedPost = yield db_1.default.posts.update({
        data: post,
        where: { id },
    });
    return updatedPost;
});
exports.updatePost = updatePost;
const removePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.posts.delete({
        where: {
            id,
        },
    });
    return "Post deleted successfully";
});
exports.removePost = removePost;
