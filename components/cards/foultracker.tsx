import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FoulTracker = () => {
	const fouls = {
		teamA: 4,
		teamB: 5,
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Foul Tracker</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex justify-between">
					<div className="flex flex-col items-center">
						<h4 className="text-lg">Team A</h4>
						<p className="text-2xl font-bold">{fouls.teamA}</p>
					</div>
					<div className="flex flex-col items-center">
						<h4 className="text-lg">Team B</h4>
						<p className="text-2xl font-bold">{fouls.teamB}</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default FoulTracker;
