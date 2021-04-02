import React, { FC } from 'react';
import { useMyAccount } from '../hooks/use-my-account';
import { SaveName } from '../save-name/save-name';

export const Login: FC = () => {
  const {
    onSetMyAccount,
  } = useMyAccount();

  return (
    <SaveName onSubmit={onSetMyAccount} />
  );
};
