"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAILanguageProgramProcessor = exports.OpenAIStreamingChat = exports.Model = void 0;

var Model;
(function (Model) {
    Model["GPT_4"] = "gpt-4";
    Model["GPT_3_5_turbo"] = "gpt-3.5-turbo";
    Model["GPT_3_5_turbo_0613"] = "gpt-3.5-turbo-0613";
    Model["GPT_3_5_turbo_16k"] = "gpt-3.5-turbo-16k";
})(Model = exports.Model || (exports.Model = {}));