export type TabKey = "General" | "Notification" | "Privacy";

export interface Tab {
  key: TabKey;
  label: string;
}
