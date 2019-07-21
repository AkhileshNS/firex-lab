// External Modules
import React, { Fragment, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { derive, get, check } from 'elegant-standard';
import { IconContext } from 'react-icons';
import { MdArrowDropDown as Dropdown } from 'react-icons/md';

// Global Constants and Database
import { TITLE, SERVICES } from 'global/constants';
import * as db from 'global/database';

// Local Styles
import {
  AppbarContainer,
  Title,
  Services,
  ServicesList,
  Service,
  ProjectName,
  AddButton,
  Backdrop,
  Modal,
  Buttons,
  Input,
  Button
} from './Appbar.styles';

const Appbar = ({
  selected = 0,
  project = { name: '' },
  visible = false,
  setSelected = i => console.log(i),
  setProject = name => console.log('Project name: ' + name),
  setVisible = () => console.log('Setting visible')
}) => {
  let [modal, setModal] = useState({
    name: '',
    apiKey: '',
    appId: ''
  });

  return (
    <Fragment>
      <Backdrop onClick={() => setVisible(false)} visible={visible} />
      <AppbarContainer>
        <Title>{TITLE}</Title>
        <Services>
          {get(SERVICES, selected, '')}
          {check(SERVICES).length > 1 ? (
            <Fragment>
              <IconContext.Provider
                value={{ size: '1.6em', className: 'Arrow' }}>
                <Dropdown />
              </IconContext.Provider>
              <ServicesList>
                {check(SERVICES).map((service, i) => (
                  <Service onClick={() => setSelected(i)} key={service}>
                    {service}
                  </Service>
                ))}
              </ServicesList>
            </Fragment>
          ) : null}
        </Services>
        <ProjectName>
          {project.name === '' ? 'No Project Selected' : project.name}
        </ProjectName>
        <AddButton onClick={() => setVisible(true)}>Add Project</AddButton>
      </AppbarContainer>
      <Modal visible={visible}>
        <h2>Add a new project</h2>
        <p>Enter name:</p>
        <Input
          value={modal.name}
          onChange={({ target }) => setModal({ ...modal, name: target.value })}
          placeholder='Ex: node-chat-app'
        />
        <p>Enter apiKey:</p>
        <Input
          value={modal.apiKey}
          onChange={({ target }) => setModal({ ...modal, apiKey: target.value })}
          placeholder='Ex: AIzaSyCMVtffHSB7kviPWco2ALXYeaYfvh18FU'
        />
        <p>Enter appId:</p>
        <Input
          value={modal.appId}
          onChange={({ target }) => setModal({ ...modal, appId: target.value })}
          placeholder='Ex: 1:393088124039:web:7a3b60cc8bfc4104'
        />
        <p>Please note. Make sure that you have setup your firebase realtime database with public rules in order to use this tool 
          but don't forget to set them back to ensure security</p>
        <p>Also keep in mind that this tool will download all the data at the path you specify</p>
        <Buttons>
          <Button
            onClick={() => {
              if (
                modal.name !== '' &&
                modal.appId !== '' &&
                modal.apiKey !== ''
              ) {
                setProject(modal);
                setVisible(false);
                db.local.set(modal).then(({err}) => console.log(err));
              }
            }}>
            Add Project
          </Button>
          <Button onClick={() => setVisible(false)}>Cancel</Button>
        </Buttons>
      </Modal>
    </Fragment>
  );
};

const mapStoresToProps = derive({
  selected: 'appStore',
  project: 'appStore',
  visible: 'appStore',
  setSelected: 'appStore',
  setProject: 'appStore',
  setVisible: 'appStore'
});

export { Appbar };
export default inject(mapStoresToProps)(observer(Appbar));
