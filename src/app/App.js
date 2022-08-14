import * as React from "react";
import Layout from "./components/Layout";
import Recorder from "./pieces/Recorder";
// import { RecordProvider } from "./state/data/RecordContext";
// import { SubjectProvider } from "./state/data/SubjectContext";

const App = React.memo(function App() {
	return (
		<Layout>
			<Recorder />
		</Layout>
	);
});

export default App;
