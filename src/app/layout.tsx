import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BottomNav } from "./ui/BottomNav/BottomNav";
import { getGastosPorTipo } from "./lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Gestor de gastos",
	description: "¡Registrá tus gastos del día a día aca!",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const tiposDeGastos = await getGastosPorTipo();

	return (
		<html lang="en">
			<body className={inter.className}>
				<main>
					{children}
				</main>
				<BottomNav tiposDeGastos={tiposDeGastos} />
			</body>
		</html>
	);
}
