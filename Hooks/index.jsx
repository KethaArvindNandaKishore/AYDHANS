import React, { Children } from 'react'
import { createContext, useState } from 'react'
import { Python } from '@/constants';

export const ProgrammingLanguages = createContext(undefined);


const Data_Subject = ({children}) => {
    const python = Python
    const value = {
        python 
    }
  return (
    <ProgrammingLanguages value={value} options={{ headerShown: false }}>
        {children}
    </ProgrammingLanguages>
  )
}

export default Data_Subject