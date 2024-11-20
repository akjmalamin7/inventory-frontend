import cogoToast from "cogo-toast";

interface MSG {
  message: string;
}

export default function showError({ message }: MSG) {
  cogoToast.error(message, { position: "bottom-center" });
}
