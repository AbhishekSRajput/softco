// src/main.tsx
import { Toaster } from "@/components/ui/toaster";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<Toaster />
		</Provider>
	</React.StrictMode>
);
