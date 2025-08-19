
import { useState, useEffect, useCallback } from 'react';
import Vapi from '@vapi-ai/web';

interface UseVapiOptions {
  apiKey?: string;
  assistant?: {
    firstMessage?: string;
    model?: {
      provider: 'openai';
      model: 'gpt-3.5-turbo' | 'gpt-4';
      temperature?: number;
    };
    voice?: {
      provider: '11labs';
      voiceId: string;
      model: string;
      stability?: number;
      similarityBoost?: number;
      style?: number;
      useSpeakerBoost?: boolean;
    };
  };
}

export const useVapi = (options: UseVapiOptions = {}) => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (options.apiKey) {
      const vapiInstance = new Vapi(options.apiKey);
      setVapi(vapiInstance);

      // Event listeners
      vapiInstance.on('call-start', () => {
        setIsSessionActive(true);
        setIsLoading(false);
        console.log('Vapi call started');
      });

      vapiInstance.on('call-end', () => {
        setIsSessionActive(false);
        setIsLoading(false);
        console.log('Vapi call ended');
      });

      vapiInstance.on('error', (error) => {
        setError(error.message || 'An error occurred');
        setIsLoading(false);
        console.error('Vapi error:', error);
      });

      return () => {
        vapiInstance.stop();
      };
    }
  }, [options.apiKey]);

  const startCall = useCallback(async () => {
    if (!vapi) {
      setError('Vapi not initialized');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      await vapi.start(options.assistant || {
        firstMessage: "Hello! I'm an AI assistant. How can I help you today?",
        model: {
          provider: 'openai',
          model: 'gpt-3.5-turbo',
          temperature: 0.7,
        },
        voice: {
          provider: '11labs',
          voiceId: '9BWtsMINqrJLrRacOk9x', // Aria voice
          model: 'eleven_multilingual_v2',
          stability: 0.5,
          similarityBoost: 0.75,
          style: 0.0,
          useSpeakerBoost: true,
        },
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start call');
      setIsLoading(false);
    }
  }, [vapi, options.assistant]);

  const endCall = useCallback(() => {
    if (vapi && isSessionActive) {
      vapi.stop();
    }
  }, [vapi, isSessionActive]);

  return {
    startCall,
    endCall,
    isSessionActive,
    isLoading,
    error,
    isReady: !!vapi,
  };
};
