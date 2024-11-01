import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartCardProps {
	title: string;
	children: React.ReactNode; // The chart component will be passed as children
}

const ChartCard = ({ title, children }: ChartCardProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-64">{children}</div>{" "}
				{/* Chart will be rendered here */}
			</CardContent>
		</Card>
	);
};

export default ChartCard;
