import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from './components/Header';
import { Main } from "./components/Main";
import { createGlobalStyle } from "styled-components";
import { useDispatch } from "react-redux";
import { init } from "./redux/actions/Main.action";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	font-family: sans-serif;
  }

  button{
	color: inherit
  }
`

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(init());
	}, [dispatch])

	return (

		<motion.div>
			<GlobalStyles />
			<Header />
			<Main />
		</motion.div>
	);
}

export default App;
