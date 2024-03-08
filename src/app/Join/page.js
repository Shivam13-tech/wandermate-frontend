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
        <div className="flex flex-row md:flex-col justify-center items-center h-[90vh]">
           <div className='hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2'>
               <Image src="/Images/auth-bg.png" alt="auth-plane-image" width={500} height={100} />
           </div>
           <div className="flex flex-col items-center justify-center lg:flex-row">
                <div className='mx-[3vw] relative'>
                    <h1 className="text-center mb-[2vh] sm:text-4xl md:text-6xl lg:text-5xl ">{isLoginView ? 'Login' : 'Sign Up'}</h1>
                    <p className='sm:text-center md:text-center lg:text-start sm:text-lg md:text-xl lg:text-2xl sm:w-[95vw] md:w-[50vw] lg:w-[25vw] mb-[2vh]'>
                    {isLoginView
                        ? 'Welcome, Enter your credentials and get ready for your awesome travel journey'
                        : 'Join us to be part of an awesome travel family with amazing trips and memories'
                    }</p>
                    <p className='text-center text-xl'>
                    {isLoginView ? "Don't have an account ?" : 'Already have an account?'}
                    <button onClick={switchView} className='text-buttonColor font-extrabold underline pl-[1vw]'>{isLoginView ? 'Signup now' : 'Login now'}</button></p>
                </div>
                <div>
                    <Image src={isLoginView ? '/Images/login-boy.png' : '/Images/signup-boy.png'} alt="auth-side-image" width={300} height={200}/>
                </div>
                <div className="flex flex-col items-center justify-center mx-[3vw]">
                    <p style={{ color: message.color }}>{message.text}</p>
                    <input 
                        className="rounded sm:w-[70vw] md:w-[45vw] lg:w-[15vw] sm:h-[5vh] md:h-[5vh] lg:h-[4vh]  sm:m-[0.9vh] lg:m-[0.8vh] lg:m-[0.5vh] sm:p-[1.8vw] lg:p-[0.7vw] lg:p-[0.5vw] bg-inputBoxColor outline-none focus:shadow-outline-blue focus:border-blue-500 focus:ring focus:ring-blue-400" 
                        placeholder={isLoginView ? 'Enter email' : 'Name'} 
                        name={isLoginView ? 'email' : 'name'}
                        type="text" 
                        onChange={handleInputChange}
                    />
                    {!isLoginView && <input 
                        className="rounded sm:w-[70vw] md:w-[45vw] lg:w-[15vw] sm:h-[5vh] md:h-[5vh] lg:h-[4vh] sm:m-[0.9vh] lg:m-[0.8vh] lg:m-[0.5vh] sm:p-[1.8vw] lg:p-[0.7vw] lg:p-[0.5vw] bg-inputBoxColor outline-none focus:shadow-outline-blue focus:border-blue-500 focus:ring focus:ring-blue-400" 
                        name="email"
                        placeholder="Email" 
                        onChange={handleInputChange}
                    />}
                    <input 
                        className="rounded sm:w-[70vw] md:w-[45vw] lg:w-[15vw] sm:h-[5vh] md:h-[5vh] lg:h-[4vh] sm:m-[0.9vh] lg:m-[0.8vh] lg:m-[0.5vh] sm:p-[1.8vw] lg:p-[0.7vw] lg:p-[0.5vw] bg-inputBoxColor outline-none focus:shadow-outline-blue focus:border-blue-500 focus:ring focus:ring-blue-400" 
                        name="password"
                        placeholder="Enter password" 
                        type="password" 
                        onChange={handleInputChange}
                    />
                    {!isLoginView && <input 
                        className="rounded sm:w-[70vw] md:w-[45vw] lg:w-[15vw] sm:h-[5vh] md:h-[5vh] lg:h-[4vh] sm:m-[0.9vh] lg:m-[0.8vh] lg:m-[0.5vh] sm:p-[1.8vw] lg:p-[0.7vw] lg:p-[0.5vw] bg-inputBoxColor outline-none focus:shadow-outline-blue focus:border-blue-500 focus:ring focus:ring-blue-400" 
                        name="confirmPassword"
                        placeholder="Confirm Password" 
                        onChange={handleInputChange}
                    />}
                    {!isLoginView && ( 
                        <div className="flex justify-center items-center mt-[1vh] mb-[1vh]">
                            <p className='font-extrabold'>Gender</p>
                            <label>
                              <input
                                type="radio"
                                name="gender"
                                value="male"
                                className='mx-[1vw]'
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
                                className='mx-[1vw]'
                                checked={selectedGender === "female"}
                                onChange={() => handleGenderChange("female")}
                              />
                              Female
                            </label>
                        </div>
                    )}
                    <button className="rounded bg-buttonColor sm:w-[70vw] md:w-[45vw] lg:w-[15vw] sm:h-[5vh] md:h-[5vh] lg:h-[4vh] m-[1vh] text-background shadow-2xl" onClick={handleAuthAction}>{isLoginView ? 'Login' : 'Signup'}</button>
                </div>
           </div>
        </div>
    )
}