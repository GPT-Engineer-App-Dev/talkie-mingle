import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const contacts = [
  { id: 1, name: "John Doe", image: "https://placehold.co/40x40" },
  { id: 2, name: "Jane Smith", image: "https://placehold.co/40x40" },
  { id: 3, name: "Alice Johnson", image: "https://placehold.co/40x40" },
];

const messages = [
  { id: 1, text: "Hello!", timestamp: "10:00 AM" },
  { id: 2, text: "How are you?", timestamp: "10:02 AM" },
  { id: 3, text: "I'm good, thanks!", timestamp: "10:05 AM" },
];

const Index = () => {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  return (
    <div className="flex h-full">
      <Sidebar contacts={contacts} setSelectedContact={setSelectedContact} />
      <MainChatArea contact={selectedContact} messages={messages} />
    </div>
  );
};

const Sidebar = ({ contacts, setSelectedContact }) => (
  <div className="w-1/4 border-r">
    <div className="flex items-center justify-between p-4 border-b">
      <h1 className="text-xl font-semibold">ChatApp</h1>
      <Avatar>
        <AvatarImage src="https://placehold.co/40x40" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </div>
    <div className="p-4">
      <Input placeholder="Search..." />
    </div>
    <ScrollArea className="flex-1 p-4">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className={cn(
            "flex items-center gap-2 p-2 cursor-pointer rounded-md",
            "hover:bg-muted",
            "transition-colors"
          )}
          onClick={() => setSelectedContact(contact)}
        >
          <Avatar>
            <AvatarImage src={contact.image} alt={contact.name} />
            <AvatarFallback>{contact.name[0]}</AvatarFallback>
          </Avatar>
          <span>{contact.name}</span>
        </div>
      ))}
    </ScrollArea>
  </div>
);

const MainChatArea = ({ contact, messages }) => (
  <div className="flex-1 flex flex-col">
    <div className="flex items-center justify-between p-4 border-b">
      <div>
        <h2 className="text-xl font-semibold">{contact.name}</h2>
        <p className="text-sm text-muted-foreground">Online</p>
      </div>
    </div>
    <ScrollArea className="flex-1 p-4 space-y-4">
      {messages.map((message) => (
        <div key={message.id} className="flex flex-col">
          <span>{message.text}</span>
          <span className="text-xs text-muted-foreground">{message.timestamp}</span>
        </div>
      ))}
    </ScrollArea>
    <div className="p-4 border-t flex items-center gap-2">
      <Input placeholder="Type a message..." className="flex-1" />
      <Button>Send</Button>
    </div>
  </div>
);

export default Index;