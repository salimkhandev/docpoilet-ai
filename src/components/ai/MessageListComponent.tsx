import { useAIState } from '@/contexts/AIStateContext';
import React, { useCallback, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  isUser?: boolean;
  createdAt: Date;
}

interface MessageListComponentProps {
  // messages: Message[];
  error?: string;
}

// Memoized individual message component
const MessageItem = React.memo(({ message }: { message: Message }) => (
  <div className={`w-full ${message.isUser ? 'flex justify-end' : 'block'}`}>
    {message.isUser ? (
      <div className="max-w-[85%] sm:max-w-[75%] lg:max-w-[70%] px-4 py-3 rounded-2xl rounded-br-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
        <p className="text-sm sm:text-base leading-relaxed">{message.text}</p>
      </div>
    ) : (
      <div className="max-w-[85%] sm:max-w-[75%] lg:max-w-[70%] px-4 py-3 bg-white dark:bg-gray-700 rounded-2xl rounded-bl-sm shadow-md relative">
        <div className="text-sm sm:text-base leading-relaxed text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
          {message.text}
        </div>
      </div>
    )}
  </div>
));

MessageItem.displayName = 'MessageItem';

const MessageListComponent = React.memo(({ error }: MessageListComponentProps) => {
  const { state } = useAIState();


  console.log('state.messages🤡🤡🤡🤡🤡🤡',state.isLoading)
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Memoized scroll function to prevent unnecessary re-renders
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [state.messages, scrollToBottom]);

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-4 bg-gray-50/50 dark:bg-gray-900/50">
      {state.messages.length === 0 && (
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="text-lg font-medium mb-2">Welcome to AI Chat Assistant</p>
          <p className="text-sm">Ask me anything! I can help with coding, components, or general questions.</p>
        </div>
      )}
      
      {state.messages.map((message: Message) => (
        <MessageItem key={message.id} message={message} />
      ))}
      
      {error && (
        <div className="flex justify-center">
          <div className="px-4 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm border border-red-200 dark:border-red-800">
            {error}
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
});

MessageListComponent.displayName = 'MessageListComponent';

export default MessageListComponent;
