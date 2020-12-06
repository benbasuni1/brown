import React, { useState } from 'react';
import './App.css';

function App() {

	const [output, setOutput] = useState("");
	const [title, setTitle] = useState("");

	let masterTemplate = 'Hi there,\n\n\
	I am visiting Tulsa next week and would love to take a look at $1.\n\n\
	I am looking for either a large studio or 1bed/1bath, thank you!\n\
	I am very much looking forward to the trip and seeing the city.\n\n\n\
Regards,\n\
Ben';

	let masterTitle = 'Interest in a studio or 1bed/1bath at $1';

	function save() {
		let answer = masterTemplate.replace("$1", output);
		let titleOutput = masterTitle.replace("$1", output);

		setOutput(answer);
		setTitle(titleOutput)
		copyToClipboard(answer);

		setOutput("");
	}

	function copyToClipboard(answer) {
		const el = document.createElement('textarea');
		el.value = answer;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	}


  return (
    <div className="App">
      <header className="App-header">
		  <h3>Master Template</h3>
		  <textarea rows="8" cols="85" defaultValue={masterTemplate}></textarea>
		  <h3>Customized Fields</h3>
		  <textarea onChange={(e) => setOutput(e.target.value)}></textarea>
		  <div>
			<button onClick={() => save(masterTemplate)}>save</button>
		  </div>

		  <div>{title}</div>
      </header>
    </div>
  );
}

export default App;
