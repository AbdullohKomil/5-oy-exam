import { createContext, useState } from 'react';

export const SearchAuthorContext = createContext();

export const SearchAuthorProvider = ({ children }) => {
  const [searchAuthor, setSearchAuthor] = useState('');

  return (
    <SearchAuthorContext.Provider value={{ searchAuthor, setSearchAuthor }}>
      {children}
    </SearchAuthorContext.Provider>
  );
};
