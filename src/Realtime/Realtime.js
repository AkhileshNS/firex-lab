// External Modules
import React from 'react';
import { inject, observer } from 'mobx-react';
import AceEditor from 'react-ace';

import 'brace/mode/json';
import 'brace/theme/github';

// Local Styles
import { RealtimeContainer } from 'Realtime/Realtime.styles';

// Global Functions
import { derive } from 'global/functions';

const Realtime = ({
  code = "",
  setCode = newValue => console.log(newValue)
}) => {
  return (
    <RealtimeContainer>
      {/* <AceEditor
        value={code}
        mode="json"
        theme="github"
        onChange={setCode}
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
        style={{width: "100%"}}
      /> */}
    </RealtimeContainer>
  );
};

const mapStoresToProps = derive({
  code: "realtimeStore",
  setCode: "realtimeStore"
});

export { Realtime };
export default inject(mapStoresToProps)(observer(Realtime));
