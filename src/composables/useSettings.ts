import { ref, watch } from "vue";

interface SettingsMap {
  general: GeneralSettings;
  notifications: NotificationSettings;
  privacy: PrivacySettings;
}
type SettingsKey = keyof SettingsMap;

interface GeneralSettings {
  username: string;
  email: string;
  about: string;
  gender: string;
  country: string;
}

interface NotificationSettings {
  email: boolean;
  sms: boolean;
}

interface PrivacySettings {
  visibility: visibilityOptions;
  searchEngineIndexing: boolean;
}

type visibilityOptions = "public" | "private";

const init = <T extends SettingsKey>(key: T, defaults: SettingsMap[T]) => {
  const stored = localStorage.getItem(key);
  return stored !== null ? JSON.parse(stored) : defaults;
};

const general = ref<GeneralSettings>(
  init("general", {
    username: "",
    email: "",
    about: "",
    country: "USA",
    gender: "male",
  })
);

const notifications = ref<NotificationSettings>(
  init("notifications", {
    email: false,
    sms: false,
  })
);

const privacy = ref<PrivacySettings>(
  init("privacy", {
    visibility: "public",
    searchEngineIndexing: true,
  })
);

const watcher =
  <T extends SettingsKey>(key: string) =>
  (value: SettingsMap[T]) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

watch(privacy, watcher("privacy"), { deep: true });
watch(general, watcher("general"), { deep: true });
watch(notifications, watcher("notifications"), { deep: true });

export function useSettings() {
  return {
    general,
    notifications,
    privacy,
  };
}
