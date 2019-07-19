// External Modules
import React from 'react';
import { observer, inject } from 'mobx-react';
import {cloneDeep as clone} from 'lodash';

// Global Functions and Database
import { derive } from 'global/functions';
import * as db from 'global/database';

class controller extends React.Component {
  componentDidMount() {
    // Request for data from DB here
    db.local.get().then(({err, res}) => {
      if (err) {
        console.log(err);
      } else {
        if (res.length>0) {
          this.props.setProject(clone(res[0]));
        }
      }
    })
  }

  render() {
    return null;
  }
}

const mapStoresToProps = derive({
  project: "appStore",
  setProject: "appStore"
});

export { controller };
export default inject(mapStoresToProps)(observer(controller));
