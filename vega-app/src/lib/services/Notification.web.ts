// Web-specific shim for Notification service to avoid native imports

export interface NotificationOptions {
  id: string;
  title: string;
  body: string;
  data?: any;
  progress?: {
    max: number;
    current: number;
    indeterminate?: boolean;
  };
  actions?: Array<{
    title: string;
    pressAction: {
      id: string;
    };
  }>;
  onlyAlertOnce?: boolean;
}

export interface ChannelOptions {
  id: string;
  name: string;
  importance?: any;
  description?: string;
}

class NotificationService {
  private _defaultChannelId = 'default';
  private _downloadChannelId = 'download';
  private _updateChannelId = 'update';
  private initialized = true; // Always initialized on web

  constructor() {
    // No initialization needed on web
  }

  async requestPermission(): Promise<any> {
    // Web browsers handle notification permissions differently
    return Promise.resolve({ status: 'granted' });
  }

  async createChannel(options: ChannelOptions): Promise<string> {
    // No-op on web
    return Promise.resolve(options.id);
  }

  async displayNotification(
    options: NotificationOptions,
    channelId?: string,
  ): Promise<void> {
    // Use browser's Notification API if needed, or no-op
    console.log('Notification (web):', options.title, options.body);
    return Promise.resolve();
  }

  async displayDownloadNotification(
    options: NotificationOptions,
  ): Promise<void> {
    return this.displayNotification(options, this._downloadChannelId);
  }

  async displayUpdateNotification(options: NotificationOptions): Promise<void> {
    return this.displayNotification(options, this._updateChannelId);
  }

  async cancelNotification(notificationId: string): Promise<void> {
    // No-op on web
    return Promise.resolve();
  }

  async cancelAllNotifications(): Promise<void> {
    // No-op on web
    return Promise.resolve();
  }

  async showDownloadStarting(title: string, fileName: string): Promise<void> {
    console.log('Download starting (web):', title, fileName);
    return Promise.resolve();
  }

  async showDownloadProgress(
    title: string,
    fileName: string,
    progress: number,
    progressText: string,
    jobId?: number,
  ): Promise<void> {
    console.log('Download progress (web):', title, `${Math.round(progress * 100)}%`);
    return Promise.resolve();
  }

  async showDownloadComplete(title: string, fileName: string): Promise<void> {
    console.log('Download complete (web):', title, fileName);
    return Promise.resolve();
  }

  async showDownloadFailed(title: string, fileName: string): Promise<void> {
    console.log('Download failed (web):', title, fileName);
    return Promise.resolve();
  }

  async showUpdateAvailable(
    title: string,
    body: string,
    actions?: Array<{title: string; pressAction: {id: string}}>,
  ): Promise<void> {
    console.log('Update available (web):', title, body);
    return Promise.resolve();
  }

  async actionHandler({type, detail}: {type: any; detail: any}) {
    // No-op on web - no native notification actions
    console.log('Notification action (web):', type, detail);
  }

  async showUpdateProgress(
    title: string,
    body: string,
    progress?: {max: number; current: number; indeterminate?: boolean},
  ): Promise<void> {
    console.log('Update progress (web):', title, body, progress);
    return Promise.resolve();
  }

  getDownloadChannelId(): string {
    return this._downloadChannelId;
  }

  getUpdateChannelId(): string {
    return this._updateChannelId;
  }

  getDefaultChannelId(): string {
    return this._defaultChannelId;
  }
}

// Export a singleton instance
export const notificationService = new NotificationService();
export default notificationService;