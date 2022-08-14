import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { Box, Button, Card, CardContent, TextField } from "@mui/material";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";
import * as React from "react";

import * as Tone from "tone";

const classes = {
	boxRoot: {
		display: "flex",
		flexDirection: "column",
		alignItems: "stretch",
	},
	cardRoot: (t) => ({
		position: "relative",
		overflow: "hidden",
		minHeight: "30vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "stretch",
		margin: t.spacing("auto", 2, 0),
	}),
	buttonRoot: (t) => ({
		display: "flex",
		justifyContent: "space-around",
		marginTop: t.spacing(2),
		transform: "scale(1.2)",
	}),
	imgRoot: (t) => ({ height: 128, width: 128, margin: t.spacing(2, "auto") }),
	playerShow: {
		width: "100%",
	},
};

// const MAX_REC_DURATION = 121_000;

const Recorder = React.memo(function Recorder() {
	const [value, setValue] = React.useState(30);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const t = value / 100;
	const oct = 6;
	function handleToneUp() {
		const osc = new Tone.Oscillator().toDestination();
		// start at "C4"
		osc.frequency.value = `A${oct}`;
		// ramp to "C2" over 2 seconds
		osc.frequency.rampTo(`A${oct + 1}`, t);
		// start the oscillator for 2 seconds
		osc.start().stop(`+${t}`);
	}

	function handleToneDown() {
		const osc = new Tone.Oscillator().toDestination();
		// start at "C4"
		osc.frequency.value = `A${oct + 1}`;
		// ramp to "C2" over 2 seconds
		osc.frequency.rampTo(`A${oct}`, t);
		// start the oscillator for 2 seconds
		osc.start().stop(`+${t}`);
	}

	return (
		<Container maxWidth="sm">
			<Box sx={classes.boxRoot}>
				<Card sx={{ position: "relative", marginTop: 1 }}>
					<CardContent sx={classes.cardRoot}>
						<p>Tann</p>
						<Stack
							spacing={2}
							direction="row"
							sx={{ mb: 1 }}
							alignItems="center"
						>
							<VolumeDown />
							<Slider
								aria-label="Volume"
								value={value}
								onChange={handleChange}
							/>
							<VolumeUp />
						</Stack>
						<TextField value={value} />
						<Button onClick={handleToneUp} variant="contained">
							Tone Up
						</Button>
						<Button onClick={handleToneDown} variant="contained">
							Tone Down
						</Button>
					</CardContent>
				</Card>
			</Box>
		</Container>
	);
});

export default Recorder;
