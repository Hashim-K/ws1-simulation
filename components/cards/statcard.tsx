import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
	title: string;
	value: string | number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
	return (
		<Card className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
			<CardHeader>
				<CardTitle className="text-sm font-semibold text-gray-700 dark:text-gray-400">
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-3xl font-bold">{value}</p>
			</CardContent>
		</Card>
	);
};

export default StatCard;
