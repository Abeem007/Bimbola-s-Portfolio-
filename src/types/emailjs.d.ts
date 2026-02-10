declare module "@emailjs/browser" {
  interface EmailJSResponse {
    status: number;
    text: string;
  }

  function init(publicKey: string): void;
  function send(
    serviceID: string,
    templateID: string,
    templateParams?: Record<string, unknown>,
    publicKey?: string,
  ): Promise<EmailJSResponse>;

  export { init, send };
}
