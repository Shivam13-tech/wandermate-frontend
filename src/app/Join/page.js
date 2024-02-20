"use client"
import { useState } from 'react';
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
            const response = await fetch('http://127.0.0.1:8080/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: formData.email,
                password: formData.password,
              }),
            });
    
            if (response.ok) {
              console.log('Login successful');
              alert('Login successful');
            } else {
              console.error('Login failed');
              alert('Login failed');
            }
          } else {
            const response = await fetch('http://127.0.0.1:8080/api/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                gender: selectedGender,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
              }),
            });
    
            if (response.ok) {
              console.log('Signup successful');
              alert('Signup successful');
            } else {
              console.error('Signup failed');
              alert('Signup failed');
            }
          }
          setFormData({
            name: '',
            email: '',
            gender: '',
            password: '',
            confirmPassword: '',
          });
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