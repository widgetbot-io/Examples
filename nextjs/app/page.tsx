import WidgetBotEmbed from "./WidgetBotEmbed"

export default function Page() {
	return (
		<div
			style={{
				padding: "0 2rem",
				fontFamily: "sans-serif"
			}}
		>
			<h1>Hello, Next.js!</h1>
			<WidgetBotEmbed
				server="299881420891881473"
				channel="450428756855750666"
				style={{
					height: "80vh",
					width: "100%"
				}}
			/>
		</div>
	)
}
