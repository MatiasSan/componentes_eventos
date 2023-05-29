import Alert from 'react-bootstrap/Alert';



function AlertReact({text,variant}) {
  return <Alert variant={variant}>{text}</Alert>;
}

export default AlertReact