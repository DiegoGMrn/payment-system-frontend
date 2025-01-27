'use client';
import React, { useEffect,useState } from 'react';
import './PerfilStyle.css'; // Importa los estilos
import Image from 'next/image';
import ImgProfile from './assetsProfile/profile.jpg'
import useFetchUser from './useFetchUser';
import Button from '@/app/components/Button';
import { useRouter } from  "next/navigation";;
const Perfil: React.FC = () => {
    const router = useRouter();
    const { user, loading, error, fetchUser } = useFetchUser();
    useEffect(() => {
        // Llama a la función para obtener los datos del usuario
        fetchUser(1); // Aquí puedes pasar el ID del usuario que desees mostrar
    }, []);
    return (
        <div className="container">
            <div className="profile-wrapper">
                <div className="profile">
                    <div className="profile-image">
                        <Image
                            src={ImgProfile}
                            alt="Profile"
                            width={150}
                            height={150}
                        />
                    </div>
                    <ul className="social-icons">
                    <li>
                            <a href="#instagram" title="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                                     stroke-linecap="round" stroke-linejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#twitter" title="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 
                                            10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5
                                            4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                                    >
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#threads" title="Threads">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                    fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7
                                            -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 
                                            3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1"
                                    >
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#linkedin" title="Linkedin">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                    fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 
                                            2 0 0 1 -2 -2z">
                                    </path>
                                    <path d="M8 11l0 5"></path>
                                    <path d="M8 8l0 .01"></path>
                                    <path d="M12 16l0 -5"></path>
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="profile-name">
                    <h2>{`${user?.firstname} ${user?.lastname}`}</h2>
                        <div className="profile-bio">
                            Datos: {user ? user.email : 'Loading...'} 
                            <button onClick={() => router.push('/pages/standard-user/change-pass')} className='isabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80
        transition w-full border-slate-700 flex items-center justify-center gap-2'>Cambiar Contraseña</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfil;