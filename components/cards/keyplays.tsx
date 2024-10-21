import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const KeyPlays = () => {
	const highlights = [
		{ play: "Player A dunked", quarter: "Q1" },
		{ play: "Player B hit a 3-pointer", quarter: "Q2" },
		{ play: "Player C fast break", quarter: "Q3" },
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Key Plays</CardTitle>
			</CardHeader>
			<CardContent>
				<ul className="space-y-2">
					{highlights.map((item, index) => (
						<li key={index} className="flex justify-between text-sm">
							<span>{item.play}</span>
							<span>{item.quarter}</span>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
};

export default KeyPlays;
