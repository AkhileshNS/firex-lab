// External Modules
import React from 'react';
import { inject, observer } from 'mobx-react';
import AceEditor from 'react-ace';

import 'brace/mode/json';
import 'brace/theme/github';

// Local Styles
import { HomeContainer } from 'Home/Home.styles';

// Global Functions
import { derive } from 'global/functions';

const Home = ({
  code = "",
  setCode = newValue => console.log(newValue)
}) => {
  return (
    <HomeContainer>
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
    </HomeContainer>
  );
};

const mapStoresToProps = derive({
  code: "homeStore",
  setCode: "homeStore"
});

export { Home };
export default inject(mapStoresToProps)(observer(Home));
