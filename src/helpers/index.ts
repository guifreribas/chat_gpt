
interface AddMessageParams {
    text: string;
    sender: string;
    $messageTemplate: HTMLTemplateElement;
    $messages: HTMLUListElement;
    gptClass: string[];
    userClass: string[];
}

export function addMessage({ text, sender, $messageTemplate, $messages, gptClass, userClass }: AddMessageParams) {
    const clonedTemplate = $messageTemplate.content.cloneNode(true) as HTMLTemplateElement;
    const $newMessage = clonedTemplate.querySelector('li');

    const $who = $newMessage?.querySelector('span') as HTMLSpanElement;
    const $text = $newMessage?.querySelector('p') as HTMLParagraphElement;

    const isBotSender = sender === 'bot';
    const classList = isBotSender ? [...gptClass] : [...userClass];

    $who.textContent = isBotSender ? 'GPT' : 'Tú';
    $who.classList.add(...classList);
    $text.textContent = text;
    $text.classList.add(...classList);

    $messages.appendChild($newMessage as Node);
    $messages.scrollTop = $messages.scrollHeight;

    return $text;
}