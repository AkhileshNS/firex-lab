// External Modules
import React from 'react';
import { inject, observer } from 'mobx-react';
import AceEditor from 'react-ace';

import 'brace/mode/json';
import 'brace/theme/github';

// Global Functions and constants
import { derive } from 'global/functions';
import { themes } from 'global/constants';

// Local Styles and Functions
import {
  RealtimeContainer,
  Content,
  Input,
  Button,
  Options,
  Select,
  Editor
} from 'Realtime/Realtime.styles';
import {getData, setData} from './Realtime.functions';

themes.forEach(theme => {
  require(`brace/theme/${theme}`);
});

const Realtime = ({
  code = '',
  selected = {theme: themes[0], fontSize: 14},
  project = {name: ""},
  setCode = newValue => console.log(newValue),
  setSelected = () => console.log("Set Selected")
}) => {
  const manageData = async () => {
    let res = await getData(code.path);
    console.log(res);
    if (res.err) {
      return;
    } else {
      setCode(res);
    }
  }

  return (
    <RealtimeContainer>
      <Content>
        <Options>
          <Input 
            value={code.path}
            onChange={({target}) => setCode({path: target.value})}
            disabled={project.name===""}
            placeholder={project.name==="" ? "Please add a project" : "Enter path here. Ex: '/' or '/users'"} 
          />
          <Button onClick={manageData}>Get Data</Button>
          <Button 
            onClick={() => setData(code.path, code.value, code.keyInPath)}>
              Set Data
          </Button>
          <Select value={selected.fontSize} onChange={({target}) => setSelected({fontSize: parseInt(target.value)})}>
            {[10, 12, 14, 16, 18, 20].map(fontSize => <option key={fontSize} value={fontSize}>
              {fontSize}
            </option>)}
          </Select>
          <Select value={selected.theme} onChange={({target}) => setSelected({theme: target.value})}>
            {themes.map(theme => <option key={theme} value={theme}>
              {theme[0].toUpperCase() + theme.slice(1)}
            </option>)}
          </Select>
        </Options>
        <Editor>
          <AceEditor
            value={code.value}
            mode="json"
            theme={selected.theme}
            onChange={value => setCode({value})}
            fontSize={selected.fontSize}
            name="ace"
            editorProps={{$blockScrolling: true}}
            setOptions={{
              showLineNumbers: true,
              tabSize: 2,
            }}
            showPrintMargin={false}
            style={{width: "100%", height: "calc(100vh - 120px)"}}
          /> 
        </Editor>
      </Content>
    </RealtimeContainer>
  );
};

const mapStoresToProps = derive({
  code: 'realtimeStore',
  selected: 'realtimeStore',
  project: 'appStore',
  setCode: 'realtimeStore',
  setSelected: 'realtimeStore'
});

export { Realtime };
export default inject(mapStoresToProps)(observer(Realtime));
