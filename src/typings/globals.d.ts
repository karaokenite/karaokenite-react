interface Window {
  KaraokeNiteListenToConnection?: (event: {
    detail: { clientId: string };
  }) => void;
}
