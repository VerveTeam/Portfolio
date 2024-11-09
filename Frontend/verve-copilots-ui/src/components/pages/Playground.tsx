import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Navbar } from "../ui/Navbar";

export function Playground() {
  return (
    <>
      <Navbar />

      {/* Chat User Interface */}
      <div className="chat-interface-container flex h-[800px] md:h-[600px] mt-5">
        <div className="bot-selection-dropdown flex-shrink-0 w-1/4 p-4">
          <div className="bot-selection-header font-semibold text-left">
            Choose your Copilot:
          </div>
          <div className="bot-selection-sub-header space-y-2 mt-2 text-left">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="copilot"
                value="RAG Copilot"
                className="form-radio h-4 w-4 text-[#4774f2]"
              />
              <span>RAG Copilot</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="copilot"
                value="Data Copilot"
                className="form-radio h-4 w-4 text-[#4774f2]"
              />
              <span>Data Copilot</span>
            </label>
          </div>
        </div>

        <div className="bot-interface flex-grow p-4 flex flex-col space-y-4">
          {/* Message area */}
          <div className="messages flex-grow overflow-y-auto space-y-4">
            <div className="copilot-response-container flex items-center space-x-4">
              <Avatar className="bg-gray-300 w-12 h-12 flex items-center justify-center text-black font-bold text-lg">
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="copilot-response bg-white p-2 rounded-lg shadow-md">
                Welcome to RAG Copilot! Is simply dummy text of the printing.
              </div>
            </div>

            {/* Align user question container to the right */}
            <div className="user-question-container flex items-center space-x-4 justify-end">
              <div className="user-response bg-[#4774f2] text-white p-2 rounded-lg shadow-md">
                Welcome to RAG Copilot! Is simply dummy text of the printing.
              </div>
              <Avatar className="bg-gray-300 w-12 h-12 flex items-center justify-center text-black font-bold text-lg">
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="flex space-x-4 pb-4">
            <textarea
              rows={1}
              placeholder="Type your message..."
              className="w-full rounded-lg p-2 resize-none pr-12" // Add padding-right to make space for the button
            />

            <Button className="bg-[#4774f2]">Submit</Button>
          </div>
        </div>
      </div>
    </>
  );
}
