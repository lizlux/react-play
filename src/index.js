import React from 'react';
import ReactDOM from 'react-dom';
import Board from './controllers/Board/Board';
import YoutubeAutoComplete from './controllers/YoutubeAutoComplete/YoutubeAutoComplete';
import { observe } from './models/Game';

const rootEl = document.getElementById('root');

ReactDOM.render(
	<YoutubeAutoComplete />,
	rootEl
);

// observe(knightPosition =>
// 	ReactDOM.render(
// 		<Board knightPosition={knightPosition} />,
// 		rootEl
// 	)
// );