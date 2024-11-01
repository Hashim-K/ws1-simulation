import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shot } from "@/types"; // Import Shot type definition

interface ShotTypeBreakdownProps {
	shotData?: Shot[]; // Make shotData optional and default to an empty array
}

const ShotTypeBreakdown: React.FC<ShotTypeBreakdownProps> = ({
	shotData = [],
}) => {
	// Initialize shot type counts
	const shotTypes: { [key: string]: number } = {
		"3-pointer": 0,
		"mid-range": 0,
		"free throw": 0,
	};

	// Ensure that shotData is always an array before proceeding
	if (Array.isArray(shotData) && shotData.length > 0) {
		shotData.forEach((shot) => {
			if (shot && shot.type && shotTypes.hasOwnProperty(shot.type)) {
				shotTypes[shot.type] += 1; // Count each type of shot
			}
		});
	}

	const totalShots = shotData.length; // Total number of shots

	return (
		<Card>
			<CardHeader>
				<CardTitle>Shot Type Breakdown</CardTitle>
			</CardHeader>
			<CardContent>
				<ul className="space-y-2">
					{Object.keys(shotTypes).map((type) => {
						// Avoid divide by zero, set percentage to 0 if totalShots is 0
						const percentage =
							totalShots > 0
								? (shotTypes[type as keyof typeof shotTypes] / totalShots) * 100
								: 0;

						return (
							<li key={type}>
								<div className="flex justify-between">
									<span>{type}</span>
									<span>{percentage.toFixed(1)}%</span>
								</div>
								<div className="relative w-full bg-gray-200 h-4 rounded">
									<div
										className="absolute left-0 top-0 h-full bg-green-500 rounded"
										style={{ width: `${percentage}%` }}
									></div>
								</div>
							</li>
						);
					})}
				</ul>
			</CardContent>
		</Card>
	);
};

export default ShotTypeBreakdown;
