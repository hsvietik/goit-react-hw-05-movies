import React from 'react';
import { Outlet } from 'react-router-dom';
import { Section, SectionNav, InfoLink } from './AdditionalInfo.styled';

function AdditionalInfo() {
  return (
    <Section>
      <SectionNav>
        <h3>Additional information</h3>
        <InfoLink to="cast"> Cast </InfoLink>
        <InfoLink to="reviews"> Reviews </InfoLink>
      </SectionNav>
      <Outlet />
    </Section>
  );
}

export default AdditionalInfo;
