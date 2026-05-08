import Contact from "@/components/contact";
import InputMessage from "@/components/inputMessage";
import Messages from "@/components/messages";
import { useRef, useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { colors } from "../constants/colors";

export interface Message {
  id: string;
  text: string;
  from: "user" | "bot";
}

export default function Index() {
  const [messages, setMessages] = useState<Message[]>([]);

  const flatListRef = useRef<FlatList>(null);

  const handleSendMessages = (text: string) => {
    const newMessage: Message = {
      id: Math.random().toString(),
      text: text,
      from: "user",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setTimeout(() => {
      sendBotResponse();
    }, 1500);

    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  const sendBotResponse = () => {
    const botMsg: Message = {
      id: Math.random().toString(),
      text: "Entendi! Estou processando sua solicitação financeira...",
      from: "bot",
    };
    setMessages((prevMessages) => [...prevMessages, botMsg]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Contact>Flow Bot</Contact>
          <View style={styles.box}>
            <FlatList
              data={messages}
              contentContainerStyle={{ paddingBottom: 20 }}
              ref={flatListRef}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Messages message={item} />}
              keyboardShouldPersistTaps="handled"
              onContentSizeChange={() =>
                flatListRef.current?.scrollToEnd({ animated: true })
              }
            />
          </View>
          <InputMessage onSendMessage={handleSendMessages} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 48,
  },
  text: {
    color: colors.text,
  },
  box: {
    flex: 1,
    margin: 2,
  },
});
