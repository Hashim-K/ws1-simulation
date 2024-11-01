"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Function to calculate the percentage from makes and attempts
const calculatePercentage = (makes: number, attempts: number) => {
	return attempts > 0 ? ((makes / attempts) * 100).toFixed(1) : "0.0";
};

// BoxScoreCard Component that accepts playerStats as a prop
export function BoxScoreCard({ playerStats }: { playerStats: any }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Box Score</CardTitle>
			</CardHeader>
			<CardContent>
				<table className="w-full text-left table-auto border-collapse border border-gray-300">
					<thead>
						<tr>
							<th className="border border-gray-300 px-2 py-1">Min</th>
							<th className="border border-gray-300 px-2 py-1">Field Goals</th>
							<th className="border border-gray-300 px-2 py-1">2 Points</th>
							<th className="border border-gray-300 px-2 py-1">3 Points</th>
							<th className="border border-gray-300 px-2 py-1">Free Throws</th>
							<th className="border border-gray-300 px-2 py-1">OR</th>
							<th className="border border-gray-300 px-2 py-1">DR</th>
							<th className="border border-gray-300 px-2 py-1">Total Reb</th>
							<th className="border border-gray-300 px-2 py-1">AS</th>
							<th className="border border-gray-300 px-2 py-1">TO</th>
							<th className="border border-gray-300 px-2 py-1">ST</th>
							<th className="border border-gray-300 px-2 py-1">BS</th>
							<th className="border border-gray-300 px-2 py-1">PF</th>
							<th className="border border-gray-300 px-2 py-1">FD</th>
							<th className="border border-gray-300 px-2 py-1">+/-</th>
							<th className="border border-gray-300 px-2 py-1">Eff</th>
							<th className="border border-gray-300 px-2 py-1">PTS</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.min}
							</td>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.fieldGoals.makes}/{playerStats.fieldGoals.attempts}{" "}
								(
								{calculatePercentage(
									playerStats.fieldGoals.makes,
									playerStats.fieldGoals.attempts
								)}
								%)
							</td>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.twoPoints.makes}/{playerStats.twoPoints.attempts} (
								{calculatePercentage(
									playerStats.twoPoints.makes,
									playerStats.twoPoints.attempts
								)}
								%)
							</td>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.threePoints.makes}/
								{playerStats.threePoints.attempts} (
								{calculatePercentage(
									playerStats.threePoints.makes,
									playerStats.threePoints.attempts
								)}
								%)
							</td>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.freeThrows.makes}/{playerStats.freeThrows.attempts}{" "}
								(
								{calculatePercentage(
									playerStats.freeThrows.makes,
									playerStats.freeThrows.attempts
								)}
								%)
							</td>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.rebounds.or}
							</td>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.rebounds.dr}
							</td>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.rebounds.total}
							</td>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.assists}
							</td>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.turnovers}
							</td>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.steals}
							</td>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.blocks}
							</td>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.fouls.pf}
							</td>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.fouls.fd}
							</td>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.plusMinus}
							</td>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.efficiency}
							</td>
							<td className="border border-gray-300 px-2 py-1">
								{playerStats.points}
							</td>
						</tr>
					</tbody>
				</table>
			</CardContent>
		</Card>
	);
}

export default BoxScoreCard;
