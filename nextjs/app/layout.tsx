import WidgetBotCrate from "./WidgetBotCrate"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html style={{ colorScheme: "dark" }}>
			<head>
				<title>WidgetBot Next.js Example</title>
			</head>
			<body>
				<div>
					{children}
					<WidgetBotCrate
						server="299881420891881473"
						channel="450428756855750666"
					/>
				</div>
			</body>
		</html>
	)
}
