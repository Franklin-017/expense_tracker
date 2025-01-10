import { EmojiClickData } from "emoji-picker-react"
import { useState } from "react"

export default function useEmojiPicker() {
    const [ icon, setIcon ] = useState<String>("")
    const [ isEmojiPickerOpen, setIsEmojiPickerOpen ]  = useState(false)

    const setEmoji = ( emojiObject:EmojiClickData ) => {
        (emojiObject && setIcon(emojiObject.emoji))
        setIsEmojiPickerOpen(false)
    }

    const toggleEmojiPicker = () => {
        setIsEmojiPickerOpen((prev) => !prev)
    }

    return { icon, isEmojiPickerOpen, setEmoji, toggleEmojiPicker }
}
