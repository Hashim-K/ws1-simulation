import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GameTimeline = () => {
	const events = [
		{ time: "Q1 10:45", event: "Player A scored a 3-pointer" },
		{ time: "Q1 08:30", event: "Player B made a dunk" },
		{ time: "Q2 05:12", event: "Player C fouled Player D" },
		{ time: "Q3 03:24", event: "Player A hit a free throw" },
		{ time: "Q4 02:50", event: "Player B made a 2-pointer" },
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Game Timeline</CardTitle>
			</CardHeader>
			<CardContent>
				<ul className="space-y-2">
					{events.map((item, index) => (
						<li key={index} className="flex justify-between text-sm">
							<span className="text-gray-500">{item.time}</span>
							<span>{item.event}</span>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
};

export default GameTimeline;
