"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	ResponsiveContainer,
} from "recharts";
import FatigueCard from "@/components/cards/fatiguecard";
import BoxScoreCard from "@/components/cards/boxscore";
import LineGraphsCard from "@/components/cards/linegraphcard";

// Sample player data
const players = [
	{
		id: 1,
		name: "Player A",
		number: 23,
		height: "6'5",
		position: "Guard",
		fouls: 3,
		picture: "/images/player-a.png",
		fatigueValues: [80, 75, 85, 90, 70, 60, 50],
		stats: {
			min: 35,
			fieldGoals: { makes: 10, attempts: 20 },
			twoPoints: { makes: 7, attempts: 12 },
			threePoints: { makes: 3, attempts: 8 },
			freeThrows: { makes: 5, attempts: 6 },
			rebounds: { or: 3, dr: 5, total: 8 },
			assists: 6,
			turnovers: 2,
			steals: 3,
			blocks: 1,
			fouls: { pf: 2, fd: 1 },
			plusMinus: "+10",
			efficiency: 25,
			points: 28,
		},
		offensivePercentiles: [
			{ category: "Shooting", percentile: 80 },
			{ category: "Passing", percentile: 75 },
			{ category: "Dribbling", percentile: 85 },
		],
		defensivePercentiles: [
			{ category: "Blocks", percentile: 90 },
			{ category: "Steals", percentile: 80 },
			{ category: "Rebounds", percentile: 85 },
		],
		physiologicalStats: {
			ecg: [
				{ time: 1, value: 120 },
				{ time: 2, value: 125 },
				{ time: 3, value: 130 },
				{ time: 4, value: 128 },
			],
			nibp: [
				{ time: 1, value: 110 },
				{ time: 2, value: 112 },
				{ time: 3, value: 115 },
				{ time: 4, value: 113 },
			],
			sv: [
				{ time: 1, value: 80 },
				{ time: 2, value: 85 },
				{ time: 3, value: 87 },
				{ time: 4, value: 82 },
			],
			spo2: [
				{ time: 1, value: 98 },
				{ time: 2, value: 97 },
				{ time: 3, value: 99 },
				{ time: 4, value: 100 },
			],
		},
	},
	{
		id: 2,
		name: "Player B",
		number: 7,
		height: "6'9",
		position: "Forward",
		fouls: 2,
		picture: "/images/player-b.png",
		fatigueValues: [55, 54, 49, 46, 38, 30],
		stats: {
			min: 32,
			fieldGoals: { makes: 12, attempts: 22 },
			twoPoints: { makes: 8, attempts: 14 },
			threePoints: { makes: 4, attempts: 8 },
			freeThrows: { makes: 6, attempts: 7 },
			rebounds: { or: 4, dr: 6, total: 10 },
			assists: 7,
			turnovers: 1,
			steals: 2,
			blocks: 2,
			fouls: { pf: 3, fd: 2 },
			plusMinus: "+5",
			efficiency: 30,
			points: 32,
		},
		offensivePercentiles: [
			{ category: "Shooting", percentile: 85 },
			{ category: "Passing", percentile: 70 },
			{ category: "Dribbling", percentile: 80 },
		],
		defensivePercentiles: [
			{ category: "Blocks", percentile: 92 },
			{ category: "Steals", percentile: 85 },
			{ category: "Rebounds", percentile: 90 },
		],
		physiologicalStats: {
			ecg: [
				{ time: 1, value: 110 },
				{ time: 2, value: 115 },
				{ time: 3, value: 118 },
				{ time: 4, value: 120 },
			],
			nibp: [
				{ time: 1, value: 108 },
				{ time: 2, value: 111 },
				{ time: 3, value: 113 },
				{ time: 4, value: 109 },
			],
			sv: [
				{ time: 1, value: 85 },
				{ time: 2, value: 89 },
				{ time: 3, value: 88 },
				{ time: 4, value: 87 },
			],
			spo2: [
				{ time: 1, value: 97 },
				{ time: 2, value: 98 },
				{ time: 3, value: 99 },
				{ time: 4, value: 100 },
			],
		},
	},
];

export function PlayerOverview() {
	const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(0);
	const selectedPlayer = players[selectedPlayerIndex];

	const handleNextPlayer = () => {
		setSelectedPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
	};

	const handlePreviousPlayer = () => {
		setSelectedPlayerIndex(
			(prevIndex) => (prevIndex - 1 + players.length) % players.length
		);
	};

	return (
		<div className="space-y-6">
			{/* Player Selector and Arrows */}
			<Card>
				<CardHeader>
					<CardTitle>Select Player</CardTitle>
				</CardHeader>
				<CardContent className="flex items-center space-x-4">
					<ArrowLeft
						onClick={handlePreviousPlayer}
						className="cursor-pointer"
					/>
					<Select
						value={selectedPlayer.id.toString()}
						onValueChange={(value) =>
							setSelectedPlayerIndex(
								players.findIndex((player) => player.id === parseInt(value))
							)
						}
					>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Select a player" />
						</SelectTrigger>
						<SelectContent>
							{players.map((player) => (
								<SelectItem key={player.id} value={player.id.toString()}>
									{player.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<ArrowRight onClick={handleNextPlayer} className="cursor-pointer" />
				</CardContent>
			</Card>

			{/* Player Info Section */}
			<Card>
				<CardHeader>
					<CardTitle>Player Info</CardTitle>
				</CardHeader>
				<CardContent className="flex items-center space-x-6">
					<img
						src={selectedPlayer.picture}
						alt={selectedPlayer.name}
						className="w-24 h-24 rounded-lg"
					/>
					<div>
						<p>
							<strong>Number:</strong> {selectedPlayer.number}
						</p>
						<p>
							<strong>Height:</strong> {selectedPlayer.height}
						</p>
						<p>
							<strong>Position:</strong> {selectedPlayer.position}
						</p>
						<p>
							<strong>Fouls:</strong> {selectedPlayer.fouls}
						</p>
					</div>
					<FatigueCard fatigueValues={selectedPlayer.fatigueValues} />
				</CardContent>
			</Card>

			{/* Fatigue Card for the selected player */}

			{/* Box Score Card for the selected player */}
			<BoxScoreCard playerStats={selectedPlayer.stats} />

			{/* Line Graphs for ECG, NIBP, SV, SPO2 */}
			<LineGraphsCard
				ecgData={selectedPlayer.physiologicalStats.ecg}
				nibpData={selectedPlayer.physiologicalStats.nibp}
				svData={selectedPlayer.physiologicalStats.sv}
				spo2Data={selectedPlayer.physiologicalStats.spo2}
			/>

			{/* Offensive and Defensive Percentiles (Spider Chart) */}
			<Card>
				<CardHeader>
					<CardTitle>Offensive and Defensive Percentiles</CardTitle>
				</CardHeader>
				<CardContent className="grid grid-cols-2 gap-4">
					{/* Offensive Spider Chart */}
					<ResponsiveContainer width="100%" height={300}>
						<RadarChart data={selectedPlayer.offensivePercentiles}>
							<PolarGrid />
							<PolarAngleAxis dataKey="category" />
							<Radar
								name="Offense"
								dataKey="percentile"
								stroke="hsl(var(--chart-1))"
								fill="hsl(var(--chart-1))"
								fillOpacity={0.6}
							/>
						</RadarChart>
					</ResponsiveContainer>

					{/* Defensive Spider Chart */}
					<ResponsiveContainer width="100%" height={300}>
						<RadarChart data={selectedPlayer.defensivePercentiles}>
							<PolarGrid />
							<PolarAngleAxis dataKey="category" />
							<Radar
								name="Defense"
								dataKey="percentile"
								stroke="hsl(var(--chart-2))"
								fill="hsl(var(--chart-2))"
								fillOpacity={0.6}
							/>
						</RadarChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>
		</div>
	);
}

export default PlayerOverview;
