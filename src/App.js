import React from 'react';
import { render } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// 这是注释 \n' + 'var a = 123;let b = "hello "',
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true,
      readOnly: true
    };
    return (
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);

export default App;