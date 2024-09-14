import { useState } from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/reset.css';
import './../login.css';
import SetPassword from './SetPassword';
import proma from './../assets/proma.png';


const IndexPages = () => {


    const [isForgotPassword, setIsForgotPassword] = useState(true);  // Estado para alternar entre los formularios

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleForgotPasswordClick = (nuevoValor: boolean): void => {
        setIsForgotPassword(nuevoValor);  // Cambia al formulario de recuperación de contraseña
    };

    return (
        <Row className="login-container">
            {/* Columna izquierda (Imagen) */}
            <Col className="login-image" xs={0} md={15}>
                <div className="image-placeholder">
                    <img src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb" alt="placeholder" />
                </div>
            </Col>

            {/* Columna derecha (Formulario) */}
            <Col className="login-form" xs={24} md={9}>
                <div>
                    {isForgotPassword ? (
                        <>
                            <Row className="login-container">

                                {/* Columna derecha (Formulario de Login) */}
                                <Col className="login-form" xs={24} md={24}>
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '5%' }}>
                                            <img src={proma} alt="Descripción de la imagen" style={{ width: '100px', height: '100px' }}/>
                                        </div>
                                        <h2 style={{ textAlign: 'center' }}>Sign in to get started</h2>

                                        <Form
                                            name="login"
                                            initialValues={{ remember: true }}
                                            onFinish={onFinish}
                                            onFinishFailed={onFinishFailed}
                                            style={{ maxWidth: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                        >
                                            <div>
                                                <Form.Item
                                                    name="username"
                                                    rules={[{ required: true, message: 'Please enter your username or email!' }]}
                                                    style={{ marginBottom: '1px', minHeight: '70px', marginTop: '24px' }}
                                                >
                                                    <Input placeholder="Username or Email" style={{ padding: '4%', borderRadius: '15px' }} />
                                                </Form.Item>

                                                <Form.Item
                                                    name="password"
                                                    rules={[{ required: true, message: 'Please enter your password!' }]}
                                                    style={{ marginBottom: '14px', minHeight: '20px' }}
                                                >
                                                    <Input.Password placeholder="Password" style={{ padding: '4%', borderRadius: '15px', marginTop: '1px' }} />
                                                </Form.Item>

                                                <Form.Item name="remember" valuePropName="checked">
                                                    <Checkbox>Remember me</Checkbox>
                                                </Form.Item>

                                                <Form.Item>
                                                    <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: '#000000', padding: '8%', borderRadius: '15px', color: 'white' }}>
                                                        Sign In
                                                    </Button>
                                                </Form.Item>

                                                <Form.Item>
                                                    <a style={{ float: 'right', color: '#D0D0D0' }} onClick={() => setIsForgotPassword(false)}>Forgot your password?</a>
                                                </Form.Item>

                                                <Form.Item>
                                                    <p style={{ textAlign: 'center' }}>
                                                        Don't have an account? <a href="/sign-up" style={{ color: '#D0D0D0' }}>Sign up</a>
                                                    </p>
                                                </Form.Item>
                                            </div>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <>
                            <SetPassword actualizarEstado={handleForgotPasswordClick} />
                        </>
                    )}
                </div>
            </Col>
        </Row>
    );
};

export default IndexPages;
