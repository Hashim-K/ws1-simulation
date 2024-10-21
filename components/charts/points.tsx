"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
	{ player: "Player 1", points: 186, defense: 80 },
	{ player: "Player 2", points: 122, defense: 80 },
	{ player: "Player 3", points: 120, defense: 80 },
	{ player: "Player 4", points: 100, defense: 80 },
	{ player: "Player 5", points: 98, defense: 80 },
	{ player: "Player 6", points: 86, defense: 80 },
];

const chartConfig = {
	points: {
		label: "points",
		color: "hsl(var(--chart-1))",
	},
	defense: {
		label: "defense",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;

export function PlusMinus() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Player +/-</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="player"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							// tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="dashed" />}
						/>
						<Bar dataKey="points" fill="var(--color-points)" radius={4} />
						<Bar dataKey="defense" fill="var(--color-defense)" radius={4} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
