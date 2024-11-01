"use client";

// components/PDFCard.tsx
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PDFCardProps {
	pdf: string;
}

const PDFCard = ({ pdf }: PDFCardProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>{pdf}</CardTitle>
			</CardHeader>
			<CardContent>
				{isExpanded ? (
					<iframe
						src={`/pdf/${pdf}`}
						width="100%"
						height="600px"
						className="rounded-md"
						title={pdf}
					/>
				) : (
					<button
						className="mt-2 text-blue-500"
						onClick={() => setIsExpanded(!isExpanded)}
					>
						{isExpanded ? "Collapse" : "Expand to read"}
					</button>
				)}
			</CardContent>
		</Card>
	);
};

export default PDFCard;
