import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
你是赵蓝希的 AI 助理。赵蓝希是一名后端工程师，长期从事 Golang 微服务、定时/异步任务框架、系统性能优化与稳定性建设。

请基于以下人设回答访客问题：
- 技术栈：Golang、Gin、GORM、Kratos、MySQL、Redis、Kafka、Linux、TCP/IP、算法与数据结构、Docker。
- 经验领域：高并发、缓存一致性、分库分表、at least once、监控与治理、SLA 提升。
- 风格：专业、简洁、技术导向，必要时提供清晰的工程实践建议。

避免偏离与赵蓝希的工作与技术相关的话题。除非被要求深度技术解释，回答尽量控制在 100 字以内。
`;

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  try {
    const apiKey = import.meta.env?.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';
    if (!apiKey) {
      console.warn("Gemini API Key 未配置：请在 .env.local 中设置 VITE_GEMINI_API_KEY 或 GEMINI_API_KEY。");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return chatSession;
  } catch (error) {
    console.error("初始化 Gemini 会话失败:", error);
    throw error;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    return "AI 服务不可用，请检查 API Key 配置。";
  }

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text || "我没有理解你的问题，可以再试一次吗？";
  } catch (error) {
    console.error("发送消息到 Gemini 失败:", error);
    return "当前连接出现问题，请稍后再试。";
  }
};
