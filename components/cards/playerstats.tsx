import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PlayerStats = () => {
	// Sample data for player stats
	const playerStats = [
		{ player: "Player A", points: 25, rebounds: 10, assists: 5 },
		{ player: "Player B", points: 18, rebounds: 7, assists: 3 },
		{ player: "Player C", points: 30, rebounds: 8, assists: 2 },
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Player Stats Overview</CardTitle>
			</CardHeader>
			<CardContent>
				<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
					<thead className="bg-gray-50 dark:bg-gray-700">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
								Player
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
								Points
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
								Rebounds
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
								Assists
							</th>
						</tr>
					</thead>
					<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
						{playerStats.map((stat, index) => (
							<tr key={index}>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
									{stat.player}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
									{stat.points}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
									{stat.rebounds}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
									{stat.assists}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</CardContent>
		</Card>
	);
};

export default PlayerStats;
