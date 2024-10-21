const GameOverview = () => {
	const team = {
		name: "Team A",
		score: 95,
		opponent: "Team B",
		opponentScore: 90,
		timeRemaining: "4:32",
		quarter: "Q4",
	};

	return (
		<div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
			<div className="text-black dark:text-white">
				<h2 className="text-2xl font-bold">
					{team.name} vs {team.opponent}
				</h2>
				<p>
					{team.quarter} - {team.timeRemaining} left
				</p>
			</div>
			<div className="flex items-center space-x-4">
				<div>
					<h3 className="text-3xl font-bold text-black dark:text-white">
						{team.score}
					</h3>
					<p className="text-gray-500 dark:text-gray-400">{team.name}</p>
				</div>
				<span className="text-xl font-bold text-black dark:text-white">:</span>
				<div>
					<h3 className="text-3xl font-bold text-black dark:text-white">
						{team.opponentScore}
					</h3>
					<p className="text-gray-500 dark:text-gray-400">{team.opponent}</p>
				</div>
			</div>
		</div>
	);
};

export default GameOverview;
