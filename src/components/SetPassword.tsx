import { Col, Input, Button, Form } from 'antd';
import 'antd/dist/reset.css'; // Importa los estilos de Ant Design
import './../set-pass.css'; // Archivo CSS personalizado

interface SetPasswordProps {
  actualizarEstado: (nuevoValor: boolean) => void; // Función que toma un string y no retorna nada
}


const SetPassword: React.FC<SetPasswordProps> = ({ actualizarEstado }) => {

  const cambiarEstado = () => {
    // Llamamos a la función pasada por props para actualizar el estado del padre
    actualizarEstado(true);
  };

  return (
    <div className="two-column-container">
      <Col className="login-form" xs={24} md={24}>
        <div>
          <h2 style={{ textAlign: 'center' }}>Set New Password</h2>
          <p style={{ textAlign: 'center', marginBottom: '80%' }}>Please enter your new password to continue.</p>

          <Form
            name="set-password"
            initialValues={{ remember: true }}
          >

            <h2 style={{ textAlign: 'center' }}>Please enter your username</h2>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please enter your email!' }]}
              style={{ marginBottom: '24px' }}
            >
              <Input placeholder="Email" style={{ padding: '4%', borderRadius: '15px', marginTop: '5px' }} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: '#5579ec', padding: '6%', borderRadius: '15px', color: 'white', marginTop: '3%' }}>
                Send recovery link
              </Button>
            </Form.Item>

            <Form.Item>
              <a style={{ display: 'flex', justifyContent: 'center', color: '#D0D0D0' }} onClick={cambiarEstado}>Cancel and sign in</a>
            </Form.Item>

          </Form>


        </div>
      </Col>
    </div>
  );
};

export default SetPassword;




