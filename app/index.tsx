import Contact from "@/components/contact";
import IconNavigation from "@/components/iconNavigation";
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
          <View style={styles.contactSpace}>
            <Contact>Finance Bot</Contact>
            <IconNavigation
              style={styles.icon}
              link="/categories"
              icon="grid-outline"
              size={24}
            />
          </View>
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
  contactSpace: {
    borderColor: "gray",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    justifyContent: "center",
    alignSelf: "center",
  },
});
