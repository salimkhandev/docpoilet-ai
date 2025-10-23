"use client";
import { useCallback, useEffect, useState } from "react";
import { useAIState } from "../../contexts/AIStateContext";
import HeaderComponent from "./HeaderComponent";
import InputComponent from "./InputComponent";
import MessageListComponent from "./MessageListComponent";

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
  const [lastMessageDate, setLastMessageDate] = useState<string | null>(null);
  const { state, dispatch } = useAIState();
  const [isConnected, setIsConnected] = useState(false);

  // Optimized polling - only updates when last message changes
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const pollMessages = async () => {
      try {
        const response = await fetch("/api/ai-doc-gen?conversationId=salim");

        if (response.ok) {
          const data = await response.json();

          const botpressMessages = data.data?.messages || [];
          const sortedMessages = botpressMessages.sort(
            (a: any, b: any) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
          );

          // Get the last (most recent) message's createdAt
          const lastMessage = sortedMessages[sortedMessages.length - 1];
          const newLastMessageDate = lastMessage?.createdAt || null;

          console.log("Current last message date:", lastMessageDate);
          console.log("New last message date:", newLastMessageDate);

          // Only update if the last message date has changed
          if (newLastMessageDate && newLastMessageDate !== lastMessageDate) {
            console.log("🔄 New message detected - updating state");
            setLastMessageDate(newLastMessageDate);

            // ✅ Convert all messages into unified format for context
            const formattedMessages: Message[] = sortedMessages.map(
              (msg: any) => ({
                id: msg.id,
                text: msg.payload?.text || "",
                isUser: !(msg.userId && msg.userId.startsWith("user_")),
                createdAt: new Date(msg.createdAt),
              }),
            );
            dispatch({ type: "SET_MESSAGES", payload: formattedMessages });

            console.log("formattedMessages updated:", formattedMessages.length);

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
          } else {
            console.log(
              "⏭️ No new messages - skipping dispatch to prevent re-render",
            );
          }

          if (data.success && data.data) {
            setIsConnected(true);
          }
        }
      } catch (error) {
        console.error("Error polling messages:", error);
        dispatch({
          type: "GENERATE_ERROR",
          payload: "Failed to generate component. Please try again.",
        });
        setIsConnected(false);
      }
    };

    // Debounced polling - start immediately, then every 5 seconds
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
  }, [dispatch, lastMessageDate]);

  // Memoized send message function
  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) return;

      try {
        const response = await fetch("/api/ai-doc-gen", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: text }),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        const data = await response.json();

        if (!data.success) {
          throw new Error(data.error || "Failed to generate component");
        }
      } catch (error) {
        console.error("Send error:", error);
      }
    },
    [dispatch],
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 transition-colors duration-300">
      <div className="w-full max-w-4xl mx-auto">
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col transition-colors duration-300"
          style={{ height: "85vh", maxHeight: "900px" }}
        >
          {lastMessageDate && (
            <h1 className="font-bold text-lg p-2 text-black dark:text-white bg-gray-100 dark:bg-gray-700">
              Last message: {new Date(lastMessageDate).toLocaleString()}
            </h1>
          )}
          <HeaderComponent
            isConnected={isConnected}
            isLoading={state.isLoading}
          />

          <MessageListComponent error={state.error || undefined} />

          <InputComponent onSendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
}
