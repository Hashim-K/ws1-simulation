import StatCard from "@/components/cards/statcard";

const TeamStats = () => {
	const teamStats = {
		fgPercentage: 47.8,
		threePtPercentage: 35.2,
		ftPercentage: 82.5,
		rebounds: 45,
		assists: 22,
		turnovers: 12,
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
			<StatCard title="FG%" value={teamStats.fgPercentage + "%"} />
			<StatCard title="3P%" value={teamStats.threePtPercentage + "%"} />
			<StatCard title="FT%" value={teamStats.ftPercentage + "%"} />
			<StatCard title="Rebounds" value={teamStats.rebounds} />
			<StatCard title="Assists" value={teamStats.assists} />
			<StatCard title="Turnovers" value={teamStats.turnovers} />
		</div>
	);
};

export default TeamStats;
