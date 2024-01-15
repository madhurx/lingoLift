import {
	Button,
	Container,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
	const [result, setResult] = useState<String[]>([]);
	const [count, setCount] = useState<number>(0);
	const [answer, setAnswer] = useState<string>("");

	const navigate = useNavigate();
	const nextHandler = (): void => {
		setResult((prev) => [...prev, answer]);
		setCount((prev) => prev + 1);
		setAnswer("");
	};

	return (
		<Container maxWidth={"sm"} className="px-4 py-2">
			<Typography m={"2rem 0"} className="px-10">
				Quiz
			</Typography>
			<Typography variant={"h3"} className="px-10">
				{count + 1} - {"Random words"}
			</Typography>
			<div className="px-10">
				<FormControl>
					<FormLabel className="mt-2 mb-1">Meaning</FormLabel>
					<RadioGroup
						value={answer}
						onChange={(e) => setAnswer(e.target.value)}>
						<FormControlLabel
							value={"i"}
							control={<Radio />}
							label={"d"}
							key={"idx"}
						/>
					</RadioGroup>
				</FormControl>
			</div>
			<div className="px-10 my-8">
				<Button
					variant={"contained"}
					fullWidth
					onClick={nextHandler}
					disabled={answer === ""}>
					{count === 7 ? "Submit" : "Next"}
				</Button>
			</div>
		</Container>
	);
};

export default Quiz;
