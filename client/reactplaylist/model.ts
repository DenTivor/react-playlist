export type Song = {
	groupName: string;
	songTitle: string;
	durationMinutes: string;
	durationSeconds: string;
}

export type IState = {
  songs?: Song[];
  processStatus?: string;
}