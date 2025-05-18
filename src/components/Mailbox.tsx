interface MailboxProps {
    username: string;
    messages: string[];
  }
  
  export default function Mailbox({ username, messages }: MailboxProps) {
    return (
      <>
        <p style={{ color: "yellow"}}>Hello {username}</p>
        {messages.length > 0 && (
          <p style={{color: "red"}}>You have {messages.length} unread messages</p>
        )}
      </>
    );
}
  
