import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme, Arwes, Frame, Row, Col, Header } from "arwes";
import { theme } from "./theme";

const App = () => (
	<ThemeProvider theme={createTheme(theme)}>
		<Arwes animate background="./static/images/background.jpg" pattern="./static/images/glow.png">
			<Header animate>
				<h2>Captain's log</h2>
			</Header>

			<div class="container">
				<Frame animate level={1} corners={3}>
					<h4>Entry n°1 - 14/12/2020 - 16:06</h4>
					<div class="frame-text-content">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue malesuada lacus, sed
							eleifend magna imperdiet vel. Morbi non pulvinar arcu, eget aliquam nisl. Etiam efficitur,
							purus et commodo porta, sapien justo imperdiet lectus, vitae interdum mauris arcu eget
							dolor. Aenean rhoncus nibh leo, sed tristique augue fringilla nec. In semper sapien nisi, a
							feugiat risus tincidunt et. Praesent ultrices ultricies justo id tempor. Nunc in commodo
							est. Fusce facilisis, augue vel egestas sodales, tellus orci porta odio, vel viverra sapien
							orci et augue. In porta vehicula maximus. Vivamus pulvinar, libero ac accumsan sagittis,
							enim urna vestibulum turpis, ac pretium sapien augue sed sem. Morbi tempus ipsum egestas,
							aliquam ligula at, porttitor metus.
						</p>
						<p>
							Maecenas vel ante sed sem venenatis aliquet vitae eget neque. In sed pellentesque sem, in
							sollicitudin nulla. Praesent ultrices pharetra condimentum. Praesent ut bibendum augue.
							Aenean cursus, dolor at vulputate lobortis, augue sapien consequat justo, dictum ultrices
							purus ligula vel mauris. Suspendisse sit amet condimentum nibh, ac ornare magna. Vivamus
							imperdiet eros quis faucibus hendrerit. Mauris in dolor consectetur, dignissim nibh vitae,
							viverra dui. Suspendisse potenti. Integer condimentum ligula porttitor nunc rhoncus
							porttitor. Mauris malesuada suscipit posuere.
						</p>
					</div>
				</Frame>
			</div>
		</Arwes>
	</ThemeProvider>
);

ReactDOM.render(<App />, document.querySelector("#root"));
