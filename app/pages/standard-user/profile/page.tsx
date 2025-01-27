import React from 'react';
import Card from '../../../components/Card';
import Landing from '../../../components/Landing';
import Perfil from '../../../components/Perfil';
import PasswordReset from '@/app/components/RecuperarContra';
import Button from '@/app/components/Button';
const StandardProfilePage: React.FC = () => {
    return (
        <div>
      <div className="left-panel flex">
        <Perfil />
      </div>
      <div className="right-panel">
        <Card />
      </div>
      <div className="bottom-panel">
        <Landing />
      </div>
      
    </div>
    );
};

export default StandardProfilePage;