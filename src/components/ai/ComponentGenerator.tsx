"use client";
import { useCallback, useEffect, useState } from 'react';
import { useAIState } from '../../contexts/AIStateContext';
import HeaderComponent from './HeaderComponent';
import InputComponent from './InputComponent';
import MessageListComponent from './MessageListComponent';

interface Message {
  id: string;
  text: string;
  createdAt: Date;
  isUser?: boolean;
}

/**
 * Optimized ComponentGenerator with separated concerns:
 * - InputComponent: Handles input state (isolated from message list)
 * - MessageListComponent: Renders messages with React.memo
 * - HeaderComponent: Static header with React.memo
 * 
 * This prevents the entire message list from re-rendering when typing in the input.
 */
export default function ComponentGenerator() {
  const { state, dispatch } = useAIState();
  // const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [seenMessageIds, setSeenMessageIds] = useState<Set<string>>(new Set());
  const [pendingUserMessages, setPendingUserMessages] = useState<Map<string, string>>(new Map()); // tempId -> text
  const [etag, setEtag] = useState<string | null>(null);


  // Optimized polling with ETag caching
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const pollMessages = async () => {
      try {
        const headers: Record<string, string> = {};
        if (etag) {
          headers['If-None-Match'] = etag;
        }
        
        const response = await fetch('/api/ai-doc-gen?conversationId=salim', {
          headers
        });
        
        if (response.status === 304) {
          // No new data - server returned Not Modified
          console.log('📦 ETag cache hit - no new data, saving bandwidth!');
          setIsConnected(true);
          return;
        }
        
        if (response.ok) {
          const data = await response.json();
            const aiResponse = data.data.messages[0].payload.text || null;
          console.log('aiResponse❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️',aiResponse);

          const botpressMessages = data.data?.messages || [];
          const sortedMessages = botpressMessages.sort(
            (a: any, b: any) =>
              new Date(a.createdAt).getTime() -
              new Date(b.createdAt).getTime()
          );

          // ✅ Convert all messages into unified format for context
          const formattedMessages: Message[] = sortedMessages.map((msg: any) => ({
            id: msg.id,
            text: msg.payload?.text || "",
            isUser: !(msg.userId && msg.userId.startsWith("user_")),
            createdAt: new Date(msg.createdAt),
          }));
          dispatch({ type: "SET_MESSAGES", payload: formattedMessages });

          console.log('formattedMessages',formattedMessages)

          // ✅ End generation success
          dispatch({
            type: "GENERATE_SUCCESS",
            payload: {
              id: Date.now().toString(),
              name: "AI Response",
              html: "",
              css: "",
              jsx: "",
              createdAt: new Date(),
            },
          });

          if (data.success && data.data) {
            // Update ETag from response headers
            const newEtag = response.headers.get('ETag');
            if (newEtag) {
              console.log('🔄 New data received, updating ETag:', newEtag);
              setEtag(newEtag);
            }
            
            setIsConnected(true);
          }
        }
      } catch (error) {
        console.error('Error polling messages:', error);
        dispatch({ type: 'GENERATE_ERROR', payload: 'Failed to generate component. Please try again.' });

        setIsConnected(false);
      }
    };

    // Debounced polling - start immediately, then every 2 seconds
    const debouncedPoll = () => {
      pollMessages();
      timeoutId = setTimeout(debouncedPoll, 5000);
    };

    // Start polling immediately
    pollMessages();
    timeoutId = setTimeout(debouncedPoll, 5000);

    // Cleanup on unmount
    return () => {
      if (timeoutId) {  
        clearTimeout(timeoutId);
      }
    };
  }, [etag, seenMessageIds, pendingUserMessages]);

  // Memoized message creation functions
  // const addUserMessage = useCallback((text: string, messageId?: string, isLoading: boolean = false) => {
  //   const newMessage: Message = {
  //     id: messageId || Date.now().toString(),
  //     text,
  //     isUser: true,
  //     createdAt: new Date(),
  //   };
  //   setMessages(prev => [...prev, newMessage]);
  // }, []);

  // const addBotMessage = useCallback((text: string, messageId?: string) => {
  //   const newMessage: Message = {
  //     id: messageId || Date.now().toString(),
  //     text,
  //     isUser: false,
  //     createdAt: new Date()
  //   };
  //   setMessages(prev => [...prev, newMessage]);
  // }, []);

  // const replacePendingMessage = useCallback((tempId: string, text: string, realId: string) => {
  //   setMessages(prev => prev.map(msg => 
  //     msg.id === tempId 
  //       ? { ...msg, id: realId }
  //       : msg
  //   ));
  // }, []);

  // Memoized send message function
  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    // Generate a temporary ID for the user message
    // const tempId = `temp_${Date.now()}`;
    // addUserMessage(text, tempId, true); // Add with loading state
    
    // Track this as a pending user message
    // setPendingUserMessages(prev => new Map([...prev, [tempId, text]]));

    // Dispatch AI generation start


    try {
      const response = await fetch('/api/ai-doc-gen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      // addUserMessage(data.text, tempId, true); // Add with loading state
// console.log('response from api resoponse ',data)
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to generate component');

      }

      // Extract text response from API
    
      // Add bot response as simple text message
      // addBotMessage(aiResponse, `ai_${Date.now()}`);

    } catch (error) {
      console.error('Send error:', error);
      // addBotMessage('Failed to generate component. Please try again.', `error_${Date.now()}`);
    }
  }, [ dispatch]);


  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 transition-colors duration-300">
      <div className="w-full max-w-4xl mx-auto">
        <div 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col transition-colors duration-300"
          style={{ height: '85vh', maxHeight: '900px' }}
        >
          <HeaderComponent isConnected={isConnected} isLoading={state.isLoading} />
          
          <MessageListComponent error={state.error || undefined} />
          
          <InputComponent onSendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
}