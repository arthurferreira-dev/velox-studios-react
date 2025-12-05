import {
  LuGamepad2,
  LuMessageCircleQuestion,
  LuNewspaper,
  LuBot,
  LuHouse
} from "react-icons/lu";

export function HandleLinkBtn(pagePath: string) {
  const HandleLink = () => {
    window.location.href = pagePath;
  };
  return HandleLink;
}

export function VerifyIcon(name: string) {
  const lower = name.toLocaleLowerCase();

  if (lower === "jogos") {
    return <LuGamepad2 size={22} />;
  } else if (lower === "suporte") {
    return <LuMessageCircleQuestion size={22} />;
  } else if (lower === "novidades") {
    return <LuNewspaper size={22} />;
  } else if (lower === "kc bot") {
    return <LuBot size={22} />;
  } else if (lower === "descontrário") {
    return <LuHouse style={{ width: "20px", height: "20px", flexShrink: 0 }} />;
  } else if (!lower) {
    throw new Error('Please add content to message!');
  } else {
    throw new Error(
      `The name called ${name}, is not found! Options: [jogos, suporte, novidades, kc bot, home]`
    );
  }
}
