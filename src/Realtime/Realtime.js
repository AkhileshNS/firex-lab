// External Modules
import React from 'react';
import { inject, observer } from 'mobx-react';
import AceEditor from 'react-ace';

import 'brace/mode/json';
import 'brace/theme/github';

// Local Styles
import {
  RealtimeContainer,
  Content,
  Input,
  Button,
  Options,
  Select,
  Editor
} from 'Realtime/Realtime.styles';

// Global Functions and constants
import { derive } from 'global/functions';
import { themes } from 'global/constants';

themes.forEach(theme => {
  require(`brace/theme/${theme}`);
});

const Realtime = ({
  code = '',
  selected = {theme: themes[0], fontSize: 14},
  setCode = newValue => console.log(newValue),
  setSelected = () => console.log("Set Selected")
}) => {
  return (
    <RealtimeContainer>
      <Content>
        <Options>
          <Input placeholder="Enter path here. Ex: '/' or '/users'" />
          <Button>Get Data</Button>
          <Button>Set Data</Button>
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
            value={code}
            mode="json"
            theme={selected.theme}
            onChange={setCode}
            fontSize={selected.fontSize}
            name="ace"
            editorProps={{$blockScrolling: true}}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
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
  setCode: 'realtimeStore',
  setSelected: 'realtimeStore'
});

export { Realtime };
export default inject(mapStoresToProps)(observer(Realtime));
