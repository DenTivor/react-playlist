export type Song = {
	id: string;
	groupName: string;
	songTitle: string;
	durationMinutes: string;
	durationSeconds: string;
}

export type IState = {
  songs?: Song[];
  processStatus?: string;
}
