import React from 'react'
import { Button, Header, List, Modal, Icon } from 'semantic-ui-react'

const ModalComponent = ({buttonTitle, modalTitle, iconName, children}) => (
  <Modal trigger={<a style={{marginTop: '15px'}}><Button positive>{buttonTitle}</Button></a>}>
    <Modal.Header>{modalTitle}</Modal.Header>
    <Modal.Content image>
      
      <Modal.Description>
       {children}
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalComponent