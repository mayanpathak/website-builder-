import { Router, Request, Response } from 'express';
import { callGemini } from '../services/ai.service';
import { getSystemPrompt } from '../prompts';
import { AIMessage, ChatResponse, ErrorResponse } from '../types';

const router = Router();

// Chat endpoint
router.post('/', async (req: Request, res: Response) => {
  const userMessages = req.body.messages as any[];

  try {
    const messages: AIMessage[] = [
      {
        role: 'user',
        content: `${getSystemPrompt()}\n\n` + userMessages.map((m: any) => m.content).join('\n'),
      },
    ];

    const output = await callGemini(messages, 8000);
    
    const response: ChatResponse = {
      response: output,
    };
    
    res.json(response);
  } catch (error) {
    const errorResponse: ErrorResponse = { error: 'Failed to process chat request' };
    res.status(500).json(errorResponse);
  }
});

export default router;