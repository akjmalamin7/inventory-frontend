import cogoToast from "cogo-toast";

interface MSG {
  message: string;
}

export default function showSuccess({ message }: MSG) {
  cogoToast.success(message, { position: "bottom-center" });
}
