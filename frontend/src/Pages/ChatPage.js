import { Flex } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { useState } from "react";
import { useRouteMatch } from "react-router-dom";

const ChatPage = () => {
  const router = useRouteMatch();

  console.log({ router });
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false); //it is used to keep track of changes made in single chat component like leave group ,update the name of group

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Flex
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Flex>
    </div>
  );
};

export default ChatPage;
