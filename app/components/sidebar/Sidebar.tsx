'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import logo from '../../../public/imgs/ucn-logo.png';
import smallLogo from '../../../public/imgs/ucn-logo-small.png';
import bgImage from '../../../public/imgs/ucn-bg.png';
import Container from '../Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer, faReceipt, faRightFromBracket, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar: React.FC = () => {
    const router = useRouter();

    return (
        <Container>
            <nav className="container fixed left-0 top-0 h-full w-16 md:w-64 text-white flex flex-col justify-between bg-center bg-opacity-30" style={{ backgroundImage: `url(${bgImage.src})` }}>
                <div className="flex flex-col items-center p-4">
                    <div className="mb-8 w-full flex justify-center">
                        <Image src={smallLogo} alt="Small Logo UCN" className="block md:hidden w-10 h-25" />
                        <Image src={logo} alt="Logo UCN" className="hidden lg:block" />
                    </div>
                    <div className="flex flex-col space-y-4 w-full">
                        <button onClick={() => router.push('/pages/standard-user/landing')} className="rounded-full py-2 px-4 w-full text-left hover:bg-gray-700 flex items-center justify-center md:justify-start">
                            <FontAwesomeIcon icon={faHouse} className="w-5 h-5" />
                            <span className="hidden md:hidden lg:block ml-2">Home</span>
                        </button>
                        <button onClick={() => router.push('/pages/standard-user/transactions')} className="rounded-full py-2 px-4 w-full text-left hover:bg-gray-700 flex items-center justify-center md:justify-start">
                            <FontAwesomeIcon icon={faReceipt} className='w-5 h-5' />
                            <span className="hidden md:hidden lg:block ml-2">Transacciones</span>
                        </button>
                        <button onClick={() => router.push('/pages/standard-user/profile')} className="rounded-full py-2 px-4 w-full text-left hover:bg-gray-700 flex items-center justify-center md:justify-start">
                            <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                            <span className="hidden md:hidden lg:block ml-2">Perfil</span>
                        </button>
                        <button onClick={() => router.push('/pages/standard-user/payment')} className="rounded-full py-2 px-4 w-full text-left hover:bg-gray-700 flex items-center justify-center md:justify-start">
                            <FontAwesomeIcon icon={faMoneyBillTransfer} className="w-5 h-5" />
                            <span className="hidden md:hidden lg:block ml-2">Pago</span>
                        </button>
                    </div>
                </div>
                <div className="p-4">
                    <button className="rounded-full py-2 px-4 w-full text-left hover:bg-gray-700 flex items-center justify-center md:justify-start">
                        <FontAwesomeIcon icon={faRightFromBracket} className="w-5 h-5" />
                        <span className="hidden md:hidden lg:block ml-2">Cerrar Sesión</span>
                    </button>
                </div>
            </nav>
        </Container>
    );
};

export default Sidebar;
