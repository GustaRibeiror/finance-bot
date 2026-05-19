import { Message } from "@/app/home";
import { StyleSheet, Text, View } from "react-native";

interface MessagesProps {
  message: Message;
}

export default function Messages({ message }: MessagesProps) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.message,
          styles.messageText,
          message.from == "user" ? styles.messageUser : styles.messageBot,
        ]}
      >
        {message.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginHorizontal: 10,
    marginVertical: 5,
  },

  message: {
    padding: 12,
    borderRadius: 15,
    borderWidth: 1,
    maxWidth: "75%",
  },

  messageUser: {
    backgroundColor: "white",
    color: "black",
    alignSelf: "flex-end",
    borderEndEndRadius: 1,
  },
  messageBot: {
    backgroundColor: "#bee7be",
    color: "black",
    borderEndStartRadius: 1,
  },

  messageText: {
    fontSize: 15,
    fontWeight: 400,
  },
});
