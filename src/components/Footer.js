import React from 'react';
import { CDBFooter } from 'cdbreact';
import { CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

const Footer = () => {
  return (
    <CDBFooter className="shadow" style={{background:'#9F0500',color:'#FFFFFF'}}>
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Contactanos en
            </p>
            <p className="h5 mb-4" style={{ margin:'24px',paddingTop: '20' }}>
              Correo
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">ventas@feenilux.com</CDBFooterLink>
              <CDBFooterLink href="/">contacto@feenilux.com</CDBFooterLink>
            </CDBBox>
            <p className="h5 mb-4" style={{ margin:'24px',paddingTop: '20' }}>
              Whatsapp
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">+51 999 999 999</CDBFooterLink>
              <CDBFooterLink href="/">+51 888 888 888</CDBFooterLink>
            </CDBBox>
            {
                /*
                <p className="my-3" style={{ width: '250px' }}>
              We are creating High Quality Resources and tools to Aid developers during the
              developement of their projects
            </p>
<CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
                */
            }
            
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{  margin:'24px',fontWeight: '600' }}>
              Nosotros
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">¿Quienes somos?</CDBFooterLink>
              <CDBFooterLink href="/">Nuestros servicios</CDBFooterLink>
              <CDBFooterLink href="/">Terminos y condiciones</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ margin:'24px',fontWeight: '600' }}>
              Ubicanos en:
            </p>
            <p className="my-3" style={{ width: '250px' }}>
                Av. Calle tal n123 - Lima - Lima
            </p>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; FENIX LAUPA S.A.C. 2013 - www.feenilux.com</small>
      </CDBBox>
    </CDBFooter>
  );
};
export default Footer;
