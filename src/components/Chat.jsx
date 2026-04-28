import React, { useState } from 'react';

const groups = ['HTML', 'CSS', 'JavaScript'];

const initialMessages = {
  HTML: [],
  CSS: [],
  JavaScript: [],
};

export default function ChatApp() {
  const [currentGroup, setCurrentGroup] = useState('HTML');
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    const updated = {
      ...messages,
      [currentGroup]: [...messages[currentGroup], newMessage],
    };
    setMessages(updated);
    setNewMessage('');
  };

  return (
    <div className="p-4 max-w-xl mx-auto mt-30 text-black">
      <h1 className="text-2xl font-bold mb-4">React Chat Groups</h1>

      <div className="flex gap-2 mb-4">
        {groups.map((group) => (
          <button
            key={group}
            onClick={() => setCurrentGroup(group)}
            className={`px-4 py-2 rounded ${
              currentGroup === group ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {group}
          </button>
        ))}
      </div>

      <div className="border p-4 mb-4 h-64 overflow-y-auto bg-white rounded shadow">
        <h2 className="font-semibold mb-2">{currentGroup} Group</h2>
        {messages[currentGroup].map((msg, index) => (
          <div key={index} className="mb-1 text-sm">
            {msg}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded text-white"
        />
        <button
          onClick={handleSend}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
