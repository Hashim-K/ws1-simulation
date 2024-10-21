export interface Shot {
	player: string;
	x: number; // x coordinate on the court (0-100)
	y: number; // y coordinate on the court (0-100)
	made: boolean; // whether the shot was made or missed
	type: "3-pointer" | "mid-range" | "free throw"; // type of shot
	quarter: "Q1" | "Q2" | "Q3" | "Q4"; // quarter in which the shot occurred
}
