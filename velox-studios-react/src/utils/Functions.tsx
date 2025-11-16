import { type MouseEventHandler } from "react";

export function HandleLinkBtn(pagePath: string) {
  const HandleLink = () => {
    window.location.href = pagePath;
  };
  return HandleLink;
}

export function CreatorBtn(
  content: string,
  className: string,
  event: MouseEventHandler<HTMLButtonElement>
) {
  return (
    <button className={className} onClick={event}>
      {content}
    </button>
  );
}