export type Song = {
	groupName: string;
	songTitle: string;
	durationMinutes: number;
	durationSeconds: number;
}

export type IState = {
  songs?: Song[];
  processStatus?: string;
}