"use client"
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';


export default function Join(){
    const [isLoginView, setLoginView] = useState(true);
    const [selectedGender, setSelectedGender] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        password: '',
        confirmPassword: '',
    });
    const [message, setMessage] = useState(
      { text: '', 
      color: '' 
    });

    const showMessage = (text, color) => {
      setMessage({ text, color });
      setTimeout(() => {
          setMessage({ text: '', color: '' });
      }, 2500); 
    };

    const switchView = () => {
        setLoginView((prev) => !prev);
    };

    const handleGenderChange = (gender) => {
        setSelectedGender(gender);
    };

    const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const handleAuthAction = async () => {
        try {
          if (isLoginView) {
            if (!formData.email || !formData.password) {
              showMessage('Please provide valid email & password', 'red');
              return;
            }
            try {
              const response = await axios.post('http://127.0.0.1:8080/api/login', {
                  email: formData.email,
                  password: formData.password,
              });
              console.log(response,'response');
              showMessage('Login successful', 'green');
            }catch (error) {
              console.error('Error:', error);
              showMessage(`${response.response.data.message}`, 'red');
          }
          } else {
            if (!formData.email || !formData.password || !formData.name || !formData.confirmPassword || !selectedGender) {
              showMessage('Please fill the complete form for Signup', 'red');
              return;
            }
            try {
              const response = await axios.post('http://127.0.0.1:8080/api/signup', {
                  name: formData.name,
                  email: formData.email,
                  gender: selectedGender,
                  password: formData.password,
                  confirmPassword: formData.confirmPassword,
              });
              console.log(response);
              showMessage('Signup successful', 'green');
            } catch (error) {
              console.log(error.response.data.message,'error')
              const {errors} = error.response.data.message;
              Object.values(errors).forEach((error) => {
                showMessage(error.message, 'red');
              });
            }
          }
        } catch (error) {
          console.error('Error:', error);
        }
    };

    return(
        <div className="auth-container">
           <div className='auth-bg-container'>
               <Image src="/Images/auth-bg.png" alt="auth-plane-image" width={500} height={100} />
           </div>
           <div className="auth-sub-container">
                <div className='auth-content'>
                    <h1 className="auth-title">{isLoginView ? 'Login' : 'Sign Up'}</h1>
                    <p className='auth-parah'>
                    {isLoginView
                        ? 'Welcome, Enter your credentials and get ready for your awesome travel journey'
                        : 'Join us to be part of an awesome travel family with amazing trips and memories'
                    }</p>
                    <p className='auth-switch'>
                    {isLoginView ? "Don't have an account ?" : 'Already have an account?'}
                    <button onClick={switchView} className='auth-switch-btn'>{isLoginView ? 'Signup now' : 'Login now'}</button></p>
                </div>
                <div>
                    <Image src={isLoginView ? '/Images/login-boy.png' : '/Images/signup-boy.png'} alt="auth-side-image" width={300} height={200}/>
                </div>
                <div className="form-container">
                    <p style={{ color: message.color }}>{message.text}</p>
                    <input 
                        className="auth-form-input" 
                        placeholder={isLoginView ? 'Enter email' : 'Name'} 
                        name={isLoginView ? 'email' : 'name'}
                        type="text" 
                        onChange={handleInputChange}
                    />
                    {!isLoginView && <input 
                        className="auth-form-input" 
                        name="email"
                        placeholder="Email" 
                        onChange={handleInputChange}
                    />}
                    <input 
                        className="auth-form-input" 
                        name="password"
                        placeholder="Enter password" 
                        type="password" 
                        onChange={handleInputChange}
                    />
                    {!isLoginView && <input 
                        className="auth-form-input" 
                        name="confirmPassword"
                        placeholder="Confirm Password" 
                        onChange={handleInputChange}
                    />}
                    {!isLoginView && ( 
                        <div className="auth-gender">
                            <p className='gender-title'>Gender</p>
                            <label>
                              <input
                                type="radio"
                                name="gender"
                                value="male"
                                className='gender-radio'
                                checked={selectedGender === "male"}
                                onChange={() => handleGenderChange("male")}
                              />
                              Male
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="gender"
                                value="female"
                                className='gender-radio'
                                checked={selectedGender === "female"}
                                onChange={() => handleGenderChange("female")}
                              />
                              Female
                            </label>
                        </div>
                    )}
                    <button className="auth-button" onClick={handleAuthAction}>{isLoginView ? 'Login' : 'Signup'}</button>
                </div>
           </div>
        </div>
    )
}