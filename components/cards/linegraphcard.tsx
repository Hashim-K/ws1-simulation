"use client";

import { useEffect, useState } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Sample initial data
const initialData = [
	{ time: 1, value: 120 },
	{ time: 2, value: 125 },
	{ time: 3, value: 130 },
	{ time: 4, value: 128 },
];

export function LineGraphsCard({
	ecgData = initialData,
	nibpData = initialData,
	svData = initialData,
	spo2Data = initialData,
}: {
	ecgData: { time: number; value: number }[];
	nibpData: { time: number; value: number }[];
	svData: { time: number; value: number }[];
	spo2Data: { time: number; value: number }[];
}) {
	const [ecg, setEcg] = useState(ecgData);
	const [nibp, setNibp] = useState(nibpData);
	const [sv, setSv] = useState(svData);
	const [spo2, setSpo2] = useState(spo2Data);
	const [time, setTime] = useState(5); // Initial time after last provided value

	useEffect(() => {
		const interval = setInterval(() => {
			const newTime = time + 1;

			// Simulating live data updates (adding random variations)
			const newEcgValue = {
				time: newTime,
				value: Math.random() * (140 - 110) + 110,
			};
			const newNibpValue = {
				time: newTime,
				value: Math.random() * (130 - 100) + 100,
			};
			const newSvValue = {
				time: newTime,
				value: Math.random() * (100 - 70) + 70,
			};
			const newSpo2Value = {
				time: newTime,
				value: Math.random() * (100 - 95) + 95,
			};

			// Updating the state with new data points
			setEcg((prevData) => [...prevData, newEcgValue]);
			setNibp((prevData) => [...prevData, newNibpValue]);
			setSv((prevData) => [...prevData, newSvValue]);
			setSpo2((prevData) => [...prevData, newSpo2Value]);

			setTime(newTime); // Update time
		}, 1000); // Adds a new data point every second

		return () => clearInterval(interval); // Cleanup on component unmount
	}, [time]);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Vital Sign Line Graphs</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-2 gap-4">
					{/* ECG Line Graph */}
					<div>
						<h4 className="text-center font-semibold">ECG</h4>
						<ResponsiveContainer width="100%" height={200}>
							<LineChart data={ecg}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="time" />
								<YAxis />
								<Tooltip />
								<Line
									type="monotone"
									dataKey="value"
									stroke="hsl(var(--chart-1))"
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>

					{/* NIBP Line Graph */}
					<div>
						<h4 className="text-center font-semibold">NIBP</h4>
						<ResponsiveContainer width="100%" height={200}>
							<LineChart data={nibp}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="time" />
								<YAxis />
								<Tooltip />
								<Line
									type="monotone"
									dataKey="value"
									stroke="hsl(var(--chart-2))"
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>

					{/* SV Line Graph */}
					<div>
						<h4 className="text-center font-semibold">SV</h4>
						<ResponsiveContainer width="100%" height={200}>
							<LineChart data={sv}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="time" />
								<YAxis />
								<Tooltip />
								<Line
									type="monotone"
									dataKey="value"
									stroke="hsl(var(--chart-3))"
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>

					{/* SPO2 Line Graph */}
					<div>
						<h4 className="text-center font-semibold">SPO2</h4>
						<ResponsiveContainer width="100%" height={200}>
							<LineChart data={spo2}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="time" />
								<YAxis />
								<Tooltip />
								<Line
									type="monotone"
									dataKey="value"
									stroke="hsl(var(--chart-4))"
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default LineGraphsCard;
