import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MomentumGraph = () => {
	const momentumData = [15, 20, 25, 35]; // Example data
	const maxMomentum = Math.max(...momentumData);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Team Momentum</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-2">
					{momentumData.map((momentum, index) => (
						<div key={index}>
							<p>Quarter {index + 1}</p>
							<div className="relative w-full bg-gray-200 h-4 rounded">
								<div
									className="absolute left-0 top-0 h-full bg-blue-500 rounded"
									style={{ width: `${(momentum / maxMomentum) * 100}%` }}
								></div>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default MomentumGraph;
