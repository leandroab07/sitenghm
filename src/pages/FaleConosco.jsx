import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../Styles/FaleConosco.css"; // Make sure the styles defined below are in this CSS file

function FaleConoscoForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phoneNumber: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="fale-conosco-container">
            <ToastContainer position="top-center" autoClose={5000} />
            <h2 className="form-title">Fale Conosco</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-field">
                    <label htmlFor="name">Nome Completo:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="phoneNumber">Telefone:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="message">Mensagem:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Enviar</button>
            </form>
        </div>
    );
}

export default FaleConoscoForm;
