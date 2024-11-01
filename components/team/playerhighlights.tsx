import StatCard from "@/components/cards/statcard";

const PlayerHighlights = () => {
	const playerStats = {
		topScorer: { name: "Player A", points: 28 },
		topRebounder: { name: "Player B", rebounds: 12 },
		topAssists: { name: "Player C", assists: 7 },
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
			<StatCard
				title="Top Scorer"
				value={`${playerStats.topScorer.name} - ${playerStats.topScorer.points} Points`}
			/>
			<StatCard
				title="Top Rebounder"
				value={`${playerStats.topRebounder.name} - ${playerStats.topRebounder.rebounds} Rebounds`}
			/>
			<StatCard
				title="Top Assists"
				value={`${playerStats.topAssists.name} - ${playerStats.topAssists.assists} Assists`}
			/>
		</div>
	);
};

export default PlayerHighlights;
