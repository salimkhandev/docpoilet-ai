import React from 'react';

interface HeaderComponentProps {
  isConnected: boolean;
  isLoading: boolean;
}

const HeaderComponent = React.memo(({ isConnected, isLoading }: HeaderComponentProps) => {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl">
            🤖
          </div>
          <div>
            <h1 className="text-white font-semibold text-lg">AI Chat Assistant</h1>
            <p className="text-indigo-100 text-xs">
              {isConnected ? 'Online' : 'Connecting...'}
            </p>
          </div>
        </div>
        <button
          className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white text-lg"
          aria-label="Toggle theme"
        >
          🌙
        </button>
      </div>

      {/* Status Bar */}
      <div className="px-6 py-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></div>
          <span>
            {isLoading ? 'AI is thinking...' : 'Ready to chat'}
          </span>
        </div>
      </div>
    </>
  );
});

HeaderComponent.displayName = 'HeaderComponent';

export default HeaderComponent;
